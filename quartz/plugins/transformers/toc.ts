import { QuartzTransformerPlugin } from "../types"
import { Root } from "mdast"
import { visit } from "unist-util-visit"
import { toString } from "mdast-util-to-string"
import Slugger from "github-slugger"
import katex from "katex"

// Render a heading for the table of contents, typesetting any inline math
// with KaTeX so headings like "Distribution of $\bar x$" display properly.
const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
const headingToHtml = (node: any): string | undefined => {
  let hasMath = false
  const render = (n: any): string => {
    if (n.type === "inlineMath") {
      hasMath = true
      return katex.renderToString(n.value, { throwOnError: false, output: "html" })
    }
    if (Array.isArray(n.children)) return n.children.map(render).join("")
    return escapeHtml(toString(n))
  }
  const html = render(node)
  return hasMath ? html : undefined
}

export interface Options {
  maxDepth: 1 | 2 | 3 | 4 | 5 | 6
  minEntries: number
  showByDefault: boolean
  collapseByDefault: boolean
}

const defaultOptions: Options = {
  maxDepth: 3,
  minEntries: 1,
  showByDefault: true,
  collapseByDefault: false,
}

interface TocEntry {
  depth: number
  text: string
  html?: string
  slug: string // this is just the anchor (#some-slug), not the canonical slug
}

const slugAnchor = new Slugger()
export const TableOfContents: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "TableOfContents",
    markdownPlugins() {
      return [
        () => {
          return async (tree: Root, file) => {
            const display = file.data.frontmatter?.enableToc ?? opts.showByDefault
            if (display) {
              slugAnchor.reset()
              const toc: TocEntry[] = []
              let highestDepth: number = opts.maxDepth
              visit(tree, "heading", (node) => {
                if (node.depth <= opts.maxDepth) {
                  const text = toString(node)
                  highestDepth = Math.min(highestDepth, node.depth)
                  toc.push({
                    depth: node.depth,
                    text,
                    html: headingToHtml(node),
                    slug: slugAnchor.slug(text),
                  })
                }
              })

              if (toc.length > 0 && toc.length > opts.minEntries) {
                file.data.toc = toc.map((entry) => ({
                  ...entry,
                  depth: entry.depth - highestDepth,
                }))
                file.data.collapseToc = opts.collapseByDefault
              }
            }
          }
        },
      ]
    },
  }
}

declare module "vfile" {
  interface DataMap {
    toc: TocEntry[]
    collapseToc: boolean
  }
}

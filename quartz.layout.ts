import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      // GitHub: "https://github.com/jackyzha0/quartz",
      // "Discord Community": "https://discord.gg/cRFFHYye7t",
      "www.trevorkafka.com": "http://www.trevorkafka.com"
    },
  }),
}

// Explorer options (custom addition): subject folders open by default and listed in
// course order rather than alphabetically; notes inside each folder stay alphabetical.
// Note: sortFn is serialized with toString() and evaluated in the browser, so it must be
// self-contained: no outer variables and no inner named functions (esbuild wraps those in
// a __name() helper that does not exist on the page).
const explorerOptions: Parameters<typeof Component.Explorer>[0] = {
  folderDefaultState: "open",
  sortFn: (a, b) => {
    const folderOrder = [
      "Algebra",
      "Geometry & Trigonometry",
      "Precalculus",
      "Calculus",
      "Probability & Counting",
      "Physics",
      "General Reference",
    ]
    if (a.isFolder && b.isFolder) {
      const ia = folderOrder.indexOf(a.displayName)
      const ib = folderOrder.indexOf(b.displayName)
      if (ia !== -1 || ib !== -1) {
        if (ia === -1) return 1
        if (ib === -1) return -1
        return ia - ib
      }
    } else if (a.isFolder !== b.isFolder) {
      return a.isFolder ? -1 : 1
    }
    return a.displayName.localeCompare(b.displayName, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents({ layout: "modern", class: "mobile-only"})), // custom addition
  ],
  left: [
    Component.PageTitleWithLink(), // custom addition: site title with main-website link beneath it
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        // { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(explorerOptions),
  ],
  right: [
    // Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitleWithLink(), // custom addition: site title with main-website link beneath it
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(explorerOptions),
  ],
  right: [],
}

import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

// Custom addition: the site title with a small link to the main website directly
// beneath it. Rendering both inside one component keeps the sidebar's flex gap from
// separating them. On mobile the sidebar collapses into a single row, so the block
// stacks the title and a smaller, non-wrapping link beneath it.
interface Options {
  url: string
  text: string
}

const defaultOptions: Options = {
  url: "https://www.trevorkafka.com",
  text: "www.trevorkafka.com",
}

export default ((userOpts?: Partial<Options>) => {
  const opts: Options = { ...defaultOptions, ...userOpts }

  const PageTitleWithLink: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
    const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
    const baseDir = pathToRoot(fileData.slug!)
    return (
      <div class={classNames(displayClass, "page-title-block")}>
        <h2 class="page-title">
          <a href={baseDir}>{title}</a>
        </h2>
        <p class="main-site-link">
          <a href={opts.url} title="Trevor's main website">
            {opts.text}
          </a>
        </p>
      </div>
    )
  }

  PageTitleWithLink.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
.main-site-link {
  margin: 0.1rem 0 0 0;
  font-size: 0.9rem;
  line-height: 1.3;
}
.main-site-link a {
  color: var(--gray);
}
.main-site-link a:hover {
  color: var(--secondary);
}
@media all and (max-width: 800px) {
  .main-site-link {
    font-size: 0.75rem;
    margin-top: 0;
    white-space: nowrap;
  }
}
`

  return PageTitleWithLink
}) satisfies QuartzComponentConstructor

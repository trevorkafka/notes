import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      {/*<a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>*/} {/*original version*/} 
      <a href="http://trevorkafka.github.io/notes/">Return to Trevor's Notes</a> | <a href="http://www.trevorkafka.com/">Return to www.trevorkafka.com</a> {/*customized version*/}
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor

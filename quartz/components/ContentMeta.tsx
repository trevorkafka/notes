import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { FullSlug, resolveRelative } from "../util/path"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"
// @ts-ignore
import script from "./scripts/permalink.inline"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (fileData.dates) {
        segments.push(<Date date={getDate(cfg, fileData)!} locale={cfg.locale} />)
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes*2), //minutes modified to minutes*2 in order to extend reading time in consideration of content type and audience
        })
        segments.push(<span>{displayedTime}</span>)
      }

      // Permalink derived from the note's six-digit alias (custom addition).
      // The alias itself is what generates the redirect page, so the URL stays
      // stable regardless of where the note lives in the content folder.
      const aliases = fileData.frontmatter?.aliases
      const permalinkAlias = Array.isArray(aliases)
        ? aliases.map(String).find((a) => /^\d{6}$/.test(a))
        : undefined
      if (permalinkAlias) {
        const url = cfg.baseUrl
          ? `https://${cfg.baseUrl}/${permalinkAlias}`
          : resolveRelative(fileData.slug!, permalinkAlias as FullSlug)
        segments.push(
          <span class="permalink">
            Permalink:{" "}
            <span class="permalink-link">
              <a href={url}>{url}</a>
              <button
                type="button"
                class="permalink-copy"
                aria-label="Copy permalink"
                title="Copy permalink"
                data-url={url}
              ></button>
            </span>
          </span>,
        )
      }

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style
  ContentMetadata.afterDOMLoaded = script

  return ContentMetadata
}) satisfies QuartzComponentConstructor

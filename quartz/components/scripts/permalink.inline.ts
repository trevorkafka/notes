// Custom addition: copy-to-clipboard button for the permalink shown in ContentMeta.
// Mirrors the behavior of Quartz's code-block clipboard button (clipboard.inline.ts).
const permalinkSvgCopy =
  '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>'
const permalinkSvgCheck =
  '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"><path fill-rule="evenodd" fill="rgb(63, 185, 80)" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>'

document.addEventListener("nav", () => {
  const buttons = document.getElementsByClassName(
    "permalink-copy",
  ) as HTMLCollectionOf<HTMLButtonElement>
  for (const button of buttons) {
    const url = button.dataset.url
    if (!url) continue
    button.innerHTML = permalinkSvgCopy
    function showCopied() {
      button.blur()
      button.innerHTML = permalinkSvgCheck
      setTimeout(() => {
        button.innerHTML = permalinkSvgCopy
      }, 2000)
    }
    // Fallback for contexts where the async Clipboard API is unavailable or denied.
    function legacyCopy(): boolean {
      const ta = document.createElement("textarea")
      ta.value = url!
      ta.setAttribute("readonly", "")
      ta.style.position = "fixed"
      ta.style.opacity = "0"
      document.body.appendChild(ta)
      ta.select()
      let ok = false
      try {
        ok = document.execCommand("copy")
      } catch {}
      document.body.removeChild(ta)
      return ok
    }
    function onClick() {
      const write = navigator.clipboard?.writeText(url!)
      if (!write) {
        if (legacyCopy()) showCopied()
        return
      }
      write.then(showCopied, (error) => {
        if (legacyCopy()) showCopied()
        else console.error(error)
      })
    }
    button.addEventListener("click", onClick)
    window.addCleanup(() => button.removeEventListener("click", onClick))
  }
})

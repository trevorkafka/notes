// Custom addition: shrink wide display equations so they fit the page width
// (mainly on phones) instead of needing a sideways scrollbar. Each equation is
// scaled down only as far as needed, never below MIN_SCALE; anything still too
// wide after that keeps the normal horizontal scroll as a fallback.
const MIN_SCALE = 0.6

function fitDisplay(d: HTMLElement) {
  d.style.fontSize = ""
  const avail = d.clientWidth
  if (avail === 0) return // hidden, e.g. inside a collapsed callout
  for (let pass = 0; pass < 2; pass++) {
    const need = d.scrollWidth
    if (need <= avail + 1) return
    const current = parseFloat(d.style.fontSize || "100") / 100
    const next = Math.max(MIN_SCALE, (current * avail) / need)
    d.style.fontSize = `${(next * 100).toFixed(1)}%`
    if (next === MIN_SCALE) return
  }
}

function fitAll() {
  document
    .querySelectorAll<HTMLElement>("article .katex-display")
    .forEach((d) => fitDisplay(d))
}

document.addEventListener("nav", () => {
  fitAll()

  let timer: number | undefined
  const onResize = () => {
    window.clearTimeout(timer)
    timer = window.setTimeout(fitAll, 100)
  }
  window.addEventListener("resize", onResize)
  window.addCleanup(() => window.removeEventListener("resize", onResize))

  // equations inside a callout can only be measured once it is expanded
  document.querySelectorAll<HTMLElement>(".callout.is-collapsible .callout-title").forEach((t) => {
    const refit = () => window.setTimeout(fitAll, 350)
    t.addEventListener("click", refit)
    window.addCleanup(() => t.removeEventListener("click", refit))
  })
})

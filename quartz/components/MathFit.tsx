// Custom addition: renders nothing; its script shrinks wide display equations to
// fit narrow screens (see scripts/mathfit.inline.ts).
import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import mathFitScript from "./scripts/mathfit.inline"

const MathFit: QuartzComponent = () => null
MathFit.afterDOMLoaded = mathFitScript

export default (() => MathFit) satisfies QuartzComponentConstructor

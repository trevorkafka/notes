---
aliases:
  - "115277"
tags:
  - reference-sheets
  - calculus
  - AP-calculus-AB
  - AP-calculus-BC
  - physics
  - physics-mechanics
  - AP-physics-C-mechanics
modified: 2026-11-13
draft: false
---

See also [[Derivative Rules]] and [[Antiderivative Rules]].

A particle moves along a horizontal line (the $x$-axis). Its position at time $t$ is $x(t)$, its velocity is $v(t)$, and its acceleration is $a(t)$.

# Position, Velocity, and Acceleration
$$
\begin{align*}
&v(t) = \frac{dx}{dt} && a(t) = \frac{dv}{dt} \\[1em]
&x(t) = x(t_0) + \int_{t_0}^{t} v(s)\, ds && v(t) = v(t_0) + \int_{t_0}^{t} a(s)\, ds
\end{align*}
$$
Here $t_0$ is any time at which the position or velocity is known, most often $t_0 = 0$. In that case, $x(0)$ is the **initial position** and $v(0)$ is the **initial velocity**. The letter $s$ is just the variable of integration, so that it doesn't clash with the upper limit $t$.

# Speed, Displacement, and Distance

| Quantity | Formula |
| --- | --- |
| speed | $\lvert v(t) \rvert$ |
| initial speed | $\lvert v(0) \rvert$ |
| displacement between $t = t_1$ and $t = t_2$ | $\displaystyle \int_{t_1}^{t_2} v(t)\, dt = x(t_2) - x(t_1)$ |
| total distance traveled between $t = t_1$ and $t = t_2$ | $\displaystyle \int_{t_1}^{t_2} \lvert v(t) \rvert\, dt$\* |
| change in velocity between $t = t_1$ and $t = t_2$ | $\displaystyle \int_{t_1}^{t_2} a(t)\, dt = v(t_2) - v(t_1)$ |
| average velocity between $t = t_1$ and $t = t_2$ | $\dfrac{x(t_2) - x(t_1)}{t_2 - t_1} = \dfrac{1}{t_2 - t_1} \displaystyle \int_{t_1}^{t_2} v(t)\, dt$ |
| average acceleration between $t = t_1$ and $t = t_2$ | $\dfrac{v(t_2) - v(t_1)}{t_2 - t_1}$ |
| average speed between $t = t_1$ and $t = t_2$ | $\dfrac{\text{total distance}}{t_2 - t_1} = \dfrac{1}{t_2 - t_1} \displaystyle \int_{t_1}^{t_2} \lvert v(t) \rvert\, dt$ |

\*Total distance can also be found without integrating $\lvert v(t) \rvert$. Split $[t_1, t_2]$ at each time the particle changes direction, so that it moves only left or only right during each piece. Then add up the absolute value of the displacement during each piece.

> [!example]- Example: total distance
> A particle moves along the $x$-axis with position $x(t) = t^3 - 6t^2 + 9t + 2$ for $0 \le t \le 5$. Find the total distance the particle travels for $0 \le t \le 5$.
>
> ---
>
> First find when the particle changes direction by solving $v(t) = 0$.
> $$
> \begin{align*}
> v(t) = x'(t) &= 3t^2 - 12t + 9 \\
> 0 &= 3(t^2 - 4t + 3) \\
> 0 &= 3(t - 1)(t - 3) \\
> t &= 1, 3
> \end{align*}
> $$
> Checking the sign of $v(t)$ on each side, split the motion into left and right chunks.
>
> | Chunk | Time interval | Direction |
> | --- | --- | --- |
> | A | between $t = 0$ and $t = 1$ | moving right |
> | B | between $t = 1$ and $t = 3$ | moving left |
> | C | between $t = 3$ and $t = 5$ | moving right |
>
> Find the position at the start and end of each chunk, and the distance covered during each.
>
> | $t$ | $x(t)$ | Distance during chunk |
> | --- | --- | --- |
> | $0$ | $2$ | |
> | $1$ | $6$ | A: $\lvert 6 - 2 \rvert = 4$ |
> | $3$ | $2$ | B: $\lvert 2 - 6 \rvert = 4$ |
> | $5$ | $22$ | C: $\lvert 22 - 2 \rvert = 20$ |
>
> The diagram below shows the motion along the $x$-axis, with each chunk drawn as an arrow.
>
> <div class="pm-figure pm-motion"><svg viewBox="0 0 640 250" class="pm-graph" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="pm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="pm-arrowhead"/></marker></defs><line x1="30" y1="210" x2="620" y2="210" class="pm-axis"/><text x="624" y="214" class="pm-label">x</text><line x1="40.0" y1="205" x2="40.0" y2="215" class="pm-axis"/><text x="40.0" y="232" class="pm-tick" text-anchor="middle">0</text><line x1="86.7" y1="205" x2="86.7" y2="215" class="pm-axis"/><text x="86.7" y="232" class="pm-tick" text-anchor="middle">2</text><line x1="133.3" y1="205" x2="133.3" y2="215" class="pm-axis"/><text x="133.3" y="232" class="pm-tick" text-anchor="middle">4</text><line x1="180.0" y1="205" x2="180.0" y2="215" class="pm-axis"/><text x="180.0" y="232" class="pm-tick" text-anchor="middle">6</text><line x1="226.7" y1="205" x2="226.7" y2="215" class="pm-axis"/><text x="226.7" y="232" class="pm-tick" text-anchor="middle">8</text><line x1="273.3" y1="205" x2="273.3" y2="215" class="pm-axis"/><text x="273.3" y="232" class="pm-tick" text-anchor="middle">10</text><line x1="320.0" y1="205" x2="320.0" y2="215" class="pm-axis"/><text x="320.0" y="232" class="pm-tick" text-anchor="middle">12</text><line x1="366.7" y1="205" x2="366.7" y2="215" class="pm-axis"/><text x="366.7" y="232" class="pm-tick" text-anchor="middle">14</text><line x1="413.3" y1="205" x2="413.3" y2="215" class="pm-axis"/><text x="413.3" y="232" class="pm-tick" text-anchor="middle">16</text><line x1="460.0" y1="205" x2="460.0" y2="215" class="pm-axis"/><text x="460.0" y="232" class="pm-tick" text-anchor="middle">18</text><line x1="506.7" y1="205" x2="506.7" y2="215" class="pm-axis"/><text x="506.7" y="232" class="pm-tick" text-anchor="middle">20</text><line x1="553.3" y1="205" x2="553.3" y2="215" class="pm-axis"/><text x="553.3" y="232" class="pm-tick" text-anchor="middle">22</text><line x1="600.0" y1="205" x2="600.0" y2="215" class="pm-axis"/><text x="600.0" y="232" class="pm-tick" text-anchor="middle">24</text><line x1="86.7" y1="45" x2="180.0" y2="45" class="pm-move" marker-end="url(#pm-arrow)"/><circle cx="86.7" cy="45" r="4" class="pm-dot"/><line x1="86.7" y1="45" x2="86.7" y2="210" class="pm-guide"/><text x="133.3" y="35" class="pm-area" text-anchor="middle">A: 4 units</text><text x="194.0" y="50" class="pm-note">t = 0 to t = 1</text><line x1="180.0" y1="105" x2="86.7" y2="105" class="pm-move" marker-end="url(#pm-arrow)"/><circle cx="180.0" cy="105" r="4" class="pm-dot"/><line x1="180.0" y1="105" x2="180.0" y2="210" class="pm-guide"/><text x="133.3" y="95" class="pm-area" text-anchor="middle">B: 4 units</text><text x="194.0" y="110" class="pm-note">t = 1 to t = 3</text><line x1="86.7" y1="165" x2="553.3" y2="165" class="pm-move" marker-end="url(#pm-arrow)"/><circle cx="86.7" cy="165" r="4" class="pm-dot"/><line x1="86.7" y1="165" x2="86.7" y2="210" class="pm-guide"/><text x="320.0" y="155" class="pm-area" text-anchor="middle">C: 20 units</text><text x="320.0" y="185" class="pm-note" text-anchor="middle">t = 3 to t = 5</text><line x1="553.3" y1="165" x2="553.3" y2="210" class="pm-guide"/></svg></div>
>
> Adding up the chunks gives the total distance.
> $$
> 4 + 4 + 20 = 28 \text{ units}
> $$
> As a check, $\displaystyle \int_0^5 \lvert v(t) \rvert\, dt$ also gives $28$. The displacement is only $x(5) - x(0) = 20$, because the leftward motion during chunk B partly cancels out.

# Interpreting the Signs
## Position

| Condition | Meaning |
| --- | --- |
| $x(t) < 0$ | particle is to the left of the origin |
| $x(t) = 0$ | particle is at the origin |
| $x(t) > 0$ | particle is to the right of the origin |

## Velocity

| Condition | Meaning |
| --- | --- |
| $v(t) < 0$ | particle is moving to the left |
| $v(t) = 0$ | particle is stopped |
| $v(t) > 0$ | particle is moving to the right |

## Velocity and Acceleration Together

| Condition | Meaning |
| --- | --- |
| $v(t)$ and $a(t)$ have the same sign | particle is speeding up |
| $v(t)$ and $a(t)$ have opposite signs | particle is slowing down |
| $v(t)$ changes sign | particle is changing direction† |
| $a(t) = 0$ | particle has constant velocity\* |

†$v(t) = 0$ alone isn't enough. For example, if $v(t) = (t - 2)^2$, the particle stops at $t = 2$ but keeps moving right afterward.

\*Including being stationary, i.e. remaining at rest.

> [!tip] Writing justifications
> Name both values and their signs, not just the conclusion. For example: "The speed is increasing at $t = 4$ because $v(4) > 0$ and $a(4) > 0$, which have the same sign."

# Farthest Left or Right

To find the particle's leftmost or rightmost position on $[a, b]$:

1. List the candidate times: $t = a$, $t = b$, and every time $v(t)$ changes sign.
2. Evaluate $x(t)$ at each candidate.
3. The smallest value is the leftmost position, and the largest value is the rightmost position.

# Reading Graphs

| Graph | Feature | Tells you |
| --- | --- | --- |
| $x(t)$ vs. $t$ | slope | velocity |
| $x(t)$ vs. $t$ | concave up / concave down | $a(t) > 0$ / $a(t) < 0$ |
| $v(t)$ vs. $t$ | above / below the $t$-axis | moving right / moving left |
| $v(t)$ vs. $t$ | slope | acceleration |
| $v(t)$ vs. $t$ | signed area | displacement |
| $v(t)$ vs. $t$ | total (unsigned) area | total distance |

The graphs below show the particle from the example above, with $x(t) = t^3 - 6t^2 + 9t + 2$ and $v(t) = 3t^2 - 12t + 9$ for $0 \le t \le 5$.

<style>
	@media (max-width: 899px) { .desktop { display: none; } .mobile { display: inline; } }
	@media (min-width: 900px) { .desktop { display: inline; } .mobile { display: none; } }
	.answer-space { border-bottom: solid 1px var(--darkgray); }
	.answer-box { text-align: center; display: inline-block; width: 36px; cursor: pointer; }
	.answer-text { color: red; font-weight: bold; opacity: 0; transition: opacity 0.2s ease; }
	.question-box:hover .answer-text { opacity: 1; }
	.pm-figure { width: 100%; max-width: 640px; margin: 0.5rem auto 1.5rem; }
	.pm-graph { width: 100%; height: auto; font-family: var(--bodyFont); }
	.pm-grid { stroke: var(--lightgray); stroke-width: 1; }
	.pm-axis { stroke: var(--darkgray); stroke-width: 1.5; }
	.pm-curve { fill: none; stroke: var(--secondary); stroke-width: 3; }
	.pm-dot { fill: var(--secondary); }
	.pm-open { fill: var(--light); stroke: var(--secondary); stroke-width: 2; }
	.pm-tick { fill: var(--gray); font-size: 13px; }
	.pm-label { fill: var(--dark); font-size: 15px; font-style: italic; }
	.pm-note { fill: var(--darkgray); font-size: 13px; }
	.pm-area { fill: var(--dark); font-size: 15px; font-weight: bold; }
	.pm-pos { fill: rgba(46, 160, 67, 0.28); }
	.pm-move { stroke: var(--secondary); stroke-width: 3; }
	.pm-arrowhead { fill: var(--secondary); }
	.pm-guide { stroke: var(--gray); stroke-width: 1; stroke-dasharray: 4 4; }
	.pm-neg { fill: rgba(220, 60, 60, 0.28); }
</style>

**Position vs. time**

<div class="pm-figure">
<svg viewBox="0 0 640 300" class="pm-graph" role="img" xmlns="http://www.w3.org/2000/svg">
<line x1="56.0" y1="18" x2="56.0" y2="260" class="pm-grid"/>
<text x="56.0" y="278" class="pm-tick" text-anchor="middle">0</text>
<line x1="168.0" y1="18" x2="168.0" y2="260" class="pm-grid"/>
<text x="168.0" y="278" class="pm-tick" text-anchor="middle">1</text>
<line x1="280.0" y1="18" x2="280.0" y2="260" class="pm-grid"/>
<text x="280.0" y="278" class="pm-tick" text-anchor="middle">2</text>
<line x1="392.0" y1="18" x2="392.0" y2="260" class="pm-grid"/>
<text x="392.0" y="278" class="pm-tick" text-anchor="middle">3</text>
<line x1="504.0" y1="18" x2="504.0" y2="260" class="pm-grid"/>
<text x="504.0" y="278" class="pm-tick" text-anchor="middle">4</text>
<line x1="616.0" y1="18" x2="616.0" y2="260" class="pm-grid"/>
<text x="616.0" y="278" class="pm-tick" text-anchor="middle">5</text>
<line x1="56" y1="171.3" x2="616" y2="171.3" class="pm-grid"/>
<text x="48" y="175.3" class="pm-tick" text-anchor="end">5</text>
<line x1="56" y1="130.9" x2="616" y2="130.9" class="pm-grid"/>
<text x="48" y="134.9" class="pm-tick" text-anchor="end">10</text>
<line x1="56" y1="90.6" x2="616" y2="90.6" class="pm-grid"/>
<text x="48" y="94.6" class="pm-tick" text-anchor="end">15</text>
<line x1="56" y1="50.3" x2="616" y2="50.3" class="pm-grid"/>
<text x="48" y="54.3" class="pm-tick" text-anchor="end">20</text>
<circle cx="168.0" cy="163.2" r="5" class="pm-dot"/>
<circle cx="392.0" cy="195.5" r="5" class="pm-dot"/>
<circle cx="280.0" cy="179.3" r="5" class="pm-open"/>
<text x="168.0" y="151.2" class="pm-note" text-anchor="middle">horizontal tangent</text>
<text x="392.0" y="233.5" class="pm-note" text-anchor="middle">horizontal tangent</text>
<text x="270.0" y="199.3" class="pm-note" text-anchor="end">inflection point</text>
<text x="156.8" y="50.3" class="pm-note" text-anchor="middle">concave down</text>
<text x="459.2" y="50.3" class="pm-note" text-anchor="middle">concave up</text>
<line x1="56" y1="211.6" x2="626" y2="211.6" class="pm-axis"/>
<line x1="56" y1="260" x2="56" y2="12" class="pm-axis"/>
<text x="630" y="215.6" class="pm-label">t</text>
<text x="62" y="22" class="pm-label">x(t)</text>
<polyline points="56.0,195.5 57.1,194.7 58.2,194.0 59.4,193.3 60.5,192.6 61.6,192.0 62.7,191.3 63.8,190.6 65.0,190.0 66.1,189.3 67.2,188.7 68.3,188.1 69.4,187.4 70.6,186.8 71.7,186.2 72.8,185.6 73.9,185.1 75.0,184.5 76.2,183.9 77.3,183.4 78.4,182.8 79.5,182.3 80.6,181.8 81.8,181.2 82.9,180.7 84.0,180.2 85.1,179.7 86.2,179.2 87.4,178.8 88.5,178.3 89.6,177.8 90.7,177.4 91.8,176.9 93.0,176.5 94.1,176.1 95.2,175.6 96.3,175.2 97.4,174.8 98.6,174.4 99.7,174.0 100.8,173.7 101.9,173.3 103.0,172.9 104.2,172.6 105.3,172.2 106.4,171.9 107.5,171.5 108.6,171.2 109.8,170.9 110.9,170.6 112.0,170.3 113.1,170.0 114.2,169.7 115.4,169.4 116.5,169.1 117.6,168.8 118.7,168.6 119.8,168.3 121.0,168.1 122.1,167.8 123.2,167.6 124.3,167.4 125.4,167.1 126.6,166.9 127.7,166.7 128.8,166.5 129.9,166.3 131.0,166.1 132.2,165.9 133.3,165.8 134.4,165.6 135.5,165.4 136.6,165.3 137.8,165.1 138.9,165.0 140.0,164.8 141.1,164.7 142.2,164.6 143.4,164.5 144.5,164.3 145.6,164.2 146.7,164.1 147.8,164.0 149.0,163.9 150.1,163.9 151.2,163.8 152.3,163.7 153.4,163.6 154.6,163.6 155.7,163.5 156.8,163.5 157.9,163.4 159.0,163.4 160.2,163.3 161.3,163.3 162.4,163.3 163.5,163.2 164.6,163.2 165.8,163.2 166.9,163.2 168.0,163.2 169.1,163.2 170.2,163.2 171.4,163.2 172.5,163.2 173.6,163.3 174.7,163.3 175.8,163.3 177.0,163.4 178.1,163.4 179.2,163.4 180.3,163.5 181.4,163.5 182.6,163.6 183.7,163.7 184.8,163.7 185.9,163.8 187.0,163.9 188.2,163.9 189.3,164.0 190.4,164.1 191.5,164.2 192.6,164.3 193.8,164.4 194.9,164.5 196.0,164.6 197.1,164.7 198.2,164.8 199.4,164.9 200.5,165.0 201.6,165.2 202.7,165.3 203.8,165.4 205.0,165.5 206.1,165.7 207.2,165.8 208.3,166.0 209.4,166.1 210.6,166.3 211.7,166.4 212.8,166.6 213.9,166.7 215.0,166.9 216.2,167.0 217.3,167.2 218.4,167.4 219.5,167.5 220.6,167.7 221.8,167.9 222.9,168.1 224.0,168.2 225.1,168.4 226.2,168.6 227.4,168.8 228.5,169.0 229.6,169.2 230.7,169.4 231.8,169.6 233.0,169.8 234.1,170.0 235.2,170.2 236.3,170.4 237.4,170.6 238.6,170.8 239.7,171.0 240.8,171.2 241.9,171.4 243.0,171.6 244.2,171.9 245.3,172.1 246.4,172.3 247.5,172.5 248.6,172.7 249.8,173.0 250.9,173.2 252.0,173.4 253.1,173.6 254.2,173.9 255.4,174.1 256.5,174.3 257.6,174.6 258.7,174.8 259.8,175.0 261.0,175.3 262.1,175.5 263.2,175.7 264.3,176.0 265.4,176.2 266.6,176.4 267.7,176.7 268.8,176.9 269.9,177.2 271.0,177.4 272.2,177.6 273.3,177.9 274.4,178.1 275.5,178.4 276.6,178.6 277.8,178.8 278.9,179.1 280.0,179.3 281.1,179.6 282.2,179.8 283.4,180.1 284.5,180.3 285.6,180.5 286.7,180.8 287.8,181.0 289.0,181.3 290.1,181.5 291.2,181.7 292.3,182.0 293.4,182.2 294.6,182.5 295.7,182.7 296.8,182.9 297.9,183.2 299.0,183.4 300.2,183.6 301.3,183.9 302.4,184.1 303.5,184.3 304.6,184.6 305.8,184.8 306.9,185.0 308.0,185.3 309.1,185.5 310.2,185.7 311.4,185.9 312.5,186.2 313.6,186.4 314.7,186.6 315.8,186.8 317.0,187.0 318.1,187.2 319.2,187.5 320.3,187.7 321.4,187.9 322.6,188.1 323.7,188.3 324.8,188.5 325.9,188.7 327.0,188.9 328.2,189.1 329.3,189.3 330.4,189.5 331.5,189.7 332.6,189.9 333.8,190.1 334.9,190.2 336.0,190.4 337.1,190.6 338.2,190.8 339.4,191.0 340.5,191.1 341.6,191.3 342.7,191.5 343.8,191.6 345.0,191.8 346.1,192.0 347.2,192.1 348.3,192.3 349.4,192.4 350.6,192.6 351.7,192.7 352.8,192.8 353.9,193.0 355.0,193.1 356.2,193.3 357.3,193.4 358.4,193.5 359.5,193.6 360.6,193.7 361.8,193.9 362.9,194.0 364.0,194.1 365.1,194.2 366.2,194.3 367.4,194.4 368.5,194.5 369.6,194.6 370.7,194.6 371.8,194.7 373.0,194.8 374.1,194.9 375.2,194.9 376.3,195.0 377.4,195.1 378.6,195.1 379.7,195.2 380.8,195.2 381.9,195.3 383.0,195.3 384.2,195.4 385.3,195.4 386.4,195.4 387.5,195.4 388.6,195.4 389.8,195.5 390.9,195.5 392.0,195.5 393.1,195.5 394.2,195.5 395.4,195.4 396.5,195.4 397.6,195.4 398.7,195.4 399.8,195.3 401.0,195.3 402.1,195.3 403.2,195.2 404.3,195.2 405.4,195.1 406.6,195.0 407.7,195.0 408.8,194.9 409.9,194.8 411.0,194.7 412.2,194.6 413.3,194.5 414.4,194.4 415.5,194.3 416.6,194.2 417.8,194.1 418.9,194.0 420.0,193.8 421.1,193.7 422.2,193.5 423.4,193.4 424.5,193.2 425.6,193.1 426.7,192.9 427.8,192.7 429.0,192.5 430.1,192.4 431.2,192.2 432.3,192.0 433.4,191.7 434.6,191.5 435.7,191.3 436.8,191.1 437.9,190.8 439.0,190.6 440.2,190.4 441.3,190.1 442.4,189.8 443.5,189.6 444.6,189.3 445.8,189.0 446.9,188.7 448.0,188.4 449.1,188.1 450.2,187.8 451.4,187.5 452.5,187.1 453.6,186.8 454.7,186.5 455.8,186.1 457.0,185.8 458.1,185.4 459.2,185.0 460.3,184.6 461.4,184.2 462.6,183.8 463.7,183.4 464.8,183.0 465.9,182.6 467.0,182.2 468.2,181.7 469.3,181.3 470.4,180.8 471.5,180.4 472.6,179.9 473.8,179.4 474.9,178.9 476.0,178.5 477.1,177.9 478.2,177.4 479.4,176.9 480.5,176.4 481.6,175.8 482.7,175.3 483.8,174.7 485.0,174.2 486.1,173.6 487.2,173.0 488.3,172.4 489.4,171.8 490.6,171.2 491.7,170.6 492.8,170.0 493.9,169.3 495.0,168.7 496.2,168.0 497.3,167.4 498.4,166.7 499.5,166.0 500.6,165.3 501.8,164.6 502.9,163.9 504.0,163.2 505.1,162.5 506.2,161.7 507.4,161.0 508.5,160.2 509.6,159.4 510.7,158.7 511.8,157.9 513.0,157.1 514.1,156.3 515.2,155.4 516.3,154.6 517.4,153.8 518.6,152.9 519.7,152.1 520.8,151.2 521.9,150.3 523.0,149.4 524.2,148.5 525.3,147.6 526.4,146.7 527.5,145.7 528.6,144.8 529.8,143.8 530.9,142.9 532.0,141.9 533.1,140.9 534.2,139.9 535.4,138.9 536.5,137.9 537.6,136.8 538.7,135.8 539.8,134.7 541.0,133.7 542.1,132.6 543.2,131.5 544.3,130.4 545.4,129.3 546.6,128.2 547.7,127.0 548.8,125.9 549.9,124.7 551.0,123.6 552.2,122.4 553.3,121.2 554.4,120.0 555.5,118.8 556.6,117.5 557.8,116.3 558.9,115.1 560.0,113.8 561.1,112.5 562.2,111.2 563.4,109.9 564.5,108.6 565.6,107.3 566.7,105.9 567.8,104.6 569.0,103.2 570.1,101.9 571.2,100.5 572.3,99.1 573.4,97.7 574.6,96.2 575.7,94.8 576.8,93.3 577.9,91.9 579.0,90.4 580.2,88.9 581.3,87.4 582.4,85.9 583.5,84.4 584.6,82.8 585.8,81.3 586.9,79.7 588.0,78.1 589.1,76.5 590.2,74.9 591.4,73.3 592.5,71.7 593.6,70.0 594.7,68.4 595.8,66.7 597.0,65.0 598.1,63.3 599.2,61.6 600.3,59.8 601.4,58.1 602.6,56.3 603.7,54.6 604.8,52.8 605.9,51.0 607.0,49.2 608.2,47.3 609.3,45.5 610.4,43.6 611.5,41.8 612.6,39.9 613.8,38.0 614.9,36.1 616.0,34.1" class="pm-curve"/>
</svg>
</div>

**Velocity vs. time**

<div class="pm-figure">
<svg viewBox="0 0 640 300" class="pm-graph" role="img" xmlns="http://www.w3.org/2000/svg">
<line x1="56.0" y1="18" x2="56.0" y2="260" class="pm-grid"/>
<text x="56.0" y="278" class="pm-tick" text-anchor="middle">0</text>
<line x1="168.0" y1="18" x2="168.0" y2="260" class="pm-grid"/>
<text x="168.0" y="278" class="pm-tick" text-anchor="middle">1</text>
<line x1="280.0" y1="18" x2="280.0" y2="260" class="pm-grid"/>
<text x="280.0" y="278" class="pm-tick" text-anchor="middle">2</text>
<line x1="392.0" y1="18" x2="392.0" y2="260" class="pm-grid"/>
<text x="392.0" y="278" class="pm-tick" text-anchor="middle">3</text>
<line x1="504.0" y1="18" x2="504.0" y2="260" class="pm-grid"/>
<text x="504.0" y="278" class="pm-tick" text-anchor="middle">4</text>
<line x1="616.0" y1="18" x2="616.0" y2="260" class="pm-grid"/>
<text x="616.0" y="278" class="pm-tick" text-anchor="middle">5</text>
<line x1="56" y1="252.4" x2="616" y2="252.4" class="pm-grid"/>
<text x="48" y="256.4" class="pm-tick" text-anchor="end">-5</text>
<line x1="56" y1="176.8" x2="616" y2="176.8" class="pm-grid"/>
<text x="48" y="180.8" class="pm-tick" text-anchor="end">5</text>
<line x1="56" y1="139.0" x2="616" y2="139.0" class="pm-grid"/>
<text x="48" y="143.0" class="pm-tick" text-anchor="end">10</text>
<line x1="56" y1="101.2" x2="616" y2="101.2" class="pm-grid"/>
<text x="48" y="105.2" class="pm-tick" text-anchor="end">15</text>
<line x1="56" y1="63.4" x2="616" y2="63.4" class="pm-grid"/>
<text x="48" y="67.4" class="pm-tick" text-anchor="end">20</text>
<line x1="56" y1="25.6" x2="616" y2="25.6" class="pm-grid"/>
<text x="48" y="29.6" class="pm-tick" text-anchor="end">25</text>
<polygon points="56.0,214.6 56.0,146.6 57.9,148.1 59.7,149.6 61.6,151.0 63.5,152.5 65.3,154.0 67.2,155.4 69.1,156.8 70.9,158.3 72.8,159.7 74.7,161.1 76.5,162.4 78.4,163.8 80.3,165.2 82.1,166.5 84.0,167.8 85.9,169.1 87.7,170.5 89.6,171.7 91.5,173.0 93.3,174.3 95.2,175.5 97.1,176.8 98.9,178.0 100.8,179.2 102.7,180.4 104.5,181.6 106.4,182.8 108.3,184.0 110.1,185.1 112.0,186.3 113.9,187.4 115.7,188.5 117.6,189.6 119.5,190.7 121.3,191.8 123.2,192.8 125.1,193.9 126.9,194.9 128.8,196.0 130.7,197.0 132.5,198.0 134.4,199.0 136.3,199.9 138.1,200.9 140.0,201.9 141.9,202.8 143.7,203.7 145.6,204.6 147.5,205.5 149.3,206.4 151.2,207.3 153.1,208.2 154.9,209.0 156.8,209.9 158.7,210.7 160.5,211.5 162.4,212.3 164.3,213.1 166.1,213.9 168.0,214.6 168.0,214.6" class="pm-pos"/>
<polygon points="168.0,214.6 168.0,214.6 171.7,216.1 175.5,217.5 179.2,218.9 182.9,220.3 186.7,221.6 190.4,222.8 194.1,224.0 197.9,225.1 201.6,226.2 205.3,227.2 209.1,228.2 212.8,229.1 216.5,230.0 220.3,230.9 224.0,231.6 227.7,232.4 231.5,233.1 235.2,233.7 238.9,234.3 242.7,234.8 246.4,235.3 250.1,235.7 253.9,236.1 257.6,236.4 261.3,236.7 265.1,236.9 268.8,237.1 272.5,237.2 276.3,237.3 280.0,237.3 283.7,237.3 287.5,237.2 291.2,237.1 294.9,236.9 298.7,236.7 302.4,236.4 306.1,236.1 309.9,235.7 313.6,235.3 317.3,234.8 321.1,234.3 324.8,233.7 328.5,233.1 332.3,232.4 336.0,231.6 339.7,230.9 343.5,230.0 347.2,229.1 350.9,228.2 354.7,227.2 358.4,226.2 362.1,225.1 365.9,224.0 369.6,222.8 373.3,221.6 377.1,220.3 380.8,218.9 384.5,217.5 388.3,216.1 392.0,214.6 392.0,214.6" class="pm-neg"/>
<polygon points="392.0,214.6 392.0,214.6 395.7,213.1 399.5,211.5 403.2,209.9 406.9,208.2 410.7,206.4 414.4,204.6 418.1,202.8 421.9,200.9 425.6,199.0 429.3,197.0 433.1,194.9 436.8,192.8 440.5,190.7 444.3,188.5 448.0,186.3 451.7,184.0 455.5,181.6 459.2,179.2 462.9,176.8 466.7,174.3 470.4,171.7 474.1,169.1 477.9,166.5 481.6,163.8 485.3,161.1 489.1,158.3 492.8,155.4 496.5,152.5 500.3,149.6 504.0,146.6 507.7,143.5 511.5,140.4 515.2,137.3 518.9,134.1 522.7,130.8 526.4,127.5 530.1,124.2 533.9,120.7 537.6,117.3 541.3,113.8 545.1,110.2 548.8,106.6 552.5,103.0 556.3,99.3 560.0,95.5 563.7,91.7 567.5,87.9 571.2,83.9 574.9,80.0 578.7,76.0 582.4,71.9 586.1,67.8 589.9,63.7 593.6,59.4 597.3,55.2 601.1,50.9 604.8,46.5 608.5,42.1 612.3,37.6 616.0,33.1 616.0,214.6" class="pm-pos"/>
<text x="89.6" y="202.5" class="pm-area" text-anchor="middle">+4</text>
<text x="280.0" y="225.2" class="pm-area" text-anchor="middle">−4</text>
<text x="543.2" y="176.8" class="pm-area" text-anchor="middle">+20</text>
<circle cx="168.0" cy="214.6" r="5" class="pm-dot"/>
<circle cx="392.0" cy="214.6" r="5" class="pm-dot"/>
<circle cx="280.0" cy="237.3" r="5" class="pm-open"/>
<text x="280.0" y="259.3" class="pm-note" text-anchor="middle">minimum, slope 0</text>
<line x1="56" y1="214.6" x2="626" y2="214.6" class="pm-axis"/>
<line x1="56" y1="260" x2="56" y2="12" class="pm-axis"/>
<text x="630" y="218.6" class="pm-label">t</text>
<text x="62" y="22" class="pm-label">v(t)</text>
<polyline points="56.0,146.6 57.1,147.5 58.2,148.4 59.4,149.3 60.5,150.2 61.6,151.0 62.7,151.9 63.8,152.8 65.0,153.7 66.1,154.5 67.2,155.4 68.3,156.3 69.4,157.1 70.6,158.0 71.7,158.8 72.8,159.7 73.9,160.5 75.0,161.3 76.2,162.2 77.3,163.0 78.4,163.8 79.5,164.6 80.6,165.4 81.8,166.2 82.9,167.0 84.0,167.8 85.1,168.6 86.2,169.4 87.4,170.2 88.5,171.0 89.6,171.7 90.7,172.5 91.8,173.3 93.0,174.0 94.1,174.8 95.2,175.5 96.3,176.3 97.4,177.0 98.6,177.8 99.7,178.5 100.8,179.2 101.9,180.0 103.0,180.7 104.2,181.4 105.3,182.1 106.4,182.8 107.5,183.5 108.6,184.2 109.8,184.9 110.9,185.6 112.0,186.3 113.1,186.9 114.2,187.6 115.4,188.3 116.5,189.0 117.6,189.6 118.7,190.3 119.8,190.9 121.0,191.6 122.1,192.2 123.2,192.8 124.3,193.5 125.4,194.1 126.6,194.7 127.7,195.3 128.8,196.0 129.9,196.6 131.0,197.2 132.2,197.8 133.3,198.4 134.4,199.0 135.5,199.6 136.6,200.1 137.8,200.7 138.9,201.3 140.0,201.9 141.1,202.4 142.2,203.0 143.4,203.5 144.5,204.1 145.6,204.6 146.7,205.2 147.8,205.7 149.0,206.3 150.1,206.8 151.2,207.3 152.3,207.8 153.4,208.3 154.6,208.9 155.7,209.4 156.8,209.9 157.9,210.4 159.0,210.8 160.2,211.3 161.3,211.8 162.4,212.3 163.5,212.8 164.6,213.2 165.8,213.7 166.9,214.2 168.0,214.6 169.1,215.1 170.2,215.5 171.4,216.0 172.5,216.4 173.6,216.8 174.7,217.3 175.8,217.7 177.0,218.1 178.1,218.5 179.2,218.9 180.3,219.3 181.4,219.7 182.6,220.1 183.7,220.5 184.8,220.9 185.9,221.3 187.0,221.7 188.2,222.1 189.3,222.4 190.4,222.8 191.5,223.2 192.6,223.5 193.8,223.9 194.9,224.2 196.0,224.6 197.1,224.9 198.2,225.2 199.4,225.6 200.5,225.9 201.6,226.2 202.7,226.5 203.8,226.8 205.0,227.1 206.1,227.4 207.2,227.7 208.3,228.0 209.4,228.3 210.6,228.6 211.7,228.9 212.8,229.1 213.9,229.4 215.0,229.7 216.2,229.9 217.3,230.2 218.4,230.4 219.5,230.7 220.6,230.9 221.8,231.2 222.9,231.4 224.0,231.6 225.1,231.9 226.2,232.1 227.4,232.3 228.5,232.5 229.6,232.7 230.7,232.9 231.8,233.1 233.0,233.3 234.1,233.5 235.2,233.7 236.3,233.9 237.4,234.0 238.6,234.2 239.7,234.4 240.8,234.5 241.9,234.7 243.0,234.8 244.2,235.0 245.3,235.1 246.4,235.3 247.5,235.4 248.6,235.5 249.8,235.7 250.9,235.8 252.0,235.9 253.1,236.0 254.2,236.1 255.4,236.2 256.5,236.3 257.6,236.4 258.7,236.5 259.8,236.6 261.0,236.7 262.1,236.7 263.2,236.8 264.3,236.9 265.4,236.9 266.6,237.0 267.7,237.0 268.8,237.1 269.9,237.1 271.0,237.2 272.2,237.2 273.3,237.2 274.4,237.3 275.5,237.3 276.6,237.3 277.8,237.3 278.9,237.3 280.0,237.3 281.1,237.3 282.2,237.3 283.4,237.3 284.5,237.3 285.6,237.3 286.7,237.2 287.8,237.2 289.0,237.2 290.1,237.1 291.2,237.1 292.3,237.0 293.4,237.0 294.6,236.9 295.7,236.9 296.8,236.8 297.9,236.7 299.0,236.7 300.2,236.6 301.3,236.5 302.4,236.4 303.5,236.3 304.6,236.2 305.8,236.1 306.9,236.0 308.0,235.9 309.1,235.8 310.2,235.7 311.4,235.5 312.5,235.4 313.6,235.3 314.7,235.1 315.8,235.0 317.0,234.8 318.1,234.7 319.2,234.5 320.3,234.4 321.4,234.2 322.6,234.0 323.7,233.9 324.8,233.7 325.9,233.5 327.0,233.3 328.2,233.1 329.3,232.9 330.4,232.7 331.5,232.5 332.6,232.3 333.8,232.1 334.9,231.9 336.0,231.6 337.1,231.4 338.2,231.2 339.4,230.9 340.5,230.7 341.6,230.4 342.7,230.2 343.8,229.9 345.0,229.7 346.1,229.4 347.2,229.1 348.3,228.9 349.4,228.6 350.6,228.3 351.7,228.0 352.8,227.7 353.9,227.4 355.0,227.1 356.2,226.8 357.3,226.5 358.4,226.2 359.5,225.9 360.6,225.6 361.8,225.2 362.9,224.9 364.0,224.6 365.1,224.2 366.2,223.9 367.4,223.5 368.5,223.2 369.6,222.8 370.7,222.4 371.8,222.1 373.0,221.7 374.1,221.3 375.2,220.9 376.3,220.5 377.4,220.1 378.6,219.7 379.7,219.3 380.8,218.9 381.9,218.5 383.0,218.1 384.2,217.7 385.3,217.3 386.4,216.8 387.5,216.4 388.6,216.0 389.8,215.5 390.9,215.1 392.0,214.6 393.1,214.2 394.2,213.7 395.4,213.2 396.5,212.8 397.6,212.3 398.7,211.8 399.8,211.3 401.0,210.8 402.1,210.4 403.2,209.9 404.3,209.4 405.4,208.9 406.6,208.3 407.7,207.8 408.8,207.3 409.9,206.8 411.0,206.3 412.2,205.7 413.3,205.2 414.4,204.6 415.5,204.1 416.6,203.5 417.8,203.0 418.9,202.4 420.0,201.9 421.1,201.3 422.2,200.7 423.4,200.1 424.5,199.6 425.6,199.0 426.7,198.4 427.8,197.8 429.0,197.2 430.1,196.6 431.2,196.0 432.3,195.3 433.4,194.7 434.6,194.1 435.7,193.5 436.8,192.8 437.9,192.2 439.0,191.6 440.2,190.9 441.3,190.3 442.4,189.6 443.5,189.0 444.6,188.3 445.8,187.6 446.9,186.9 448.0,186.3 449.1,185.6 450.2,184.9 451.4,184.2 452.5,183.5 453.6,182.8 454.7,182.1 455.8,181.4 457.0,180.7 458.1,180.0 459.2,179.2 460.3,178.5 461.4,177.8 462.6,177.0 463.7,176.3 464.8,175.5 465.9,174.8 467.0,174.0 468.2,173.3 469.3,172.5 470.4,171.7 471.5,171.0 472.6,170.2 473.8,169.4 474.9,168.6 476.0,167.8 477.1,167.0 478.2,166.2 479.4,165.4 480.5,164.6 481.6,163.8 482.7,163.0 483.8,162.2 485.0,161.3 486.1,160.5 487.2,159.7 488.3,158.8 489.4,158.0 490.6,157.1 491.7,156.3 492.8,155.4 493.9,154.5 495.0,153.7 496.2,152.8 497.3,151.9 498.4,151.0 499.5,150.2 500.6,149.3 501.8,148.4 502.9,147.5 504.0,146.6 505.1,145.7 506.2,144.7 507.4,143.8 508.5,142.9 509.6,142.0 510.7,141.0 511.8,140.1 513.0,139.2 514.1,138.2 515.2,137.3 516.3,136.3 517.4,135.3 518.6,134.4 519.7,133.4 520.8,132.4 521.9,131.5 523.0,130.5 524.2,129.5 525.3,128.5 526.4,127.5 527.5,126.5 528.6,125.5 529.8,124.5 530.9,123.5 532.0,122.5 533.1,121.4 534.2,120.4 535.4,119.4 536.5,118.3 537.6,117.3 538.7,116.2 539.8,115.2 541.0,114.1 542.1,113.1 543.2,112.0 544.3,111.0 545.4,109.9 546.6,108.8 547.7,107.7 548.8,106.6 549.9,105.5 551.0,104.4 552.2,103.3 553.3,102.2 554.4,101.1 555.5,100.0 556.6,98.9 557.8,97.8 558.9,96.6 560.0,95.5 561.1,94.4 562.2,93.2 563.4,92.1 564.5,90.9 565.6,89.8 566.7,88.6 567.8,87.5 569.0,86.3 570.1,85.1 571.2,83.9 572.3,82.8 573.4,81.6 574.6,80.4 575.7,79.2 576.8,78.0 577.9,76.8 579.0,75.6 580.2,74.4 581.3,73.1 582.4,71.9 583.5,70.7 584.6,69.5 585.8,68.2 586.9,67.0 588.0,65.7 589.1,64.5 590.2,63.2 591.4,62.0 592.5,60.7 593.6,59.4 594.7,58.2 595.8,56.9 597.0,55.6 598.1,54.3 599.2,53.0 600.3,51.7 601.4,50.4 602.6,49.1 603.7,47.8 604.8,46.5 605.9,45.2 607.0,43.9 608.2,42.5 609.3,41.2 610.4,39.9 611.5,38.5 612.6,37.2 613.8,35.8 614.9,34.5 616.0,33.1" class="pm-curve"/>
</svg>
</div>

<span class="desktop">Hover over</span><span class="mobile">Tap on</span> each statement to fill in the blanks.

- <span class="question-box">The particle moves right from $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">0</span></span></span> to $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">1</span></span></span> and from $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">3</span></span></span> to $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">5</span></span></span>.</span>
- <span class="question-box">The particle moves left from $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">1</span></span></span> to $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">3</span></span></span>.</span>
- <span class="question-box">The particle changes direction at $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">1</span></span></span> and $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">3</span></span></span>, where the $x(t)$ graph has a horizontal tangent.</span>
- <span class="question-box">The particle has a negative acceleration from $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">0</span></span></span> to $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">2</span></span></span>, where the $x(t)$ graph is concave down.</span>
- <span class="question-box">The particle has a positive acceleration from $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">2</span></span></span> to $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">5</span></span></span>, where the $x(t)$ graph is concave up.</span>
- <span class="question-box">The particle is speeding up from $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">1</span></span></span> to $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">2</span></span></span> and from $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">3</span></span></span> to $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">5</span></span></span>.</span>
- <span class="question-box">The particle is slowing down from $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">0</span></span></span> to $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">1</span></span></span> and from $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">2</span></span></span> to $t = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">3</span></span></span>.</span>
- <span class="question-box">The displacement from $t = 0$ to $t = 5$ is the signed area $4 - 4 + 20 = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">20</span></span></span>.</span>
- <span class="question-box">The total distance from $t = 0$ to $t = 5$ is the total area $4 + 4 + 20 = $ <span class="answer-space"><span class="answer-box"><span class="answer-text">28</span></span></span>.</span>

# Motion in the Plane (BC Only)

> [!info] BC only
> This section is only covered in AP Calculus BC.

A particle moving in the $xy$-plane has position $\langle x(t), y(t) \rangle$.

| Quantity | Formula |
| --- | --- |
| velocity vector | $\langle x'(t),\ y'(t) \rangle$ |
| acceleration vector | $\langle x''(t),\ y''(t) \rangle$ |
| speed | $\sqrt{(x'(t))^2 + (y'(t))^2}$ |
| total distance traveled between $t = t_1$ and $t = t_2$ | $\displaystyle \int_{t_1}^{t_2} \sqrt{(x'(t))^2 + (y'(t))^2}\, dt$ |
| position at time $t$ | $x(t) = x(t_0) + \displaystyle \int_{t_0}^{t} x'(s)\, ds$, and the same for $y(t)$ |

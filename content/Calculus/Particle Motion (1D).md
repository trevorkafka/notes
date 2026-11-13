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
&x(t) = x(0) + \int_0^t v(t)\, dt && v(t) = v(0) + \int_0^t a(t)\, dt
\end{align*}
$$
Here $x(0)$ is the **initial position** and $v(0)$ is the **initial velocity**.

# Speed, Displacement, and Distance

| Quantity | Formula |
| --- | --- |
| speed | $\lvert v(t) \rvert$ |
| initial speed | $\lvert v(0) \rvert$ |
| displacement between $t = t_1$ and $t = t_2$ | $\displaystyle \int_{t_1}^{t_2} v(t)\, dt = x(t_2) - x(t_1)$ |
| total distance traveled between $t = t_1$ and $t = t_2$ | $\displaystyle \int_{t_1}^{t_2} \lvert v(t) \rvert\, dt$ |
| change in velocity between $t = t_1$ and $t = t_2$ | $\displaystyle \int_{t_1}^{t_2} a(t)\, dt = v(t_2) - v(t_1)$ |

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
| $v(t) = 0$ and $a(t) \neq 0$ | particle is changing direction |
| $a(t) = 0$ | particle has constant velocity\* |

\*Including being stationary, i.e. remaining at rest.

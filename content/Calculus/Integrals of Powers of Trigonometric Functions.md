---
aliases:
  - "067494"
tags:
  - calculus
  - AP-calculus-BC
  - problem-solving
created: 2023-02-09
modified: 2023-02-09
draft: false
---

See also [[Antiderivative Rules]] and [[The Integral of Secant (Four Derivations)]].

Evaluate each integral using the hint provided. Full solutions are in the expandable boxes at the end of each section.

# Cosine

*Integrals of powers of sine can be computed using analogous methods.*

> [!question] Problems
> 1. $\displaystyle \int \cos x\, dx$
> 2. $\displaystyle \int \cos^2 x\, dx$
>    - *Hint:* Rewrite it as $\displaystyle \frac{1}{2} \int (1 + \cos 2x)\, dx$.
> 3. $\displaystyle \int \cos^3 x\, dx$
>    - *Hint:* Rewrite it as $\displaystyle \int (1 - \sin^2 x) \cos x\, dx$.
> 4. $\displaystyle \int \cos^4 x\, dx$
>    - *Hint:* Rewrite it as $\displaystyle \frac{1}{4} \int (1 + \cos 2x)^2\, dx$.
> 5. $\displaystyle \int \cos^5 x\, dx$
>    - *Hint:* Rewrite it as $\displaystyle \int (1 - \sin^2 x)^2 \cos x\, dx$.

> [!check]- Solutions: cosine
> $$
> \begin{align*}
> \int \cos x\, dx &= \boxed{\sin x + C} \\[1em]
> \int \cos^2 x\, dx &= \frac{1}{2} \int (1 + \cos 2x)\, dx \\
> &= \boxed{\frac{1}{2}\left(x + \frac{1}{2} \sin 2x\right) + C} \\[1em]
> \int \cos^3 x\, dx &= \int (1 - \sin^2 x) \cos x\, dx \\
> &= \boxed{\sin x - \frac{1}{3} \sin^3 x + C} \\[1em]
> \int \cos^4 x\, dx &= \frac{1}{4} \int (1 + \cos 2x)^2\, dx \\
> &= \frac{1}{4} \int (1 + 2\cos 2x + \cos^2 2x)\, dx \\
> &= \boxed{\frac{1}{4}\left(x + \sin 2x + \frac{1}{4}\left(2x + \frac{1}{2} \sin 4x\right)\right) + C} \\[1em]
> \int \cos^5 x\, dx &= \int (1 - \sin^2 x)^2 \cos x\, dx \\
> &= \int (1 - 2\sin^2 x + \sin^4 x) \cos x\, dx \\
> &= \boxed{\sin x - \frac{2}{3} \sin^3 x + \frac{1}{5} \sin^5 x + C}
> \end{align*}
> $$

# Secant

*Integrals of powers of cosecant can be computed using analogous methods.*

> [!question] Problems
> 1. $\displaystyle \int \sec x\, dx$
>    - *Hint:* Multiply by $\dfrac{\sec x + \tan x}{\sec x + \tan x}$.
> 2. $\displaystyle \int \sec^2 x\, dx$
> 3. $\displaystyle \int \sec^3 x\, dx$
>    - *Hint:* Integrate by parts with $u = \sec x$ and $dv = \sec^2 x\, dx$, then use $\tan^2 x = \sec^2 x - 1$.
> 4. $\displaystyle \int \sec^4 x\, dx$
>    - *Hint:* Rewrite it as $\displaystyle \int (\tan^2 x + 1) \sec^2 x\, dx$.
> 5. $\displaystyle \int \sec^5 x\, dx$
>    - *Hint:* Integrate by parts with $u = \sec^3 x$ and $dv = \sec^2 x\, dx$, then use $\tan^2 x = \sec^2 x - 1$ and prior results.

> [!check]- Solutions: secant
> $$
> \begin{align*}
> \int \sec x\, dx &= \int \frac{\sec x \tan x + \sec^2 x}{\sec x + \tan x}\, dx \\
> &= \boxed{\ln \lvert \sec x + \tan x \rvert + C} \\[1em]
> \int \sec^2 x\, dx &= \boxed{\tan x + C}
> \end{align*}
> $$
> For $\sec^3 x$, integrate by parts and solve for the original integral.
> $$
> \begin{align*}
> \int \sec^3 x\, dx &= \int \frac{d}{dx}(\tan x) \sec x\, dx \\
> &= \tan x \sec x - \int \tan x \frac{d}{dx}(\sec x)\, dx \\
> &= \tan x \sec x - \int \tan^2 x \sec x\, dx \\
> &= \tan x \sec x - \int (\sec^2 x - 1) \sec x\, dx \\
> &= \tan x \sec x - \int \sec^3 x\, dx + \int \sec x\, dx \\
> &= \tan x \sec x + \ln \lvert \sec x + \tan x \rvert - \int \sec^3 x\, dx \\
> 2 \int \sec^3 x\, dx &= \tan x \sec x + \ln \lvert \sec x + \tan x \rvert \\
> \int \sec^3 x\, dx &= \boxed{\frac{1}{2}\big(\tan x \sec x + \ln \lvert \sec x + \tan x \rvert\big) + C} \\[1em]
> \int \sec^4 x\, dx &= \int (\tan^2 x + 1) \sec^2 x\, dx \\
> &= \boxed{\frac{1}{3} \tan^3 x + \tan x + C}
> \end{align*}
> $$
> For $\sec^5 x$, integrate by parts in the same way.
> $$
> \begin{align*}
> \int \sec^5 x\, dx &= \int \frac{d}{dx}(\tan x) \sec^3 x\, dx \\
> &= \tan x \sec^3 x - \int \tan x \frac{d}{dx}(\sec^3 x)\, dx \\
> &= \tan x \sec^3 x - \int \tan x \cdot 3\sec^2 x \cdot \sec x \tan x\, dx \\
> &= \tan x \sec^3 x - 3 \int \tan^2 x \sec^3 x\, dx \\
> &= \tan x \sec^3 x - 3 \int (\sec^2 x - 1) \sec^3 x\, dx \\
> &= \tan x \sec^3 x - 3 \int \sec^5 x\, dx + 3 \int \sec^3 x\, dx \\
> &= \tan x \sec^3 x - 3 \int \sec^5 x\, dx \\
> &\qquad + \tfrac{3}{2}\big(\tan x \sec x + \ln \lvert \sec x + \tan x \rvert\big) \\
> 4 \int \sec^5 x\, dx &= \tan x \sec^3 x \\
> &\qquad + \tfrac{3}{2}\big(\tan x \sec x + \ln \lvert \sec x + \tan x \rvert\big) \\
> \int \sec^5 x\, dx &= \boxed{\begin{aligned} &\tfrac{1}{4} \tan x \sec^3 x \\ &+ \tfrac{3}{8}\big(\tan x \sec x + \ln \lvert \sec x + \tan x \rvert\big) + C \end{aligned}}
> \end{align*}
> $$

# Tangent

*Integrals of powers of cotangent can be computed using analogous methods.*

> [!question] Problems
> 1. $\displaystyle \int \tan x\, dx$
>    - *Hint:* Rewrite it as $\displaystyle \int \frac{\sin x}{\cos x}\, dx$.
> 2. $\displaystyle \int \tan^2 x\, dx$
>    - *Hint:* Rewrite it as $\displaystyle \int (\sec^2 x - 1)\, dx$.
> 3. $\displaystyle \int \tan^3 x\, dx$
>    - *Hint:* Rewrite it as $\displaystyle \int (\sec^2 x - 1) \tan x\, dx$.
> 4. $\displaystyle \int \tan^4 x\, dx$
>    - *Hint:* Rewrite it as $\displaystyle \int (\sec^2 x - 1)^2\, dx$, then use prior results.
> 5. $\displaystyle \int \tan^5 x\, dx$
>    - *Hint:* Rewrite it as $\displaystyle \int (\sec^2 x - 1)^2 \tan x\, dx$.

> [!check]- Solutions: tangent
> $$
> \begin{align*}
> \int \tan x\, dx &= \int \frac{\sin x}{\cos x}\, dx \\
> &= \boxed{-\ln \lvert \cos x \rvert + C} \\[1em]
> \int \tan^2 x\, dx &= \int (\sec^2 x - 1)\, dx \\
> &= \boxed{\tan x - x + C} \\[1em]
> \int \tan^3 x\, dx &= \int (\sec^2 x - 1) \tan x\, dx \\
> &= \int (\sec^2 x \tan x - \tan x)\, dx \\
> &= \boxed{\frac{1}{2} \sec^2 x + \ln \lvert \cos x \rvert + C} \\[1em]
> \int \tan^4 x\, dx &= \int (\sec^2 x - 1)^2\, dx \\
> &= \int (\sec^4 x - 2\sec^2 x + 1)\, dx \\
> &= \left(\frac{1}{3} \tan^3 x + \tan x\right) - 2\tan x + x + C \\
> &= \boxed{\frac{1}{3} \tan^3 x - \tan x + x + C} \\[1em]
> \int \tan^5 x\, dx &= \int (\sec^2 x - 1)^2 \tan x\, dx \\
> &= \int (\sec^4 x \tan x - 2\sec^2 x \tan x + \tan x)\, dx \\
> &= \boxed{\frac{1}{4} \sec^4 x - \sec^2 x - \ln \lvert \cos x \rvert + C}
> \end{align*}
> $$

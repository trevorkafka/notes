---
aliases:
  - "987730"
tags:
  - reference-sheets
  - calculus
  - AP-calculus-BC
created: 2020-04-23
modified: 2020-04-23
draft: false
---

See also [[Series Convergence Tests]].

# Taylor's Theorem

> [!note] Theorem (Taylor's Theorem)
> Let $n$ be a positive integer and suppose that a function $f$ satisfies the following criteria.
>
> 1. $f$ is defined on $[a, b]$.
> 2. $f^{(n)}$ is continuous on $[a, b]$.
> 3. $f^{(n+1)}$ exists everywhere on $(a, b)$.
>
> Then for any $c$ with $a \leq c \leq b$ (the **center**), we have
> $$
> f(x) = \underbrace{\sum_{k=0}^{n} \frac{f^{(k)}(c)}{k!}(x - c)^k}_{\text{$n$th degree Taylor polynomial}} + \underbrace{\frac{f^{(n+1)}(\textcolor{red}{z})}{(n+1)!}(x - c)^{n+1}}_{\text{error term}}
> $$
> for some $\textcolor{red}{z}$ between $c$ and $x$.

# Lagrange Error Bound

The **Lagrange error bound** is the largest possible size of the error term in Taylor's theorem. Let $R_n(x)$ be the error of the $n$th degree Taylor polynomial of $f(x)$ centered at $x = c$, that is, the difference between $f(x)$ and the polynomial. Then
$$
\lvert R_n(x) \rvert \leq \frac{M}{(n+1)!} \lvert x - c \rvert^{n+1},
$$
where $M$ is the largest value of $\left\lvert f^{(n+1)} \right\rvert$ between $c$ and $x$. The right side is the Lagrange error bound, so the actual error of the approximation is always at most this bound.

> [!example]- Example: approximating $e^2$
> Approximate $e^2$ using the $5$th degree Taylor polynomial for $f(x) = e^x$ centered at $x = 0$, and find the Lagrange error bound.
>
> ---
>
> The Taylor series for $e^x$ centered at $0$ is
> $$
> e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots
> $$
> so the $5$th degree approximation of $e^2$ is
> $$
> \begin{align*}
> e^2 &\approx \sum_{n=0}^{5} \frac{2^n}{n!} \\
> &= 1 + 2 + \frac{2^2}{2} + \frac{2^3}{6} + \frac{2^4}{24} + \frac{2^5}{120} \\
> &= \frac{109}{15} = 7.266\ldots
> \end{align*}
> $$
> Every derivative of $e^x$ is $e^x$, so $f^{(6)}(x) = e^x$. On the interval from $0$ to $2$, $e^x$ is largest at $x = 2$, so $M = e^2$.
> $$
> \begin{align*}
> \text{Lagrange error bound} &= \frac{M}{6!} \lvert 2 - 0 \rvert^6 \\
> &= \frac{e^2}{6!} \cdot 2^6 = 0.656\ldots
> \end{align*}
> $$
> The actual value is $e^2 = 7.389\ldots$, so the actual error is $7.389\ldots - 7.266\ldots = 0.122\ldots$, which is indeed less than the Lagrange error bound of $0.656\ldots$.

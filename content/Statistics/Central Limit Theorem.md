---
aliases:
  - "582081"
tags:
  - statistics
  - probability
modified: 2026-11-13
draft: false
---

See also [[Transformations of Mean and Variance]].

> [!info]- Prerequisites and notation
> **Prerequisites**
> - Expected value and variance of a random variable, and how they combine for sums of independent random variables (see [[Transformations of Mean and Variance]])
> - Taylor series, in particular $e^x = 1 + x + \frac{x^2}{2!} + \cdots$
> - Complex numbers, in particular $i^2 = -1$
> - The limit $\left(1 + \frac{c}{N}\right)^N \to e^c$ as $N \to \infty$
>
> **Notation**
>
> | Symbol | Meaning |
> | --- | --- |
> | $\mathbb{E}[X]$ | expected value (mean) of the random variable $X$ |
> | $\operatorname{Var}(X)$ | variance of $X$, equal to $\mathbb{E}\big[(X - \mu)^2\big]$ |
> | $\mu$, $\sigma^2$, $\sigma$ | mean, variance, and standard deviation of each $X_i$ |
> | $\overline{X}_N$ | sample mean of $X_1, \ldots, X_N$ |
> | $f_y(y)$ | probability density function of the random variable $y$ |
> | $\phi_y(t)$ | characteristic function of $y$ |
> | $i$ | the imaginary unit |
> | $\mathcal{O}(t^3)$ | terms of order $t^3$ or higher, which are negligible when $t$ is small |
> | i.i.d. | independent and identically distributed |

> [!summary] Central Limit Theorem
> Let $X_1, X_2, \ldots, X_N$ be independent and identically distributed random variables, each with mean $\mu$ and variance $\sigma^2$. Then the sample mean $\overline{X}_N = \frac{1}{N} \sum_{i=1}^{N} X_i$ has
> $$
> \mathbb{E}\big[\overline{X}_N\big] = \mu \qquad \operatorname{Var}\big(\overline{X}_N\big) = \frac{\sigma^2}{N},
> $$
> and as $N \to \infty$, the standardized sum $\displaystyle Z_N = \sum_{i=1}^{N} \frac{X_i - \mu}{\sigma \sqrt{N}}$ approaches the standard normal distribution, no matter what distribution the $X_i$ come from.

These notes sketch why the theorem is true using characteristic functions. They are based on [this video](https://www.youtube.com/watch?v=0oHjbr2_AhQ).

# Characteristic Functions

The **characteristic function** of a random variable $y$ with probability density $f_y$ is defined as
$$
\phi_y(t) = \mathbb{E}\big[e^{ity}\big] = \int_{-\infty}^{\infty} e^{ity} f_y(y)\, dy.
$$
Expanding $e^{ity}$ as a Taylor series gives the following.
$$
\begin{align*}
\phi_y(t) &= \int_{-\infty}^{\infty} \left[ 1 + ity + \frac{(ity)^2}{2!} + \mathcal{O}(t^3) \right] f_y(y)\, dy \\
&= \int_{-\infty}^{\infty} \left[ 1 + ity - \frac{t^2}{2} y^2 + \mathcal{O}(t^3) \right] f_y(y)\, dy \\
&= 1 + it\, \mathbb{E}[y] - \frac{t^2}{2} \mathbb{E}\big[y^2\big] + \mathcal{O}(t^3)
\end{align*}
$$
If $y$ has mean $0$ and variance $1$, then $\mathbb{E}[y] = 0$ and $\mathbb{E}\big[y^2\big] = 1$, so
$$
\phi_y(t) = 1 - \frac{t^2}{2} + \mathcal{O}(t^3).
$$

# Mean and Variance of the Sample Mean

Let $X_1, \ldots, X_N$ be independent and identically distributed, with mean $\mu$ and variance $\sigma^2$. The expectation of their mean is
$$
\mathbb{E}\big[\overline{X}_N\big] = \mathbb{E}\left[ \frac{1}{N} \sum_{i=1}^{N} X_i \right] = \frac{1}{N} \sum_{i=1}^{N} \mathbb{E}[X_i] = \frac{1}{N} \sum_{i=1}^{N} \mu = \mu.
$$
This means that the sample mean $\overline{X}_N$ is an **unbiased estimator** of the population mean $\mu$. Since the $X_i$ are independent, their variances add.
$$
\begin{align*}
\operatorname{Var}\big(\overline{X}_N\big) &= \operatorname{Var}\left( \frac{1}{N} \sum_{i=1}^{N} X_i \right) \\
&= \frac{1}{N^2} \operatorname{Var}\left( \sum_{i=1}^{N} X_i \right) \\
&= \frac{1}{N^2} \sum_{i=1}^{N} \operatorname{Var}(X_i) \\
&= \frac{1}{N^2} \sum_{i=1}^{N} \sigma^2 \\
&= \frac{\sigma^2}{N}
\end{align*}
$$

# Why the Limit Is Normal

Standardize each $X_i$ by defining $Y_i = \dfrac{X_i - \mu}{\sigma}$. Each $Y_i$ has mean $0$ and variance $1$.
$$
\mathbb{E}\left[ \frac{X_i - \mu}{\sigma} \right] = \frac{\mathbb{E}[X_i] - \mu}{\sigma} = \frac{\mu - \mu}{\sigma} = 0
\qquad
\operatorname{Var}\left( \frac{X_i - \mu}{\sigma} \right) = \frac{\mathbb{E}\big[(X_i - \mu)^2\big]}{\sigma^2} = \frac{\sigma^2}{\sigma^2} = 1
$$
So each $Y_i$ has characteristic function $\phi_Y(t) = 1 - \frac{t^2}{2} + \mathcal{O}(t^3)$. Now define
$$
Z_N = \sum_{i=1}^{N} \frac{Y_i}{\sqrt{N}}.
$$
The characteristic function of a sum of independent random variables is the product of their characteristic functions, and scaling $Y_i$ by $\frac{1}{\sqrt{N}}$ replaces $t$ with $\frac{t}{\sqrt{N}}$. So
$$
\phi_{Z_N}(t) = \left[ \phi_Y\!\left( \frac{t}{\sqrt{N}} \right) \right]^N = \left[ 1 - \frac{t^2}{2N} + \mathcal{O}\!\left( \frac{t^3}{N^{3/2}} \right) \right]^N \xrightarrow{N \to \infty} e^{-t^2/2}.
$$
The limit uses $\left(1 + \frac{c}{N}\right)^N \to e^c$. Finally, $e^{-t^2/2}$ is exactly the characteristic function of the standard normal distribution. Characteristic functions and distributions are in one-to-one correspondence, so $Z_N$ approaches a normal distribution with mean $0$ and variance $1$.

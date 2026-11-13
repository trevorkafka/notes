---
aliases:
  - "216831"
tags:
  - statistics
  - AP-statistics
  - reference-sheets
modified: 2026-11-13
draft: false
---

> [!summary] Results
> For a random variable $x$ and constants $a$ and $b$:
> $$
> \mu_{a + bx} = a + b\mu_x \qquad \sigma^2_{a + bx} = b^2 \sigma^2_x \qquad \sigma_{a + bx} = \lvert b \rvert \sigma_x
> $$
> For **independent** random variables $x$ and $y$:
> $$
> \mu_{x + y} = \mu_x + \mu_y \qquad \sigma^2_{x + y} = \sigma^2_x + \sigma^2_y \qquad \sigma_{x + y} = \sqrt{\sigma^2_x + \sigma^2_y}
> $$

# Definitions

Let $x$ be a discrete random variable with possible values $x_1, x_2, \ldots, x_n$ and probabilities $p(x_1), p(x_2), \ldots, p(x_n)$, which satisfy $\sum_{i=1}^{n} p(x_i) = 1$. Its mean $\mu_x$ and variance $\sigma^2_x$ are defined by the following formulas.
$$
\begin{align*}
\mu_x &= \sum_{i=1}^{n} x_i \cdot p(x_i) \\
\sigma^2_x &= \sum_{i=1}^{n} (x_i - \mu_x)^2 \cdot p(x_i)
\end{align*}
$$

# Linear Transformation: $a + bx$

Define a new random variable $y$ by $y_i = a + bx_i$. Each value $y_i$ occurs exactly when $x_i$ does, so $p(y_i) = p(x_i)$. We can then compute $\mu_y$ and $\sigma^2_y$ in terms of $\mu_x$ and $\sigma^2_x$.
$$
\begin{align*}
\mu_y &= \sum_{i=1}^{n} y_i \cdot p(y_i) \\
&= \sum_{i=1}^{n} (a + bx_i) \cdot p(x_i) \\
&= \sum_{i=1}^{n} a \cdot p(x_i) + \sum_{i=1}^{n} bx_i \cdot p(x_i) \\
&= a \underbrace{\sum_{i=1}^{n} p(x_i)}_{1} + b \underbrace{\sum_{i=1}^{n} x_i \cdot p(x_i)}_{\mu_x} \\
&= a + b\mu_x
\end{align*}
$$
$$
\begin{align*}
\sigma^2_y &= \sum_{i=1}^{n} (y_i - \mu_y)^2 \cdot p(y_i) \\
&= \sum_{i=1}^{n} \big( (a + bx_i) - (a + b\mu_x) \big)^2 \cdot p(x_i) \\
&= \sum_{i=1}^{n} (bx_i - b\mu_x)^2 \cdot p(x_i) \\
&= b^2 \sum_{i=1}^{n} (x_i - \mu_x)^2 \cdot p(x_i) \\
&= b^2 \sigma^2_x
\end{align*}
$$
Writing $\mu_{a + bx}$ in place of $\mu_y$ and $\sigma^2_{a + bx}$ in place of $\sigma^2_y$ gives the following formulas.
$$
\mu_{a + bx} = a + b\mu_x \qquad \sigma^2_{a + bx} = b^2 \sigma^2_x
$$
Since standard deviation is never negative, we can also write $\sigma_{a + bx} = \lvert b \rvert \sigma_x$. Notice that adding a constant $a$ shifts the mean but has no effect on the spread.

# Sum of Independent Random Variables: $x + y$

Now let $y$ be a discrete random variable **independent** of $x$, with possible values $y_1, y_2, \ldots, y_m$ and probabilities $p(y_1), p(y_2), \ldots, p(y_m)$, which satisfy $\sum_{j=1}^{m} p(y_j) = 1$. Its mean and variance are defined as before.
$$
\begin{align*}
\mu_y &= \sum_{j=1}^{m} y_j \cdot p(y_j) \\
\sigma^2_y &= \sum_{j=1}^{m} (y_j - \mu_y)^2 \cdot p(y_j)
\end{align*}
$$
Define a new random variable $z$ by $z_{ij} = x_i + y_j$. Because $x$ and $y$ are independent, $p(z_{ij}) = p(x_i)\, p(y_j)$. We can then compute $\mu_z$ and $\sigma^2_z$ in terms of $\mu_x$, $\mu_y$, $\sigma^2_x$, and $\sigma^2_y$.
$$
\begin{align*}
\mu_z &= \sum_{i=1}^{n} \sum_{j=1}^{m} z_{ij} \cdot p(z_{ij}) \\
&= \sum_{i=1}^{n} \sum_{j=1}^{m} (x_i + y_j) \cdot p(x_i)\, p(y_j) \\
&= \sum_{i=1}^{n} \sum_{j=1}^{m} x_i \cdot p(x_i)\, p(y_j) + \sum_{i=1}^{n} \sum_{j=1}^{m} y_j \cdot p(x_i)\, p(y_j) \\
&= \underbrace{\left( \sum_{j=1}^{m} p(y_j) \right)}_{1} \underbrace{\left( \sum_{i=1}^{n} x_i \cdot p(x_i) \right)}_{\mu_x} + \underbrace{\left( \sum_{i=1}^{n} p(x_i) \right)}_{1} \underbrace{\left( \sum_{j=1}^{m} y_j \cdot p(y_j) \right)}_{\mu_y} \\
&= \mu_x + \mu_y
\end{align*}
$$
For the variance, expand the square. The cross term splits into a product of two sums, each of which is zero.
$$
\begin{align*}
\sigma^2_z &= \sum_{i=1}^{n} \sum_{j=1}^{m} (z_{ij} - \mu_z)^2 \cdot p(z_{ij}) \\
&= \sum_{i=1}^{n} \sum_{j=1}^{m} \big( (x_i - \mu_x) + (y_j - \mu_y) \big)^2 \cdot p(x_i)\, p(y_j) \\
&= \sum_{i=1}^{n} \sum_{j=1}^{m} \Big( (x_i - \mu_x)^2 + (y_j - \mu_y)^2 + 2(x_i - \mu_x)(y_j - \mu_y) \Big) \cdot p(x_i)\, p(y_j) \\
&= \underbrace{\left( \sum_{j=1}^{m} p(y_j) \right)}_{1} \underbrace{\left( \sum_{i=1}^{n} (x_i - \mu_x)^2 \cdot p(x_i) \right)}_{\sigma^2_x} + \underbrace{\left( \sum_{i=1}^{n} p(x_i) \right)}_{1} \underbrace{\left( \sum_{j=1}^{m} (y_j - \mu_y)^2 \cdot p(y_j) \right)}_{\sigma^2_y} \\
&\qquad + 2 \underbrace{\left( \sum_{i=1}^{n} (x_i - \mu_x) \cdot p(x_i) \right)}_{0} \underbrace{\left( \sum_{j=1}^{m} (y_j - \mu_y) \cdot p(y_j) \right)}_{0} \\
&= \sigma^2_x + \sigma^2_y
\end{align*}
$$
Writing $\mu_{x + y}$ in place of $\mu_z$ and $\sigma^2_{x + y}$ in place of $\sigma^2_z$ gives the following formulas.
$$
\mu_{x + y} = \mu_x + \mu_y \qquad \sigma^2_{x + y} = \sigma^2_x + \sigma^2_y
$$
Since standard deviation is never negative, we can also write $\sigma_{x + y} = \sqrt{\sigma^2_x + \sigma^2_y}$.

> [!warning] Variances add, standard deviations don't
> It is the **variances** that add, not the standard deviations: $\sigma_{x + y} \neq \sigma_x + \sigma_y$ in general. The same is true for differences. Since $x - y = x + (-1)y$, combining both results gives $\sigma^2_{x - y} = \sigma^2_x + (-1)^2 \sigma^2_y = \sigma^2_x + \sigma^2_y$. The variances still add.

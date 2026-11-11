---
aliases:
  - "704163"
tags:
  - statistics
  - AP-statistics
  - calculus
draft: true
---

Consider a set of $N$ bivariate pieces of data $\{(x_i, y_i)\}$ and the line $\hat y = \alpha + \beta x$. The **sum-of-squares error** $e$ associated with this line and set of data points is defined as[^1]

$$
e(\alpha, \beta) \overset{\text{def}}{=} \sum \left( y_i - (\alpha + \beta x_i) \right)^2.
$$

The line $\hat y = \alpha + \beta x$ is called the **least-squares regression line** if the values of $\alpha, \beta$ are chosen as to minimize $e(\alpha, \beta)$, which occurs when both $\frac{\partial e}{\partial \alpha}$ and $\frac{\partial e}{\partial \beta}$ vanish.

# Minimizing with Respect to $\alpha$

Firstly, $\frac{\partial e}{\partial \alpha} = 0$ implies the following.

$$
\begin{align*}
0 &= \frac{\partial}{\partial \alpha} \left( \sum \left( y_i - (\alpha + \beta x_i) \right)^2 \right) \\
0 &= \sum 2 \left( y_i - (\alpha + \beta x_i) \right) \cdot (-1) \\
0 &= \sum \left( y_i - (\alpha + \beta x_i) \right) \\
0 &= \sum y_i - \sum \alpha - \sum \beta x_i \\
0 &= N\mu_y - N\alpha - \beta N\mu_x
\end{align*}
$$

$$
\boxed{\mu_y = \alpha + \beta \mu_x} \tag{1}
$$

Therefore, $(\mu_x, \mu_y)$ is a point on the least-squares regression line $\hat y = \alpha + \beta x$.

# Minimizing with Respect to $\beta$

Secondly, $\frac{\partial e}{\partial \beta} = 0$ has the following implications.

$$
\begin{align*}
0 &= \frac{\partial}{\partial \beta} \left( \sum \left( y_i - (\alpha + \beta x_i) \right)^2 \right) \\
0 &= \sum 2 \left( y_i - (\alpha + \beta x_i) \right) \cdot (-x_i) \\
0 &= \sum \left( x_i y_i - \left( \alpha x_i + \beta x_i^2 \right) \right) \\
0 &= \sum x_i y_i - \alpha \sum x_i - \beta \sum x_i^2 \\
0 &= N\mu_{xy} - \alpha N\mu_x - \beta N\mu_{x^2} \\
0 &= \mu_{xy} - \alpha \mu_x - \beta \mu_{x^2}
\end{align*}
$$

Now, substitute $\alpha = \mu_y - \beta \mu_x$ by means of equation $(1)$.

$$
\begin{align*}
0 &= \mu_{xy} - (\mu_y - \beta \mu_x) \mu_x - \beta \mu_{x^2} \\
0 &= \mu_{xy} - \mu_x \mu_y - \beta \left( \mu_{x^2} - \mu_x^2 \right) \tag{2}
\end{align*}
$$

Next, we need to prove two lemmas.

>[!note] Lemma 1
>$$
>\frac{1}{N} \sum (x - \mu_x)(y - \mu_y) = \mu_{xy} - \mu_x \mu_y
>$$

>[!check] Proof of Lemma 1
>$$
>\begin{align*}
>\frac{1}{N} \sum (x - \mu_x)(y - \mu_y) &= \frac{1}{N} \sum \left( xy - x\mu_y - y\mu_x + \mu_x \mu_y \right) \\
>&= \frac{1}{N} \sum xy - \frac{1}{N} \sum x\mu_y - \frac{1}{N} \sum y\mu_x + \frac{1}{N} \sum \mu_x \mu_y \\
>&= \mu_{xy} - \mu_x \mu_y - \mu_x \mu_y + \mu_x \mu_y \\
>&= \mu_{xy} - \mu_x \mu_y
>\end{align*}
>$$

>[!note] Lemma 2
>$$
>\sigma_x^2 = \mu_{x^2} - \mu_x^2
>$$

>[!check] Proof of Lemma 2
>By the definition of variance, we have
>$$
>\sigma_x^2 \overset{\text{def}}{=} \frac{1}{N} \sum (x - \mu_x)^2 = \frac{1}{N} \sum (x - \mu_x)(x - \mu_x).
>$$
>Then, by Lemma 1, we thus have
>$$
>\sigma_x^2 = \mu_{xx} - \mu_x \mu_x = \mu_{x^2} - \mu_x^2.
>$$

From here, utilize Lemmas 1 and 2 and some algebraic manipulation on equation $(2)$ to solve for $\beta$ in terms of $z_{x_i}, z_{y_i}$.

$$
\begin{align*}
0 &= \frac{1}{N} \sum (x - \mu_x)(y - \mu_y) - \beta \sigma_x^2 \\
\beta &= \frac{1}{\sigma_x^2} \frac{1}{N} \sum (x - \mu_x)(y - \mu_y) \\
\beta &= \frac{\sigma_y}{\sigma_x} \left( \frac{1}{N} \sum \left( \frac{x - \mu_x}{\sigma_x} \right) \left( \frac{y - \mu_y}{\sigma_y} \right) \right) \tag{3} \\
\beta &= \frac{\sigma_y}{\sigma_x} \left( \frac{1}{N} \sum z_{x_i} z_{y_i} \right)
\end{align*}
$$

Define the correlation coefficient $r$ as follows.

$$
\boxed{r \overset{\text{def}}{=} \frac{1}{N} \sum z_{x_i} z_{y_i}}
$$

Therefore, we can rewrite equation $(3)$ as a compact formula for $\beta$.

$$
\boxed{\beta = \frac{\sigma_y}{\sigma_x} r} \tag{4}
$$

>[!info] Summary of Key Points
>The least-squares regression line of $N$ data points $\{(x_i, y_i)\}$ given by the equation $\hat y = \alpha + \beta x$ satisfies the relationships
>$$
>\boxed{\beta = \frac{\sigma_y}{\sigma_x} r \ \text{ and } \ \mu_y = \alpha + \beta \mu_x},
>$$
>where we define the following.
>$$
>\begin{align*}
>\mu_x &\overset{\text{def}}{=} \frac{1}{N} \sum x_i &&\text{(mean/average of $\{x_i\}$)} \\[0.5em]
>\sigma_x &\overset{\text{def}}{=} \sqrt{\frac{1}{N} \sum (x_i - \mu_x)^2} &&\text{(standard deviation of $\{x_i\}$)} \\[0.5em]
>z_{x_i} &\overset{\text{def}}{=} \frac{x_i - \mu_x}{\sigma_x} &&\text{($z$-score of $x_i$ within $\{x_i\}$)} \\[0.5em]
>r &\overset{\text{def}}{=} \frac{1}{N} \sum z_{x_i} z_{y_i} &&\text{(correlation of $\{(x_i, y_i)\}$)}
>\end{align*}
>$$

# The Regression Line in $z$-Scores

As an alternative formulation, via equation $(1)$, substitute $\alpha = \mu_y - \beta \mu_x$ into the regression line $\hat y = \alpha + \beta x$.

$$
\begin{gather*}
\hat y = \mu_y - \beta \mu_x + \beta x \\
\hat y - \mu_y = \beta (x - \mu_x)
\end{gather*}
$$

Now, substitute in equation $(4)$.

$$
\begin{gather*}
\hat y - \mu_y = \frac{\sigma_y}{\sigma_x} r (x - \mu_x) \\
\frac{\hat y - \mu_y}{\sigma_y} = r \left( \frac{x - \mu_x}{\sigma_x} \right) \\
\boxed{\hat z_y = r z_x}
\end{gather*}
$$

This final result is the equation of the regression line on scaled $z$-score $x$ and $\hat y$ axes. In such a case, we can see that the regression line passes through the origin and the correlation coefficient $r$ represents the slope of the regression line.

[^1]: On this page, we will consistently use $\sum$ as a shorthand meaning $\sum_{i=1}^{N}$.

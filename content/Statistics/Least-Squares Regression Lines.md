---
aliases:
  - "704163"
tags:
  - statistics
  - AP-statistics
  - calculus
draft: false
---

Consider a sample of $n$ bivariate pieces of data $\{(x_i, y_i)\}$ and the line $\hat y = a + bx$. The **sum-of-squares error** $e$ associated with this line and set of data points is defined as[^1]

$$
e(a, b) \overset{\text{def}}{=} \sum \left( y_i - (a + bx_i) \right)^2.
$$

The line $\hat y = a + bx$ is called the **least-squares regression line** if the values of $a, b$ are chosen as to minimize $e(a, b)$.

>[!info] Summary of Key Points
>The least-squares regression line of $n$ data points $\{(x_i, y_i)\}$ given by the equation $\hat y = a + bx$ satisfies the relationships
>$$
>\boxed{b = r \frac{s_y}{s_x} \ \text{ and } \ \bar y = a + b \bar x},
>$$
>where we define the following.
>$$
>\begin{align*}
>\bar x &\overset{\text{def}}{=} \frac{1}{n} \sum x_i &&\text{(sample mean of $\{x_i\}$)} \\[0.5em]
>s_x &\overset{\text{def}}{=} \sqrt{\frac{1}{n - 1} \sum (x_i - \bar x)^2} &&\text{(sample standard deviation of $\{x_i\}$)} \\[0.5em]
>z_{x_i} &\overset{\text{def}}{=} \frac{x_i - \bar x}{s_x} &&\text{($z$-score of $x_i$ within $\{x_i\}$)} \\[0.5em]
>r &\overset{\text{def}}{=} \frac{1}{n - 1} \sum z_{x_i} z_{y_i} &&\text{(correlation of $\{(x_i, y_i)\}$)}
>\end{align*}
>$$

>[!note] Sample vs. population notation
>Because the data here are a sample, this page uses the sample notation $\bar x$, $s_x$, $a$, $b$ rather than the population notation $\mu_x$, $\sigma_x$, $\alpha$, $\beta$. If the population formulas (dividing by $n$ instead of $n - 1$) are used for both the standard deviations and $r$, the slope $b$ comes out exactly the same, because the extra factors cancel.

Below are two derivations of these results. The first uses only algebra (the vertex of a parabola), and the second uses partial derivatives. Both lead to the same two equations, which are then simplified in the section on writing the slope in terms of $r$.

# Derivation Without Calculus

The idea is to minimize $e(a, b)$ one variable at a time. In each case, $e$ turns out to be a quadratic that opens up, so its minimum is at the vertex, $-\frac{B}{2A}$. Two facts will be used repeatedly.

- $\sum x_i = n\bar x$ and $\sum y_i = n\bar y$, by the definition of the mean.
- A constant can be factored out of a sum, and adding the same constant $n$ times gives $n$ times that constant. For example, $\sum a^2 = na^2$.

## The Line Passes Through $(\bar x, \bar y)$

Hold the slope $b$ fixed and treat $e$ as a function of $a$ only. Since $(-u)^2 = u^2$, each squared residual can be written as $\big( (bx_i - y_i) + a \big)^2$. Expanding with $(P + Q)^2 = P^2 + 2PQ + Q^2$ and splitting up the sum gives the following.
$$
\begin{align*}
e(a) &= \sum \Big( (bx_i - y_i)^2 + 2(bx_i - y_i)a + a^2 \Big) \\
&= \underbrace{n}_{A} a^2 + \underbrace{2 \sum (bx_i - y_i)}_{B} a + \underbrace{\sum (bx_i - y_i)^2}_{C}
\end{align*}
$$
Since $A = n > 0$, this parabola opens up, so its minimum is at its vertex.
$$
\begin{align*}
a &= -\frac{B}{2A} = -\frac{2 \sum (bx_i - y_i)}{2n} \\
&= -\frac{1}{n} \left( b \sum x_i - \sum y_i \right) \\
&= -\frac{1}{n} \left( bn\bar x - n\bar y \right) \\
&= \bar y - b \bar x
\end{align*}
$$
Rearranging gives the following.
$$
\boxed{\bar y = a + b \bar x} \tag{1}
$$
This holds for every slope $b$, so in particular it holds for the slope of the least-squares regression line.

## The Slope

Since the best intercept for any slope is $a = \bar y - b\bar x$, substitute it into each residual and regroup.
$$
y_i - (a + bx_i) = y_i - \bar y + b\bar x - bx_i = (y_i - \bar y) - b(x_i - \bar x)
$$
Now $e$ depends only on $b$. Expanding with $(P - Q)^2 = P^2 - 2PQ + Q^2$ and splitting up the sum gives another quadratic.
$$
\begin{align*}
e(b) &= \sum \Big( (y_i - \bar y) - b(x_i - \bar x) \Big)^2 \\
&= \sum \Big( (y_i - \bar y)^2 - 2b(x_i - \bar x)(y_i - \bar y) + b^2(x_i - \bar x)^2 \Big) \\
&= \underbrace{\sum (x_i - \bar x)^2}_{A} b^2 \underbrace{- 2 \sum (x_i - \bar x)(y_i - \bar y)}_{B} b + \underbrace{\sum (y_i - \bar y)^2}_{C}
\end{align*}
$$
$A$ is a sum of squares, so $A > 0$ as long as the $x_i$ are not all equal. The parabola opens up, so its minimum is again at its vertex. The $2$s cancel, and so do the two minus signs.
$$
b = -\frac{B}{2A} = \frac{\sum (x_i - \bar x)(y_i - \bar y)}{\sum (x_i - \bar x)^2} \tag{2}
$$

# Derivation With Calculus

The minimum of $e(a, b)$ occurs when both $\frac{\partial e}{\partial a}$ and $\frac{\partial e}{\partial b}$ vanish. On this part of the page, a bar over any expression means its average over the data, so for example $\overline{xy} = \frac{1}{n} \sum x_i y_i$ and $\overline{x^2} = \frac{1}{n} \sum x_i^2$.

## Minimizing with Respect to $a$

Firstly, $\frac{\partial e}{\partial a} = 0$ implies the following.

$$
\begin{align*}
0 &= \frac{\partial}{\partial a} \left( \sum \left( y_i - (a + bx_i) \right)^2 \right) \\
0 &= \sum 2 \left( y_i - (a + bx_i) \right) \cdot (-1) \\
0 &= \sum \left( y_i - (a + bx_i) \right) \\
0 &= \sum y_i - \sum a - \sum bx_i \\
0 &= n\bar y - na - bn\bar x
\end{align*}
$$

$$
\bar y = a + b \bar x
$$

This is equation $(1)$ again, so $(\bar x, \bar y)$ is a point on the least-squares regression line $\hat y = a + bx$.

## Minimizing with Respect to $b$

Secondly, $\frac{\partial e}{\partial b} = 0$ has the following implications.

$$
\begin{align*}
0 &= \frac{\partial}{\partial b} \left( \sum \left( y_i - (a + bx_i) \right)^2 \right) \\
0 &= \sum 2 \left( y_i - (a + bx_i) \right) \cdot (-x_i) \\
0 &= \sum \left( x_i y_i - \left( ax_i + bx_i^2 \right) \right) \\
0 &= \sum x_i y_i - a \sum x_i - b \sum x_i^2 \\
0 &= n\overline{xy} - an\bar x - bn\overline{x^2} \\
0 &= \overline{xy} - a \bar x - b \overline{x^2}
\end{align*}
$$

Now, substitute $a = \bar y - b \bar x$ by means of equation $(1)$.

$$
\begin{align*}
0 &= \overline{xy} - (\bar y - b \bar x) \bar x - b \overline{x^2} \\
0 &= \overline{xy} - \bar x \bar y - b \left( \overline{x^2} - \bar x^2 \right) \tag{3}
\end{align*}
$$

Next, we need to prove two lemmas.

>[!note] Lemma 1
>$$
>\frac{1}{n} \sum (x_i - \bar x)(y_i - \bar y) = \overline{xy} - \bar x \bar y
>$$

>[!check]- Proof of Lemma 1
>$$
>\begin{align*}
>\frac{1}{n} \sum (x_i - \bar x)(y_i - \bar y) &= \frac{1}{n} \sum \left( x_i y_i - x_i \bar y - y_i \bar x + \bar x \bar y \right) \\
>&= \frac{1}{n} \sum x_i y_i - \frac{1}{n} \sum x_i \bar y - \frac{1}{n} \sum y_i \bar x + \frac{1}{n} \sum \bar x \bar y \\
>&= \overline{xy} - \bar x \bar y - \bar x \bar y + \bar x \bar y \\
>&= \overline{xy} - \bar x \bar y
>\end{align*}
>$$

>[!note] Lemma 2
>$$
>\frac{1}{n} \sum (x_i - \bar x)^2 = \overline{x^2} - \bar x^2
>$$

>[!check]- Proof of Lemma 2
>Write the square as a product and apply Lemma 1 with $y_i = x_i$.
>$$
>\frac{1}{n} \sum (x_i - \bar x)^2 = \frac{1}{n} \sum (x_i - \bar x)(x_i - \bar x) = \overline{xx} - \bar x \bar x = \overline{x^2} - \bar x^2
>$$

From here, use Lemmas 1 and 2 on equation $(3)$, multiply through by $n$, and solve for $b$.

$$
\begin{align*}
0 &= \frac{1}{n} \sum (x_i - \bar x)(y_i - \bar y) - b \cdot \frac{1}{n} \sum (x_i - \bar x)^2 \\
b &= \frac{\sum (x_i - \bar x)(y_i - \bar y)}{\sum (x_i - \bar x)^2}
\end{align*}
$$

This is equation $(2)$, the same result reached in the derivation without calculus.

# Writing the Slope in Terms of $r$

Divide the top and bottom of equation $(2)$ by $n - 1$. The bottom becomes $s_x^2$.

$$
b = \frac{1}{s_x^2} \cdot \frac{1}{n - 1} \sum (x_i - \bar x)(y_i - \bar y)
$$

Split $\frac{1}{s_x^2}$ as $\frac{s_y}{s_x} \cdot \frac{1}{s_x s_y}$, and move $\frac{1}{s_x s_y}$ inside the sum so that each factor becomes a $z$-score.

$$
\begin{align*}
b &= \frac{s_y}{s_x} \left( \frac{1}{n - 1} \sum \frac{x_i - \bar x}{s_x} \cdot \frac{y_i - \bar y}{s_y} \right) \\
&= \frac{s_y}{s_x} \left( \frac{1}{n - 1} \sum z_{x_i} z_{y_i} \right)
\end{align*}
$$

Define the correlation coefficient $r$ as follows.

$$
\boxed{r \overset{\text{def}}{=} \frac{1}{n - 1} \sum z_{x_i} z_{y_i}}
$$

Therefore, we can write a compact formula for $b$.

$$
\boxed{b = r \frac{s_y}{s_x}} \tag{4}
$$

# The Regression Line in $z$-Scores

As an alternative formulation, via equation $(1)$, substitute $a = \bar y - b \bar x$ into the regression line $\hat y = a + bx$.

$$
\begin{gather*}
\hat y = \bar y - b \bar x + bx \\
\hat y - \bar y = b (x - \bar x)
\end{gather*}
$$

Now, substitute in equation $(4)$.

$$
\begin{gather*}
\hat y - \bar y = r \frac{s_y}{s_x} (x - \bar x) \\
\frac{\hat y - \bar y}{s_y} = r \left( \frac{x - \bar x}{s_x} \right) \\
\boxed{\hat z_y = r z_x}
\end{gather*}
$$

This final result is the equation of the regression line on scaled $z$-score $x$ and $\hat y$ axes. In such a case, we can see that the regression line passes through the origin and the correlation coefficient $r$ represents the slope of the regression line.

[^1]: On this page, we will consistently use $\sum$ as a shorthand meaning $\sum_{i=1}^{n}$.

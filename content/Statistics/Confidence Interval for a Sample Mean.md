---
aliases:
  - "592734"
tags:
  - statistics
  - AP-statistics
draft: false
created: 2022-11-07
modified: 2022-11-07
---

# Introduction

- Often it is infeasible to do a comprehensive survey of an entire population in order to determine a desired **population characteristic**, so generally the simplest alternative is to generate a **point estimate** from a single sample of size $n$.
- In this article, we will consider situations where our desired population characteristic is the **population mean** $\mu$, which we can estimate from the **sample mean** $\bar x$.
- Every time we take a sample from the population to estimate $\mu$, the value of $\bar x$ can vary. Some values of $\bar x$ are more likely to occur than others, some of which may be close to $\mu$ and others of which may be far from $\mu$. This distribution of possible values of $\bar x$ is called the **sampling distribution**. The sampling distribution is centered around $\mu$.

# Basic Facts about the Sampling Distribution of $\bar x$

- The **mean of the sampling distribution** of $\bar x$ is $\mu_{\bar x} = \mu$.
- The **standard deviation of the sampling distribution** of $\bar x$ is $\sigma_{\bar x} = \dfrac{\sigma}{\sqrt n}$.

## Large Sample ($n \geq 30$)

The sampling distribution of $\bar x$ is described by a **normal distribution** due to the **Central Limit Theorem**. Use $z$-scores to identify points on the horizontal axis:

$$
z = \frac{\bar x - \mu}{\dfrac{\sigma}{\sqrt n}}
$$

If $\sigma$ is unknown, it may be approximated by $s$ since we are working with a large sample.

## Small Sample ($n < 30$)

The sampling distribution of $\bar x$ is described by a **$t$-distribution** with $n - 1$ degrees of freedom. Use $t$-scores to identify points on the horizontal axis:

$$
t = \frac{\bar x - \mu}{\dfrac{s}{\sqrt n}}
$$

<span class="invert">![[z-vs-t-distribution-curves.svg]]</span>

The figure above compares the $z$ curve (normal distribution) with $t$ curves ($t$-distributions) for $12$ and $4$ degrees of freedom. The fewer the degrees of freedom, the lower the peak and the heavier the tails.

# Constructing Confidence Intervals

- Sample means $\bar x$ can be used as a point estimate of $\mu$. This is only meaningful if we know how close we should expect $\mu$ to be to $\bar x$ and with what likelihood.
- To communicate this information, we can deduce a **confidence interval** $(a, b)$ from the measured value of $\bar x$ that states that the actual value of $\mu$ is between $a$ and $b$, up to a certain **confidence level** ($\%$).
	- For example, a confidence interval $(2.1, 5.3)$ at a confidence level of $95\%$ means that there is a $95\%$ chance that the true value of $\mu$ lies between $2.1$ and $5.3$. This determination was based on the previously obtained value of $\bar x$, which lies directly at the center of this interval (so, $\bar x = \frac{2.1 + 5.3}{2} = 3.7$).
- A critical value ($z_c$ or $t_c$ depending on whether you are working with a normal distribution or $t$-distribution) must be computed in order to create your **confidence interval**, and is based on your **confidence level**. An example is shown in the diagram below for finding $t_c$ for a small sample (size $n = 13$) at $95\%$ and $99\%$ confidence levels.

<span class="invert">![[t-distribution-12df-critical-values.svg]]</span>

For a small sample with $12$ degrees of freedom (sample size $n = 13$), the area under the curve can be used to find critical $t$-values $t_c$. In the left diagram, a $95\%$ confidence level gives $t_c = 2.18$. In the right diagram, a $99\%$ confidence level gives $t_c = 3.06$.

- The confidence interval is then determined based on $\sigma_{\bar x}$, the critical value, and the measured value of $\bar x$.

>[!note] Large Sample ($z$-score) Confidence Interval
>$$
>\begin{align*}
>\text{confidence interval} &= \left( \bar x - z_c \sigma_{\bar x},\ \bar x + z_c \sigma_{\bar x} \right) \\[0.5em]
>&= \left( \bar x - \frac{z_c \sigma}{\sqrt n},\ \bar x + \frac{z_c \sigma}{\sqrt n} \right)
>\end{align*}
>$$

>[!note] Small Sample ($t$-score) Confidence Interval
>$$
>\begin{align*}
>\text{confidence interval} &= \left( \bar x - t_c \sigma_{\bar x},\ \bar x + t_c \sigma_{\bar x} \right) \\[0.5em]
>&= \left( \bar x - \frac{t_c s}{\sqrt n},\ \bar x + \frac{t_c s}{\sqrt n} \right)
>\end{align*}
>$$

- The **margin of error** $E$ is the distance between the center of the confidence interval and the endpoints of the interval.

$$
E = \frac{z_c \sigma}{\sqrt n} \qquad \text{or} \qquad E = \frac{t_c s}{\sqrt n}
$$

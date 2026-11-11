---
aliases:
  - "846215"
tags:
  - statistics
  - AP-statistics
  - problem-solving
draft: true
---

See also [[Hypothesis Testing of a Single Sample (Means)]].

# Question

It is assumed to be the case that $14.5\%$ of people in the world are over 6 ft tall. Assuming a level of significance of $\alpha = 5\%$, is this result accurate?

# Study Method

Obviously, we cannot perform a study on the entire world population. An SRS of $n = 2045$ people's heights were taken, of which $327$ people were taller than 6 ft. This amounts to a measured percentage of $\hat p \approx 15.99\% > p_0$, which suggests that the original figure may not have been true. Further analysis will determine whether or not it is reasonable to declare the original statement as false.

# Analysis

Our null hypothesis is given by the question text, where the proportion of people taller than 6 ft is $p_0 = 14.5\%$, while our alternative hypothesis is suggested by our data, suggesting that the real value $p$ is greater than $p_0$.

$$
\begin{align*}
&H_0 : p = 14.5\% &&\text{(null hypothesis)} \\
&H_a : p > 14.5\% &&\text{(alternative hypothesis)}
\end{align*}
$$

We will assume by default that $H_0$ is true UNLESS it is sufficiently unlikely for us to have gotten the study results that we did when $H_0$ is true. The tool we will use to assess this is the $P$-value, which represents the probability of a Type I error, which is the probability of us rejecting the $H_0$ when $H_0$ is indeed true. We set a **level of significance** $\alpha$ in order to set a standard by which we either judge the $p$ that we computed as being either "too high" or "low enough." This value $\alpha$ is also sometimes known as the **probability of a Type I error.**

$$
\begin{align*}
&\text{if $P$-value} > \alpha \text{ then we continue to presume that $H_0$ is true} \\
&\text{if $P$-value} < \alpha \text{ then we reject $H_0$ in favor of accepting $H_a$}
\end{align*}
$$

According to p. 2 of the AP Statistics Formula sheet, the mean and standard deviation of the sampling distribution of a sample proportion are as follows, where $p$ represents the **real** proportion of the world population that is taller than 6 feet.

$$
\mu_{\hat p} = p \qquad\qquad \sigma_{\hat p} = \sqrt{\frac{p(1-p)}{n}}
$$

These formulas only hold when the **central limit theorem** applies, which holds when the **large counts conditions** are satisfied: $np \geq 10$, $n(1-p) \geq 10$, $n \geq 30$. Additionally, the $10\%$ condition must also be satisfied: $n \leq \frac{1}{10}N$. These can be presumed to be true since $n$ is large, and $N$ is comparatively extremely large.

Since $p$ is unknown, our best option is to use $p_0$ in place of $p$. This is reasonable, since we are by default taking the stance that $H_0$ is true.

$$
\mu_{\hat p} \approx p_0 \qquad\qquad \sigma_{\hat p} \approx \sqrt{\frac{p_0(1-p_0)}{n}}
$$

This allows us to compute an approximated $z$-score associated with the measured proportion $\hat p$.

$$
z = \frac{\hat p - \mu_{\hat p}}{\sigma_{\hat p}} \approx \frac{\hat p - p_0}{\sqrt{\dfrac{p_0(1-p_0)}{n}}} = \frac{.1599 - .145}{\sqrt{\dfrac{.145(1-.145)}{2045}}} = 1.91366\ldots
$$

Using Table A, we can determine the probability of us achieving the results that we did when originally assuming that the null hypothesis was true, which is our $P$-value.

$$
P\text{-value} = P(\hat p \geq 15.99\%) \approx P(z \geq 1.91366\ldots) \approx .0278 = 2.78\% < \alpha = 5\%
$$

Since $P\text{-value} < \alpha$, we are able to reject the null hypothesis. Therefore, the original statement that $14.5\%$ of people in the world are over 6 ft tall is **false**, as suggested by our collected data.

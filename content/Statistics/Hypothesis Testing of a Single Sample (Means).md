---
aliases:
  - "317958"
tags:
  - statistics
  - AP-statistics
  - problem-solving
draft: false
created: 2021-12-02
modified: 2021-12-02
---

See also [[Hypothesis Testing of a Single Sample (Proportions)]].

# Question

It is assumed to be the case that the average height of people in the world is $\mu_0 = 155$ cm. Assuming a level of significance of $\alpha = 5\%$, is this result accurate?

# Study Method

Obviously, we cannot perform a study on the entire world population. An SRS of $n = 2045$ people's heights were taken, of which the average height was $\overline{X} = 162$ cm with sample standard deviation $s = 11$ cm. The fact that $\mu_0 \neq \overline{X}$ suggests that the original figure may not have been true. Further analysis will determine whether or not it is reasonable to declare the original statement as false.

# Analysis

Our null hypothesis is given by the question text while our alternative hypothesis is suggested by our data, suggesting that the real value $\mu$ is greater than $\mu_0$.

$$
\begin{align*}
&H_0 : \mu = 155 \text{ cm} &&\text{(null hypothesis)} \\
&H_a : \mu > 155 \text{ cm} &&\text{(alternative hypothesis)}
\end{align*}
$$

We will assume by default that $H_0$ is true UNLESS it is sufficiently unlikely for us to have gotten the study results that we did when $H_0$ is true. The tool we will use to assess this is the $P$-value, which represents the probability of a Type I error, which is the probability of us rejecting the $H_0$ when $H_0$ is indeed true. We set a **level of significance** $\alpha$ in order to set a standard by which we either judge the $\mu$ that we computed as being either "too high" or "low enough." This value $\alpha$ is also sometimes known as the **probability of a Type I error.**

$$
\begin{align*}
&\text{if $P$-value} > \alpha \text{ then we continue to presume that $H_0$ is true} \\
&\text{if $P$-value} < \alpha \text{ then we reject $H_0$ in favor of accepting $H_a$}
\end{align*}
$$

According to p. 2 of the AP Statistics Formula sheet, the mean and standard deviation of the sampling distribution of a sample mean are as follows, where $\mu$ represents the **real** mean height of the population.

$$
\mu_{\overline{X}} = \mu \qquad\qquad \sigma_{\overline{X}} = \frac{\sigma}{\sqrt n}
$$

These formulas only hold when the **central limit theorem** applies, which holds when the **large counts condition** is satisfied: $n \geq 30$. Additionally, the $10\%$ condition must also be satisfied: $n \leq \frac{1}{10}N$. These can be presumed to be true since $n$ is large, and $N$ is comparatively extremely large.

Since $\mu$ and $\sigma$ are unknown, our best option is to use $\mu_0$ in place of $\mu$. This is reasonable, since we are by default taking the stance that $H_0$ is true. We also will use $s$ in place of $\sigma$ (as is done when constructing a confidence interval) since $n$ is large.

$$
\mu_{\overline{X}} \approx \mu_0 \qquad\qquad \sigma_{\overline{X}} \approx \frac{s}{\sqrt n}
$$

This allows us to compute an approximated $t$-score associated with the sample mean $\overline{X}$ with $n - 1 = 2044$ degrees of freedom.

$$
t = \frac{\overline{X} - \mu_0}{\sigma_{\overline{X}}} \approx \frac{\overline{X} - \mu_0}{\dfrac{s}{\sqrt n}} = \frac{162 \text{ cm} - 155 \text{ cm}}{\dfrac{11 \text{ cm}}{\sqrt{2045}}} \approx 28.777\ldots
$$

Using a $t$-distribution calculator or table, we can determine the probability of us achieving the results that we did when originally assuming that the null hypothesis was true, which is our $P$-value.

$$
P\text{-value} = P\left(\overline{X} \geq 162 \text{ cm}\right) \approx P(t \geq 28.777\ldots) \approx 0 = 0\% < \alpha = 5\%
$$

Since $P\text{-value} < \alpha$, we are able to reject the null hypothesis. Therefore, the original statement that the average height of people in the world is $155$ cm is **false**, as suggested by our collected data.

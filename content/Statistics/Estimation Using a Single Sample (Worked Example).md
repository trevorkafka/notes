---
aliases:
  - "238461"
tags:
  - statistics
  - AP-statistics
  - problem-solving
draft: false
created: 2022-11-07
modified: 2022-11-07
---

# Question

Answered with $95\%$ confidence, what percentage $p$ of Americans eat breakfast every day?

# Study Method

It is infeasible to survey all $N = 328{,}200{,}000$ Americans, so you only survey a **sample** of size $n = 3000$ Americans and provide them with a simple yes/no survey and compute the percentage of the sample $\hat p$ that responded "yes" ($\hat p$ is called the **sample statistic**). This can give you a reasonable **point estimate** of the answer to your question. Let's say the result of our survey found $\hat p = 68\%$.

# Analysis

According to the **Central Limit Theorem**, the **sampling distribution** of possible values $\hat p$ will be approximately **normal** as long as $n$ and $p$ satisfy the **Large Counts Condition** $np \geq 10$ and $n(1-p) \geq 10$. Even though we don't know the value of $p$, the fact that $n$ is so large can assure us that we are most likely going to satisfy the Large Counts Condition and therefore find that $\hat p$ forms a normal distribution.

According to Table A, our measured value of $\hat p$ for our sole survey sample has a $95\%$ probability of being within $z = 1.96$ standard deviations from the mean of the $\hat p$ distribution. According to your formula sheet, the mean and standard deviation of the distribution of $\hat p$ are as follows.

$$
\mu_{\hat p} = p \qquad\qquad \sigma_{\hat p} = \sqrt{\frac{p(1-p)}{n}}
$$

Since $p$ is unknown, we must use $\hat p$ in place of $p$, which we can do as long as we have a large sample size.

$$
\mu_{\hat p} \approx \hat p = 68\% \qquad\qquad \sigma_{\hat p} \approx \sqrt{\frac{\hat p(1-\hat p)}{n}}
$$

Therefore $95\%$ of the time, $p$ will be within the interval $68\% \pm 1.96\sigma_{\hat p}$. This value of $1.96\sigma_{\hat p}$ is called the error, which can be computed explicitly.

$$
1.96\sigma_{\hat p} = 1.96\sqrt{\frac{.68(1-.68)}{3000}} \approx .0167
$$

Therefore, we can state with $95\%$ confidence that $\boxed{68\% \pm 1.7\%}$ of Americans eat breakfast every day.

# Follow-Up

If we wanted to improve our study to have an error of $\pm 0.5\%$ but still retain the $95\%$ confidence interval ($z = 1.96$), we would need to increase our sample size $n$. We now need to figure out a suitable sample size $n$. This value $0.5\%$ is called the **bound on error estimation** $B$.

$$
B = z\sigma_{\hat p} = z\sqrt{\frac{p(1-p)}{n}}
$$

This equation can be solved for $n$ as follows.

$$
n = p(1-p)\left(\frac{z}{B}\right)^2 \qquad \text{(minimum value of $n$)}
$$

Since $p$ is unknown and the maximum value of $p(1-p)$ is $.25$ (check the graph of $y = x(1-x)$ if you're not convinced), we can guarantee a large enough value of $n$ if we replace $p(1-p)$ with $.25$.

$$
n \geq .25\left(\frac{z}{B}\right)^2
$$

Let's plug in our values.

$$
n \geq .25\left(\frac{1.96}{.005}\right)^2 = 38416
$$

So, in order to obtain a result with $95\%$ confidence and an error of $\pm 0.5\%$ or lower, we would need a sample size of at least $\boxed{n_\text{min} = 38416}$ people.

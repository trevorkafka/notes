---
tags:
  - algebra-2
  - precalc
  - ACT
  - reference-sheets
draft: true
aliases:
  - "018200"
modified: 2025-12-25
---

Let $b$ and $c$ be valid bases (positive and not equal to $1$), let $x$ and $y$ be positive numbers, and let $r$ be any real number.
# Definitions

$$
\log_b x = y \iff b^y = x
$$

>[!note]- 
>In words, $\log_b x$ is the exponent you raise $b$ to in order to get $x$. For example, $\log_2 8 = 3$ because $2^3 = 8$. Since $b^y$ is always positive, $\log_b x$ is only defined for $x > 0$.

$$
\begin{align*}
\log x &= \log_{10} x &\text{(common logarithm)} \\
\ln x &= \log_e x &\text{(natural logarithm)}
\end{align*}
$$

where $e \approx 2.71828$. Every property on this page applies to both.

>[!note]- 
>In algebra and precalculus classes, on the ACT, and on Desmos and TI calculators, $\log x$ with no base written means $\log_{10} x$. Some calculus textbooks and most programming languages use $\log x$ to mean $\ln x$ instead.

# Special Values

$$
\begin{gather*}
\log_b 1 = 0 \\
\log_b b = 1
\end{gather*}
$$

# Inverse (Cancellation) Properties

$$
\begin{align*}
\log_b \left( b^r \right) &= r \\
b^{\log_b x} &= x
\end{align*}
$$

# Product, Quotient, and Power Rules

$$
\begin{align*}
\log_b (xy) &= \log_b x + \log_b y &\text{(product rule)} \\[0.5em]
\log_b \frac{x}{y} &= \log_b x - \log_b y &\text{(quotient rule)} \\[0.5em]
\log_b \left( x^r \right) &= r \log_b x &\text{(power rule)}
\end{align*}
$$

Special cases of the power rule:

$$
\begin{align*}
\log_b \frac{1}{x} &= -\log_b x \\[0.5em]
\log_b \sqrt[n]{x} &= \frac{1}{n} \log_b x
\end{align*}
$$

>[!note]- 
>These rules require the inputs to be positive. For example, $\log (x^2) = 2 \log x$ only holds for $x > 0$, since the left side is defined for every $x \neq 0$ but the right side is not. The version that holds for every $x \neq 0$ is $\log (x^2) = 2 \log |x|$.

# Change-of-Base Formula

$$
\log_b x = \frac{\log_c x}{\log_c b} = \frac{\ln x}{\ln b} = \frac{\log x}{\log b}
$$

This is how to evaluate a logarithm of any base on a calculator, e.g. $\log_3 20 = \frac{\ln 20}{\ln 3} \approx 2.727$.

Consequences of the change-of-base formula:

$$
\begin{align*}
\log_b c &= \frac{1}{\log_c b} \\[0.5em]
\log_{b^n} x &= \frac{1}{n} \log_b x
\end{align*}
$$

# Common Mistakes

>[!caution] None of these are properties of logarithms.
>$$
>\begin{align*}
>\log_b (x + y) &\neq \log_b x + \log_b y \\[0.5em]
>\log_b (x - y) &\neq \log_b x - \log_b y \\[0.5em]
>\frac{\log_b x}{\log_b y} &\neq \log_b \frac{x}{y} \\[0.5em]
>(\log_b x)^r &\neq r \log_b x
>\end{align*}
>$$

---
tags:
  - algebra-2
  - precalc
  - ACT
draft: true
aliases:
  - "018200"
modified: 2025-12-25
---
# Definition of a Logarithm 
Logarithms are a family of functions that are defined to be the inverses of exponential functions. 

> [!NOTE] Definition of a Logarithm as an Inverse Function
> Given the exponential function $f(x) = b^x$ for some positive base $b \neq 1$, we write the inverse function as $f^{-1}(x) = \log_b x$, where $\log_b x$ is read aloud as "log base $b$ of $x$."
>
> Since $b^x$ is positive for every value of $x$, the inverse function $\log_b x$ only accepts positive inputs: **$\log_b x$ is defined only for $x > 0$.**

> [!caution] Undefined logarithms
> The base $b = 1$ is excluded because $1^x = 1$ for every $x$, so the function $f(x) = 1^x$ has no inverse. 
> 
> Furthermore, expressions such as $\log_b 0$ and $\log_b (-4)$ are undefined in the real numbers. Calculators will report an error if you attempt to evaluate them.

## Cancellation Properties
All inverse functions satisfy the relations $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$. In the context of viewing logarithms and exponential functions inverses of each other, this yields two important cancellation laws. 

> [!NOTE] Exponential–Logarithmic Cancellation Laws
> $$\bcancel{\log_b} ( \bcancel{b}^{\hspace{-0.3em} x} ) = x \hspace{0.5cm} \text{and} \hspace{0.5cm} \bcancel{b}^{\hspace{-0.3em} \bcancel{\log_b} x} = x$$

These can be particularly useful means of simplification when applying $\log_b(\cdots)$ to both sides of an equation (taking the log of both sides) or applying $b^{(\cdots)}$ to both sides of an equation (exponentiating both sides).
## Exponential and Logarithmic Form
An equivalent way of thinking about this is as an alternative way of representing the relationship between an arbitrary base $b$, exponent $c$, and a power $a=b^c$. Both of the following forms below are *equivalent*. To help keep things clear, I've written each relationship using the variables $a$, $b$, and $c$, as well as with words.

| Exponential Form                             | Logarithmic Form                                      |
| -------------------------------------------- | ----------------------------------------------------- |
| $a=b^c$                                      | $c = \log_b a$                                        |
| $\text{power} = \text{base}^\text{exponent}$ | $\text{exponent} = \log_{\text{base}} (\text{power})$ |
It is sometimes useful to switch back and forth between these two forms depending on the context of the problem.

## Special Values
Converting basic properties of exponents into logarithmic form provides us with some special logarithm values. Below are some examples for any positive base $b$.

| Exponential Property         | Logarithmic Property        |
| ---------------------------- | --------------------------- |
| $b^0 = 1$                    | $\log_b 1 = 0$              |
| $b^1 = b$                    | $\log_b b = 1$              |
| $b^{-1} = \frac{1}{b}$       | $\log_{b} \frac{1}{b} = -1$ |
| $b^{\frac{1}{2}} = \sqrt{b}$ | $\log_b \sqrt b = \frac 12$ |
| etc.                         | etc.                        |
## Common and Natural Logarithms
Two bases are used so often that they have their own notation.

| Name              | Base                | Notation                   | Where it shows up                                        |
| ----------------- | ------------------- | -------------------------- | -------------------------------------------------------- |
| common logarithm  | $10$                | $\log x$ (no base written) | scientific notation, pH, decibels, the Richter scale     |
| natural logarithm | $e \approx 2.71828$ | $\ln x$                    | calculus, continuous growth and decay, compound interest |

The number $e$ is an irrational constant, much like $\pi$, and its importance only becomes fully clear in calculus. For now, treat $\ln x$ as "log base $e$ of $x$" and note that every rule on this page applies to it unchanged.

> [!caution] What does $\log$ with no base mean?
> In algebra and precalculus classes, on the ACT, and on Desmos and TI calculators, $\log x$ with no base written means $\log_{10} x$. Be aware that some calculus textbooks and most programming languages use $\log x$ to mean $\ln x$ instead. When in doubt, write the base.

## Fundamental Properties

Logarithms have some fundamental properties that can be made use of when simplifying or expanding expressions involving logarithms. 

> [!NOTE] Logarithm Expansion Formulas
> For any base $b > 0$ with $b \neq 1$ and any $x, y > 0$,
> $$\log_b (xy) = \log_b x + \log_b y$$
> $$\log_b \left( \frac{x}{y} \right) = \log_b x - \log_b y$$
> For any base $b > 0$ with $b \neq 1$ and any $x > 0$,
> $$\log_b (x^y) = y \log_b x$$

There also exists an additional property that allows you to express a logarithm of base $b$ in terms of any other base of your choice $c$.

> [!NOTE] Change-of-Base Formula
> $$\log_b x = \frac{\log_c x}{\log_c b}$$

> [!example] Evaluating a logarithm of any base with a calculator
> Every scientific calculator has $\log$ and $\ln$ buttons, and either one can be used with the change-of-base formula to evaluate a logarithm of any base (this was the way that you *had* to do it, in fact, before some of the fancier calculators were developed). For example,
> $$\log_3 20 = \frac{\log 20}{\log 3} = \frac{\ln 20}{\ln 3} = 2.7268\ldots$$
> Desmos also accepts an arbitrary base directly: type `log_3(20)`. Newer TI-84 operating systems offer the same via `MATH` → `logBASE(`.

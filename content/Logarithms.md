---
draft: true
---

# Definition of a Logarithm 
Logarithms are a family of functions that are defined to be the inverses of exponential functions. 

> [!NOTE] Definition of a Logarithm as an Inverse Function
> Given the exponential function $f(x) = b^x$ for some positive base $b$, we write the inverse function as $f^{-1}(x) = \log_b x$, where $\log_b x$ is read aloud as "log base $b$ of $x$."

## Cancellation Properties
All inverse functions satisfy the relations $f(f^{-1}(x)) = 1$ and $f^{-1}(f(x)) = 1$. In the context of viewing logarithms and exponential functions inverses of each other, this yields two important cancellation laws. 

> [!NOTE] Exponential–Logarithmic Cancellation Laws
> $$\bcancel{\log_b} ( \bcancel{b}^{\hspace{-0.3em} x} ) = x \hspace{0.5cm} \text{and} \hspace{0.5cm} \bcancel{b}^{\hspace{-0.3em} \bcancel{\log_b} x} = x$$

These can be particularly useful means simplification when applying $\log_b(\cdots)$ to both sides of an equation (taking the log of both sides) or applying $b^{(\cdots)}$ to both sides of an equation (exponentiating both sides).
## Exponential and Logarithmic Form
An equivalent way of thinking about this is as an alternative way of representing the relationship between an arbitrary base $b$, exponent $c$, and a power $a=b^c$. Both of the following forms below are *equivalent*. To help keep things clear, I've written each relationship using the variables $a$, $b$, and $c$, as well as with words.

| Exponential Form                             | Logarithmic Form                                      |
| -------------------------------------------- | ----------------------------------------------------- |
| $a=b^c$                                      | $c = \log_b a$                                        |
| $\text{power} = \text{base}^\text{exponent}$ | $\text{exponent} = \log_{\text{base}} (\text{power})$ |
It is sometimes useful to switch back and forth between these two forms depending on the context of the origin.

## Special Values
Converting basic properties of exponents into logarithmic form provides us with some special logarithm values. Below are some examples for any positive base $b$.

| Exponential Property         | Logarithmic Property        |
| ---------------------------- | --------------------------- |
| $b^0 = 1$                    | $\log_b 1 = 0$              |
| $b^1 = b$                    | $\log_b b = 1$              |
| $b^{-1} = \frac{1}{b}$       | $\log_{b} \frac{1}{b} = -1$ |
| $b^{\frac{1}{2}} = \sqrt{b}$ | $\log_b \sqrt b = \frac 12$ |
| etc.                         | etc.                        |
## Fundamental Properties

Logarithms have some fundamental properties that can be made use of when simplifying or expanding expressions involving logarithms. 

> [!NOTE] Logarithm Expansion Formulas
> For any $b,x,y > 0$...
> $$\log_b (xy) = \log_b x + \log_b y$$
> $$\log_b \left( \frac{x}{y} \right) = \log_b x - \log_b y$$
> For any $b,x > 0$...
> $$\log_b (x^y) = y \log_b x$$

There also exists an additional property that allows you to express a logarithm of base $b$ in terms of any other base of your choice $c$.

> [!NOTE] Change-of-Base Formula
> $$\log_b x = \frac{\log_c x}{\log_c b}$$

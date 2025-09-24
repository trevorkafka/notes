---
aliases:
  - "356443"
tags:
  - algebra-1
  - "#SAT"
  - "#ACT"
---
This article is dedicated to the precise mathematical meaning of common everyday phrases "$p$ percent larger" and "$p$ percent smaller." Despite these being common ways to make comparisons, even many adults struggle to accurately understand their precise meaning. Standardized exams such as the #SAT and #ACT like to assess this understanding.

# Percentage Increase

>[!note] Percentage Increase
>We say "$A$ is $p$ percent larger than $B$" when
>$$
>A = \left( 1 + \frac{p}{100} \right) B.
>$$

For example, if we say "$A$ is $40\%$ larger than $B$," we mean that $A = (1 + \frac{40}{100})B.$ Put more simply, $A = 1.4B$. To illustrate,

- $A = 140$ is $40\%$ larger than $B = 100$ because $140 = 1.4 \cdot 100$ and
- $A = 50.4$ is $40\%$ larger than $B = 36$ because $50.5 = 1.4 \cdot 36.$

>[!Example] Example
>**Question:** $50$ is $31\%$ larger than what number?
>
>**Solution:** Let the unknown number be $x$. So, 
>$$
>\begin{gather*}
>50 = \left( 1 + \frac{31}{100} \right) x \\
>50 = 1.31 x \\
>x = \frac{50}{1.31} = \boxed{38.1679\ldots}
>\end{gather*}
>$$

# Percentage Decrease

>[!note] Percentage Increase
>We say "$A$ is $p$ percent smaller than $B$" when
>$$
>A = \left( 1 - \frac{p}{100} \right) B.
>$$

For example, if we say "$A$ is $40\%$ smaller than $B$," we mean that $A = (1 - \frac{40}{100})B.$ Put more simply, $A = 0.6 B$. To illustrate,

- $A = 60$ is $40\%$ smaller than $B = 100$ because $60 = 0.6 \cdot 100$ and
- $A = 21.6$ is $40\%$ smaller than $B = 36$ because $21.6 = 0.6 \cdot 36.$

>[!caution] Warning: "percent larger" and "percent smaller" are not reversible
>Note that we saw earlier that $140$ is $40\%$ larger than $100$. However, the reverse is not true. $100$ is *not* $40\%$ smaller than $140.$ This is explored further in the first two problems below.
# Practice Problems

>[!question] Problem 1
>What number is $40\%$ smaller than $140$?

>[!check]- Solution 1
>$(1 - \frac{40}{100}) \cdot 140 = 0.6 \cdot 140 = \boxed{84}$

>[!question] Problem 2
>What percentage smaller is $100$ than $140$?

>[!check]- Solution 2
>Let the unknown percentage be $p$. Now, use the definition of percentage decrease to set up an equation to solve for $p$.
>$$
>\begin{gather*}
>100 = \left(1 - \frac{p}{100} \right) 140 \\
>\frac{100}{140} = 1 - \frac{p}{100} \\
>\frac{p}{100} = 1 - \frac{100}{140} \\
>p = 100 \left( 1 - \frac{100}{140} \right) \approx 28.57
>\end{gather*}
>$$
>So, $100$ is approximately $\boxed{28.57 \%}$ smaller than $140.$

>[!question] Problem 3
>For what value $p$ and for what values of $A$ and $B$ can we find that both of the following statements are simultaneously true?
>
>- $A$ is $p\%$ smaller than $B$
>- $B$ is $p\%$ larger than $A$

>[!check]- Solution 3
>As equations, both of these statements can be written as follows.
>$$
>\begin{cases}
>A = \left( 1 - \frac{p}{100} \right) B \\
>B = \left( 1 + \frac{p}{100} \right) A
>\end{cases}
>$$
>Substitute the second equation into the first to eliminate $B$.
>$$
>\cancel A = \left( 1 - \frac{p}{100} \right) \left( 1 + \frac{p}{100} \right) \cancel A \\[0.5em]
>1 = \left( 1 - \frac{p}{100} \right) \left( 1 + \frac{p}{100} \right) \\[0.5em]
>1 = 1 - \frac{p^2}{10000} \\[0.5em]
>0 = - \frac{p^2}{10000} \\[0.5em]
>\boxed{p = 0}
>$$
>So, evidently, both of these statements can be true only when
>
>- $A$ is $0\%$ smaller than $B$
>- $B$ is $0\%$ larger than $A$
>
>In such a case, *any* values of $A$ and $B$ such that $\boxed{A = B}$ will do.

>[!question] Problem 4
>A T-shirt is on sale at a 15% discount. The original price is therefore what percentage larger than the sale price? Hint: the answer is *not* 15%.

>[!check]- Solution 4
> Let the original price of the T-shirt be $x.$ The discounted price is thus $x(1 - \frac{15}{100}) = .85x$. We seek to determine the value of $p$ such that $x$ is $p$ percent larger than $.85x.$ As an equation, this reads as follows.
>  $$
> \begin{gather*}
> \cancel x = \left(1 + \frac{p}{100} \right) .85 \cancel x \\
> \frac{1}{.85} = 1 + \frac{p}{100} \\
> p = 100 \left( \frac{1}{.85} - 1 \right) = 17.64705882 \ldots
> \end{gather*}
> $$
> Hence, the original price of the shirt is roughly $\boxed{17.65\%}$ larger than the discounted price.
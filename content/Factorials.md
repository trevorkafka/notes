---
tags:
  - "#math-all"
  - "#probability"
aliases:
  - "407954"
---
# Definition for Factorials of Natural Numbers

A factorial of some natural number $n$, written as $n!$ and read as "$n$ factorial," is the product of all natural numbers less than or equal to $n$.

>[!note] Definition of Factorials of Natural Numbers
>If $n$ is a natural number, then
>$$
>n! = n \cdot (n-1) \cdots 4 \cdot 3 \cdot 2 \cdot 1 = \begin{pmatrix} \text{the product of all} \\ \text{natural numbers $\leq n$} \end{pmatrix}.
>$$

Below are the computations of the first few factorials.
$$
\begin{align*}
5! &= 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 120 \\
4! &= 4 \cdot 3 \cdot 2 \cdot 1 = 24 \\
3! &= 3 \cdot 2 \cdot 1 = 6 \\
2! &= 2 \cdot 1 = 2 \\
1! &= 1
\end{align*}
$$
## Permutations of a Set of Elements
One of the most fundamental motivations for defining the factorial $n!$ of a natural number $n$ is to represent the number of permutations (orderings) of $n$ objects in a sequence. For example, the five letters `ABCDE` can be arranged in $5! = 120$ different orderings (`ABCDE`, `EDACB`, `BADCE`, etc).

>[!question] Why?
>In order to count the number of ways to order the five letters `ABCDE`, imagine beginning with five different empty slots that we are going to fill in with letters.
>$$
>\underline{\hspace{1em}}\ \underline{\hspace{1em}}\ \underline{\hspace{1em}}\ \underline{\hspace{1em}}\ \underline{\hspace{1em}}
>$$
>Let's work left to right. There are five different letter options that we can put into the first slot (`A`, `B`, `C`, `D`, and `E`).
>$$
>\underline{(5)}\ \underline{\hspace{1em}}\ \underline{\hspace{1em}}\ \underline{\hspace{1em}}\ \underline{\hspace{1em}}
>$$
>Now that one letter has been used in the first slot, there remain only four possible letters that can go into the second slot. Similarly, only three letter options remain for the third slot and so on.
>$$
>\underline{(5)}\ \underline{(4)}\ \underline{(3)}\ \underline{(2)}\ \underline{(1)}
>$$
>

# Definition of $0!$

The above definition does not provide for a straightforward way to reason about the value of $0!$, though needing to compute this value is not uncommon, particularly when solving [[Probability through Counting|problems in probability]], computing [[Combinations and Permutations|combinations and permutations]], or constructing power series.

>[!note] Definition of $0!$
>$$
>0! = 1
>$$

>[!question]- Why?
> Based on the first few factorials listed above, we notice the following pattern.
> $$
> \begin{align*}
> 4! &= 5! \div 5 \\
> 3! &= 4! \div 4 \\
> 2! &= 3! \div 3 \\
> 1! &= 2! \div 2
> \end{align*}
> $$
> Thus, the continuation of this pattern suggests that $0! = 1! \div 1 = 1$. This result works in expected ways among a variety of formulas in which the notion of a factorial is used, so we take $0! = 1$ as the definition of $0!.$

Including this definition for $0!$ now provides us with an understanding of how to compute the factorial of any nonnegative integer.
# Definition for other numbers

For calculus students who are familiar with improper integrals, the factorial can be extended to other numbers (including fractional numbers, irrational numbers, and complex numbers) via an integral.

>[!note] Integral Definition of the Factorial for any value of $n$
>$$
>n! = \int_0^\infty x^n e^{-x}\ dx
>$$

(In textbooks, the Gamma function is often used instead of the above definition, but I'm omitting that explanation here because there is an annoying subtle difference between the Gamma function and the factorial that in my opinion has no practical value.)

I strongly recommend trying to verify the following facts that follow from this definition.
- $0! = 1$
- $(n+1)! = (n+1) \cdot n!$
These two facts together are what ensure that the definition above agrees with the definition for factorials of nonnegative integers mentioned earlier in this article. This definition provides the same values that calculators give for factorials of nonnegative integers (such as Desmos and TI calculators).

**Miscellaneous remarks:**
- This integral definition does yield some unexpected results, such as the famous factorial of $\frac{1}{2}$, which is related to $\pi$.
  $$
  \left( \frac{1}{2} \right)! = \frac{\sqrt \pi}{2} = 0.8862269255\ldots
  $$
- This integral does not converge for any negative integer $n$, which in general means that $n!$ is undefined for any negative integer $n$. When graphing $y = x!$, one can see vertical asymptotes at all of the negative integer values of $x$, which reflects this fact.
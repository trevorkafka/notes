---
aliases:
  - "070892"
tags:
  - algebra-2
  - precalc
  - "#SAT"
---
The **remainder theorem** is a theorem that looks incredibly simple but has profound time-saving implications in the context of the analysis of polynomials and their factors. It also typically appears in at least one question on the #SAT exam.

>[!note] Remainder Theorem
>Let $p(x)$ be a polynomial and $a$ be a constant. The remainder of the division $p(x) \div (x - a)$ is given by $p(a).$

>[!question]- Why?
>To create an analogy, recall the way that you computed quotients and remainders in elementary school. For example, $13 \div 3 = 4 \text{ R} 1$ (the quotient of $13 \div 3$ is $4$ with a remainder of $1$). The reason why this is the correct result is because
>$$
>13 = 4 \cdot 3 + 1
>$$
>which can be thought of as 
>$$
>\text{divisor} = (\text{quotient}) \cdot (\text{dividend}) + \text{remainder}.
>$$
>All divisions can be formatted in this way, including polynomial divisions. So, in our context here, the quotient $q(x)$ and remainder $r$ of the division $p(x) \div (x -a)$ is related to $p(x)$ and $x-a$ as follows.
>$$
>p(x) = q(x) \cdot (x-a) + r
>$$
>Plugging in $x  = a$ gives $p(a) = r,$ proving the theorem.

The following is an important consequence of the remainder theorem.

>[!note] 
>Let $p(x)$ be a polynomial and $a$ be a constant. If $p(a) = 0$, then $x - a$ is a factor of $p(x)$.

>[!question]- Why?
>According to the remainder theorem, the remainder of the division $p(x) \div (x-a)$ is $p(a) = 0$. Since the remainder of the division is zero, we must have that $x - a$ is a factor of $p(x)$.
# Practice Problems

Do not use polynomial division to solve any of the following problems (the remainder theorem will be much, much quicker).

>[!question] Problem
>What is the remainder of $x^{10} + x -1$ when divided by $x + 1$?

>[!check]- Solution
>Let $p(x) = x^{10} + x -1.$ Since $x + 1 = x - (-1),$ the remainder is
>$$
>p(-1) = (-1)^{10} + (-1) - 1 = 1 - 1 - 1 = \boxed{-1}.
>$$

>[!question] Problem
>The remainder when $f(x)$ is divided by $x - 2$ is $7$. What is $f(2)$?

>[!check]- Solution
>By the remainder theorem, $f(2)$ is the remainder of the division $f(x) \div (x - 2)$, so clearly $f(2) = \boxed{7}.$

>[!question] Problem
>If $f(x) = 2x^3 + kx^2 - 5x + 4$ has a factor $x + 3$, what is the value of $k$?

>[!check]- Solution
>If $x + 3$ is a factor of $f(x)$, then we must have that $f(-3) = 0.$
>$$
>\begin{gather*}
>f(-3) = 0 \\
>2(-3)^3 + k(-3)^2 - 5(-3) + 4 = 0 \\
>9k - 35 = 0 \\
>\boxed{k = \frac{35}{9}}
>\end{gather*}
>$$
>

>[!question] Problem
>When $f(x)$ is divided by $x - 5,$ the remainder is $0.$ Which of the following must be true?
>
>(A) $f(0) = 5$
>
>(B) $f(5) = 0$
>
>(C) $f(5) = 5$
>
>(D) $f(x)$ has degree $1$

>[!check]- Solution
>The correct answer is $\boxed{(B) f(5) = 0}.$ By the remainder theorem, the remainder of the division $f(x) \div (x - 5)$ is $f(5)$, which is known to be zero.

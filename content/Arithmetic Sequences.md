---
tags:
  - algebra-2
aliases:
  - "583126"
---
An **arithmetic** sequence is a sequence of numbers such that the difference between every term and the term that came before it is the same. Below are some examples of arithmetic sequences and their **common differences**.

| Arithmetic Sequence     | Common Difference $d$ |
| ----------------------- | --------------------- |
| $1, 2, 3, 4, \ldots$    | $1$                   |
| $3, 13, 23, 33, \ldots$ | $10$                  |
| $16, 9, 2, -5,\ldots$   | $-7$                  |
| $5, 5, 5, \ldots$       | $0$                   |

The variable $d$ is often used to denote the common difference in an arithmetic sequence. Take note that by the examples above we can see that
- If $d>0,$ then the sequence is increasing,
- if $d<0,$ then the sequence is decreasing, and
- if $d = 0,$ then the sequence remains constant.

The formal definition of an arithmetic sequence is provided below.

>[!note] Arithmetic Sequence
>An arithmetic sequence $(a_n)$ is a sequence such that there exists a value of $d$, called the *common difference*, such that for all values of $n$, we have
>$$
>a_{n+1} = a_n + d.
>$$

The equation $a_{n+1} = a_n + d$ communicates that given a particular term in the sequence $a_n$ you just need to add $d$ to its value in order to get the next term in the sequence $a_{n+1}$.

>[!caution] Caution
>Please note that some teachers teach sequences with the first term beginning with $a_1$ (so, the first few terms would be $a_1, a_2, a_3,$ etc.) and others teach with the first term beginning with $a_0$ (so, the first few terms would be $a_0, a_1, a_2,$ etc). In this article, we will use $a_1$ as the first term of the sequence. This is relevant for the sections that follow.

# Explicit Formula for an Arithmetic Sequences

>[!note] Explicit Formula for an Arithmetic Sequence
>The value of the $k$th term $a_k$ and the common difference $d$ of an arithmetic sequence are related to the value fo the $n$th term $a_n$ via the formula below. 
>$$a_n = a_k + d(n - k)$$

(The values of $k$ and $n$ are entirely up to you. Often, $k = 1$ is used.)

>[!question] Problem 1
> The first term of an arithmetic sequence is $10$ and the common difference is $4$. Write the explicit formula.

>[!check]- Solution 1
>We are given $a_1 = 10$ (so $k = 1$) and $d = 4$. Plugging these into the boxed formula above gives 
>$$
>\begin{gather*}
>a_n = a_1 + d(n-1) \\
>\boxed{a_n = 10 + 4(n-1)}.
>\end{gather*}
>$$

>[!question] Problem 2
>The $51$st term of a sequence has the value $1094$ and the common difference is $-3$. Which term has the value $491$?
>

>[!check]- Solution 2
>We are given that $a_{51} = 1094$ (so $k = 51$) and $d = -3$. We seek to find the value of $n$ such that $a_n = 491.$ Let's plug our information into the explicit formula and solve for $n.$
>$$
>\begin{gather*}
>a_n = a_{51} + d(n-51) \\
>491 = 1094 + -3 (n - 51) \\
>-603 = -3 (n - 51) & \text{subtract 1094}\\
>201 = n - 51 & \text{divide by $-3$} \\
>n = 252 & \text{add 51}
>\end{gather*}
>$$
>So, it's the $\boxed{252\text{nd term}}$ that has the value $491.$
# Recursive Formula for an Arithmetic Sequence

>[!note] Recursive Formula for an Arithmetic Sequence
>If one provides together the first term of a sequence as well as the rule for producing subsequent terms (shown earlier on this page), then these two pieces of information together are referred to as the recursive formula for an arithmetic sequence.
>$$
>\begin{cases}
>a_1 = \text{(first term)} \\ a_n = a_{n-1} + d
>\end{cases}
>$$

>[!question] Problem 1
>Write the recursive formula for the sequence $1, 2, 3, \ldots.$

>[!check]- Solution 1
>The first term of this sequence is $a_1 = 1$ and the common difference is $d = 1$, so the recursive formula is as follows.
>$$
>\boxed{
>\begin{cases}
>a_1 = 1 \\ a_n = a_{n-1} + 1
>\end{cases}
>}
>$$

>[!question] Problem 2
>Write the recursive formula for the arithmetic sequence given by the explicit formula $a_n = -2 + 5(n-1)$.

>[!check]- Solution 2
>In this sequence, the first term is $a_1 = -2$ and the common difference is $5,$ so the explicit formula is as follows.
>$$
>\boxed{
>\begin{cases}
>a_1 = -2 \\
>a_n = a_{n-1} + 5
>\end{cases}
>}
>$$
# Sum of Terms of an Arithmetic Sequence

>[!note] Sum of Terms of an Arithmetic Sequence
>A formula for the sum of *all $N$ terms* in an arithmetic sequence between *and including* the terms $a_k$ and $a_n$ is given below.
>$$
>\underbrace{a_k + \cdots + a_n}_\text{$N$ terms} = \frac{N}{2}(a_k + a_n)
>$$

Note: the expression $\frac{N}{2} (a_k + a_n)$ can be equivalently thought of as
$$
N \cdot \begin{pmatrix} \text{average of first} \\ \text{and last terms} \end{pmatrix},
$$
which may be easier to remember mentally.

The number of terms between $a_k$ and $a_n$ can be computed as $N = n - k + 1.$ (Why?) I don't necessarily recommend memorizing this formula for $N,$ though.

>[!question] Problem 1
>What is the sum of all integers from $1$ to $100$?

>[!check]- Solution 1
>The sequence consisting of all integers from $1$ to $100$ is an arithmetic sequence $1, 2, 3, \ldots, 100$ that contains $100$ terms with a common difference of $1.$ The starting term is $a_k = 1$ and the ending term is $a_n = 100$. The sum is thus
>$$1 + 2 + 3 + \cdots + 100 = \frac{100}{2}(1 + 100) = \boxed{5050}.$$

>[!question] Problem 2
>Determine the value of the sum of the terms in the sequence $-5, -3, -1, \ldots, 53$.

>[!check]- Solution 2
>First, let's determine the number of terms in the sequence. We can construct first an explicit formula for this sequence (using $a_1 = -5$ and $d = 2$)
>$$
>a_N = -5 + 2(N-1)
>$$
>and substitute $a_N = 53$ to determine the number of terms in the sequence $N.$
>$$
>\begin{gather*}
>53 = -5 + 2(N-1) \\
>58 = 2 (N-1) & \text{add 2} \\
>28 = N - 1 & \text{divide by 2} \\
>N = 29 & \text{add 1}
>\end{gather*}
>$$ 
>Now, use the formula for the sum of the terms of an arithmetic sequence with $N = 29$ in order to determine the sum.
>$$
>(-5) + (-3) + (-1) + \cdots + 53 = \frac{29}{2} (-5 + 53) = \boxed{696}
>$$
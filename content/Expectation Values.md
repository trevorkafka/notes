---
tags:
  - probability
  - algebra-2
aliases:
---
In probability, we often have events that have a variety of possible numerical outcomes. For example, when a die is rolled, the possible numerical outcomes are the integers $1$ through $6.$ When certain games are played, it is possible to obtain certain scores each with potentially different probabilities. A quantity called the **expectation value** can be used to determine what the average output value might be after many, many trials. 

The expectation value may not be a value that could be obtained through any single trial, but does represent an average value that would be obtained, which is dependent on both the values themselves as well as the probabilities with which each of the values might be obtained. 

Below, I am providing the definition of an expectation value, but this may not be fully clear until you have looked at one of the examples that follow.

>[!note] Definition of an Expectation Value
> 
> Consider an event that has particular outcome values $n_1, n_2, n_3, \ldots$ each with associated probabilities $P(n_1), P(n_2), P(n_3), \ldots$, then the **expectation value** of the event $\langle n \rangle$ is given as follows.
> $$
> \langle n \rangle = n_1 \cdot P(n_1) + n_2 P(n_2) + n_3 P(n_3) + \cdots
> $$
> If there are $k$ different output values, then this can also be written more compactly by means of summation notation.
> $$
> \langle n \rangle = \sum_{i = 1}^k n_i P(n_i)
> $$

>[!example] Example
> 
> Consider a game with possible scores and probabilities of each score as given by the table shown below.
> 
> | Score $n$ | Probability $P(n)$ |
> | --------- | ------------------ |
> | 1         | 10%                |
> | 2         | 15%                |
> | 3         | 20%                |
> | 4         | 25%                |
> | 5         | 30%                |
> 
> The expected value of $n$ or **expected score** in this context would be given by
> $$
> \langle n \rangle = 1 \cdot 0.10 + 2 \cdot 0.15 + 3 \cdot 0.20 + 4 \cdot 0.25 + 5 \cdot 0.30 = \boxed{3.5}.
> $$
> Despite $3$ being the "middle score" out of the possible attainable scores, the expectation value here is slightly larger than $3,$ reflecting the fact that higher scores are more likely to be obtained when playing this game.

>[!question]- Why is the expectation value defined in this way?
> 
> Let's imagine that we played $20$ rounds of the game described in the example above. Using the given probabilities, on average we would expect to get scores according to the table below.
> 
> | Score $n$ | Number of games with this score |
> | --------- | ------------------------------- |
> | 1         | $20 \cdot 0.10 = 2$             |
> | 2         | $20 \cdot 0.15 = 3$             |
> | 3         | $20 \cdot 0.20 = 4$             |
> | 4         | $20 \cdot 0.25 = 5$             |
> | 5         | $20 \cdot 0.30 = 6$             |
> 
> In order to compute the average score we need to take the average across all $20$ games. This average score across the $20$ games is what we are calling the expectation score $\langle n \rangle.$
> $$
> \begin{align*}
> \langle n \rangle &= \frac{1 + 1 + 2 + 2 + 2 + 3 + 3 + 3 + 3 + 4 + 4 + 4 + 4 + 4 + 5 + 5 + 5 + 5 + 5 + 5}{20} \\
> &= 3.5
> \end{align*}
> $$
> This value matches the expectation value we obtained via the simpler formula given in the definition box. To see why this formula works, let's reformat the large fraction computed above in the following maner.
> $$
> \begin{align*}
> \langle n \rangle &= \frac{(1 + 1) + (2 + 2 + 2) + (3 + 3 + 3 + 3) + (4 + 4 + 4 + 4 + 4) + (5 + 5 + 5 + 5 + 5 + 5)}{20} \\
> &= \frac{2 \cdot 1 + 3 \cdot 2 + 4 \cdot 3 + 5 \cdot 4 + 6 \cdot 5}{20} \\
> &= \frac{2}{20} \cdot 1 + \frac{3}{20} \cdot 2 + \frac{4}{20} \cdot 3 + \frac{5}{20} \cdot 4 + \frac{6}{20} \cdot 5 \\[1em]
> &= 0.10 \cdot 1 + 0.15 \cdot 2 + 0.20 \cdot 3 + 0.25 \cdot 4 + 0.30 \cdot 5 \ \checkmark
> \end{align*}
> $$
> This last line matches the expectation value formula used earlier, so hence both approaches yield the same result.

## Practice Problem

>[!question] Problem
>You roll a standard six-sided die and flip a coin. If the coin lands on heads, then the value shown on the die is your score. If the coin lands tails, then your score is
>- *double* the value shown on the die if the value shown on the die is even or
>- zero if the value shown on the die is odd.
>
>What is the expected score obtained?

>[!check]- Solution
> Below are the possible scores based on the given description.
> 
> | Coin  | Die | Score | Probability    |
> | ----- | --- | ----- | -------------- |
> | Heads | $1$ | $1$   | $\frac{1}{12}$ |
> | Heads | $2$ | $2$   | $\frac{1}{12}$ |
> | Heads | $3$ | $3$   | $\frac{1}{12}$ |
> | Heads | $4$ | $4$   | $\frac{1}{12}$ |
> | Heads | $5$ | $5$   | $\frac{1}{12}$ |
> | Heads | $6$ | $6$   | $\frac{1}{12}$ |
> | Tails | $1$ | $0$   | $\frac{1}{12}$ |
> | Tails | $2$ | $4$   | $\frac{1}{12}$ |
> | Tails | $3$ | $0$   | $\frac{1}{12}$ |
> | Tails | $4$ | $8$   | $\frac{1}{12}$ |
> | Tails | $5$ | $0$   | $\frac{1}{12}$ |
> | Tails | $6$ | $12$  | $\frac{1}{12}$ |
> 
> This can be summarized through the following table of possible scores and associated probabilities. 
> 
> | Score | Probability    |
> | ----- | -------------- |
> | $0$   | $\frac{3}{12}$ |
> | $1$   | $\frac{1}{12}$ |
> | $2$   | $\frac{1}{12}$ |
> | $3$   | $\frac{1}{12}$ |
> | $4$   | $\frac{2}{12}$ |
> | $5$   | $\frac{1}{12}$ |
> | $6$   | $\frac{1}{12}$ |
> | $8$   | $\frac{1}{12}$ |
> | $12$  | $\frac{1}{12}$ |
>
> From here, we can compute the expected score.
>$$
>\begin{align*}
>\langle \text{score} \rangle &= 0 \cdot \frac{3}{12} + 1 \cdot \frac{1}{12} + 2 \cdot \frac{1}{12} + 3 \cdot \frac{1}{12} + 4 \cdot \frac{2}{12} + 5 \cdot \frac{1}{12} + 6 \cdot \frac{1}{12} + 8 \cdot \frac{1}{12} + 12 \cdot \frac{1}{12} \\
>&= \boxed{3.75}
>\end{align*}
>$$
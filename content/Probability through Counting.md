---
tags:
  - probability
  - problem-solving
  - math-all
aliases:
  - "117672"
---


**Lots of problems in probability are really problems in creative counting.** This is best seen through examples, so this page contains a variety of examples for you to browse. 

I suggest looking through some solutions on your own to get a sense of how to solve these sorts of problems, but also saving some of these for you to attempt independently.

There are often many ways to solve these sorts of problems. By no means do you have to use the same solution strategies as the ones listed here, but you should ultimately get the same final answer regardless of which method you use.

>[!question] Problem 1
> If number is chosen at random from 0–999, what is the probability that the number chosen contains an **odd number of odd digits**?

>[!check]- Solution
> First, let's take note of some key facts.
> - For the digits 0–9, there are five even digits (0, 2, 4, 6, and 8) and five odd digits (1, 3, 5, 7, and 9). 
> - For any given three digit number, an odd number of the three digits will be odd if either
> 	- exactly one of the three digits are odd or
> 	- all of the three digits are odd.
> - **Important:** the numbers 0–999 can be all regarded as three-digit numbers if we allow leading zeroes (this means that we write the numbers as 000, 001, 002, ..., 998, 999).
> From this information, we can explore two cases to determine the number of numbers 000–999 that have an odd number of odd digits.
> 
> *Case 1: only one of the three digits are odd*
> In this case, the odd digit will appear in
> - the first position,
> - the second position, or
> - the third position.
> 
> Let's first tackle the case where the odd digit appears in the first position. There are five possibilities for this first digit. The remaining digits will be even and hence each also have five possibilities each. Hence, the number of three-digit numbers with an odd digit in the first position only is $5^3 = 125$. Through similar reasoning, we can determine that the number of numbers with only one odd digit in either the second position or the third position are each also $5^3 = 125$. Hence, the number of numbers in case 1 is $125+125+125 = 375.$
> 
>*Case 2: all three digits are odd*
>In this situation, each digit has give possibilities. So, the number of three-digit numbers wherein all the digits are odd is also $5^3 = 125$. This covers case 2.
>
>The total number of numbers from case 1 and case 2 are $375+125 = 500$. Since there are $1000$ numbers in the range 0–999, the probability of choosing a number from either case 1 or case 2 is hence 
>
>$$
>P = \frac{500}{1000} = \boxed{\frac{1}{2} = 50\%}.
>$$

>[!question] Problem 2
>If number is chosen at random from 0–999, what is the probability that the number chosen contains **three distinct digits**?

>[!check]- Solution
> Similar to the previous problem, let's regard all numbers in the range 0–999 as being three digit numbers by allowing leading zeroes (000, 001, 002, ..., 998, 999). Going left to right, digit by digit, we have 10 possibilities for the first digit. Once this digit is chosen and since we are restricted to three-digit numbers that don't feature repetitions of a single digit, we have nine choices for the second digit and then by the same reasoning eight choices for the third digit. This means overall that we can construct $10 \cdot 9 \cdot 8 = 720$ such numbers. Hence, the probability is 
> 
> $$
> P = \frac{720}{1000} = \boxed{\frac{18}{25} = 72\%}.
> $$

>[!question] Problem 3  
> A 5-letter string is chosen uniformly at random from all strings formed using the 26 letters of the alphabet **with no repeated letters**. What is the probability that **exactly one of the letters is a vowel**? (Use the five vowels `a`, `e`, `i`, `o`, and `u` for this problem.)

>[!check]- Solution
> Let's begin by first determining the number of 5-letter strings that can be formed with no repeated letters, without regard for the number of vowels that the string has. There are 26 possibilities for the first letter in the string. Since the second letter in the string is not allowed to be the same as the first letter in the string, this second letter is left with 25 possibilities. Continuing in this way, the total number of strings is $26 \cdot 25 \cdot 24 \cdot 23 \cdot 22 = 7893600$.
> 
> Let's now focus on strings that have only exactly one vowel. There are five cases:
> - Case 1: the vowel appears in the first position
> - Case 2: the vowel appears in the second position
> - ...
> - Case 5: the vowel appears in the fifth position
> 
> Focusing first only on Case 1, we have five possibilities for the first letter. The second letter cannot be a vowel, so there are 21 possibilities for this second letter. The third letter cannot match the second so there are 20 possibilities. Continuing this way, the total number of strings for Case 1 is $5 \cdot 21 \cdot 20 \cdot 19 \cdot 18 = 718200$. 
> 
> Using similar reasoning, one can determine that the number of strings in Cases 2–5 are each also $7182000$. Hence, the number of strings with exactly one vowel is $5\cdot 718200 = 3591000$.
> 
> The probability is thus 
> $$
> P = \frac{3591000}{7893600} = \boxed{ \frac{5985}{13156} \approx 45.49\%}.
> $$

>[!question] Problem 4
> A group of 7 people is randomly divided into **one team of 3 and one team of 4**. What is the probability that Alice and Bob, two of the people in the original group of seven, **end up on different teams**?

>[!check]- Solution
>Let's first determine the number of ways to divide the teams. Note that once the team of 3 is chosen, the team of 4 is uniquely determined. So, if we determine the number of ways to choose the team of 3, that resulting number is hence also the number of ways to divide the 7 people into one team of 3 and one team of 4. 
>
>When choosing the team of 3, there are 7 choices of people for the first person, 6 choices of people for the second person, and 5 choices of people for the last person. However, the people chosen in this team can be reordered without affecting the team itself. Since three people can be arranged into $3 \cdot 2 \cdot 1 = 6$ orderings, this means that we are sextuple-counting each of the teams under this strategy. Hence, there are $\frac{7 \cdot 6 \cdot 5}{6} = 35$ teams of 3 we can construct. This means that $35$ is also the number of ways we can divide the 7-person team into a team of 3 and a team of 4.
>
>>[!note] Note
>>
>>The value that we just computed is also known as a [[Combinations and Permutations|combination]], specifically it's "7 choose 3," written in math either as $\binom{7}{3}$ or ${}_7C_3$. Using the formula for combinations, one could have computed 
>>$$
>>\binom{7}{3} = {}_7C_3 = \frac{7!}{(7-3)! \cdot 3!} = 35.
>>$$
>
>Now, let's figure out how many ways there are to divide up the teams such that Alice and Bob are on different teams. There are two cases.
>- Case 1: Alice is in the group of 3 and Bob is in the group of 4.
>- Case 2: Bob is in the group of 3 and Alice is in the group of 4.
>
>Let's focus first on Case 1. Here, Alice is in the group of 3. Once the other two people in Alice's group is established, then Bob's group immediately is determined. The other 2 people in Alice's group of course can be neither Alice or Bob so there are only 5 choices of people to join Alice's group of 3. The number of ways for an additional 2 people to join Alice in her group of 3 is hence $\binom 5 2 = {}_5C_2 = \frac{5!}{(5-2)! \cdot 2!} = \frac{5 \cdot 4}{2} = 10$, where I have used the formula for combinations as described in the box above.
>
>For Case 2, the same logic can be applied but with Alice and Bob swapped, so in this case there are also $10$ possible ways to form the groups. 
>
>This yields a grand total of $10 + 10 = 20$ ways to form a group of 3 and a group of 4 with Alice and Bob in different groups. From this, the probability can now be computed. 
>$$
>P = \frac{20}{35} = \boxed{\frac{4}{7} \approx 57.14\%}
>$$

>[!question]  Problem 5
> Three balls are randomly drawn without replacement from a bag containing 4 red balls, 3 blue balls, and 2 green balls. What is the probability that the sample contains **balls of exactly two different colors**?

>[!check]- Solution
>Let's begin by determining the number of ways to pull balls from the bag. There are nine balls in total and each [[Combinations and Permutations|combination]] of three balls removed from the bag occurs with equal probability. The number of ways to do this is "9 choose 3," which can be computed via the formula for combinations as follows. 
>$$
>\binom 9 3 = {}_9C_3 = \frac{9!}{(9-3)! \cdot 3!} = 84
>$$
>
>Now, we have three cases. 
>- Case 1: the two matching balls in the chosen set of three balls are red
>- Case 2: the two matching balls in the chosen set of three balls are blue
>- Case 3: the two matching balls in the chosen set of three balls are green
>
>Let's focus on the Case 1. If two red balls are chosen from the bag, then seven balls remain, of which five are not red. This means that there are $5$ different balls that can be chosen to be the third ball in the set. 
>
>Moving on to the Case 2, if two blue balls are chosen from the bag, then seven balls remain, of which six are not blue. This means that there are $6$ different balls that can be chosen to be the third ball in the set.
>
>Finally in Case 3, if two green balls are chosen from the bag, then seven balls remain, of which *all* are not green. This means that there are $7$ different balls that can be chosen to be the third ball in the set.
>
>The total number of ways, then, to choose the balls such that exactly two of the balls match is hence $5 + 6 + 7 = 18.$ From this, the probability can then be computed.
>$$
>P = \frac{18}{84} = \boxed{\frac{3}{14} \approx 21.43\%}
>$$

>[!question]  Problem 6
> Two dice are rolled. What is the probability that the **sum is at least 10 or at least one die shows a 6**?

>[!check]- Solution
>For a problem like this, it may be easiest to visualize all of the die tosses in a table form. Here, each $(a,b)$ pair represents a possible toss of the dice, with $a$ representing the value shown on the first die and $b$ representing the value shown on the second die. Each entry in the table has an equal liklihood of being rolled.
> 
> I've bolded all entries where the sum is at least 10 or at least one die shows a 6.
> 
> <table style="margin:auto">
>   <tr>
>     <td>(1,1)</td>
>     <td>(1,2)</td>
>     <td>(1,3)</td>
>     <td>(1,4)</td>
>     <td>(1,5)</td>
>     <td><strong>(1,6)</strong></td>
>   </tr>
>   <tr>
>     <td>(2,1)</td>
>     <td>(2,2)</td>
>     <td>(2,3)</td>
>     <td>(2,4)</td>
>     <td>(2,5)</td>
>     <td><strong>(2,6)</strong></td>
>   </tr>
>   <tr>
>     <td>(3,1)</td>
>     <td>(3,2)</td>
>     <td>(3,3)</td>
>     <td>(3,4)</td>
>     <td>(3,5)</td>
>     <td><strong>(3,6)</strong></td>
>   </tr>
>   <tr>
>     <td>(4,1)</td>
>     <td>(4,2)</td>
>     <td>(4,3)</td>
>     <td>(4,4)</td>
>     <td>(4,5)</td>
>     <td><strong>(4,6)</strong></td>
>   </tr>
>   <tr>
>     <td>(5,1)</td>
>     <td>(5,2)</td>
>     <td>(5,3)</td>
>     <td>(5,4)</td>
>     <td><strong>(5,5)</strong></td>
>     <td><strong>(5,6)</strong></td>
>   </tr>
>   <tr>
>     <td><strong>(6,1)</strong></td>
>     <td><strong>(6,2)</strong></td>
>     <td><strong>(6,3)</strong></td>
>     <td><strong>(6,4)</strong></td>
>     <td><strong>(6,5)</strong></td>
>     <td><strong>(6,6)</strong></td>
>   </tr>
> </table>
> 
> 
> Based on the table, we can see that $12$ out of $36$ entries are bolded. Thus, the probability is 
> $$
> P = \frac{12}{36} = \boxed{\frac{1}{3} \approx 33.33\%.}
> $$

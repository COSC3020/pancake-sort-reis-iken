[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/-m0g1A8z)
# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

**MY ANSWER:**

In terms of comparisons, the asymptotic runtime of the algorithm is $\Theta(n^2)$ considering the outer loop runs for n iterations of the n-1 iterations of the inner loop.

In terms of flips, the asymptotic expression should also be $\Theta(n^2)$ as the flip function is referenced for n iterations of the outer loop, and the flip function itself (the slicing and reversing) takes n time.

Lastly, in terms of how many flips actually happen, we know that for each iteration of the outer loop, we call the flip function twice - once to move the maximum element to the top, and then once to move the maximum element to its final position - the top of the sorted portion.

But we do know that the last element will be sorted, since every other element is sorted.

Thus, we perform 2n-1 flips.

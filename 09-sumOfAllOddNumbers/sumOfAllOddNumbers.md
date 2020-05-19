# 09-sumOfAllOddNumbers

For this exercise (`sumOfAllOddNumbers.js`), you are tasked to write out solution code for a function titled `sumOfAllOddNumbers(nums)`. This function will take in one argument, an array of numbers titled `nums`. The business logic you provide should allow for tallying up all of the numbers in `nums` that are odd-numbers and reporting that amount.

_In other words_:

```
GIVEN: [0,1,2,3,4,5,6,7] as `nums`
WHEN: Invoking sumOfAllOddNumbers([0,1,2,3,4,5,6,7])
THEN: We output 4
```

```js
function sumOfAllOddNumbers(nums) {
  // Insert code here;
}

sumOfAllOddNumbers([0,1,2,3,4,5,6,7]) -----> 4;
```

_An additional example_:

```
GIVEN: [2,4,6,7,8,9,10] as `nums`
WHEN: Invoking sumOfAllOddNumbers([2,4,6,7,8,9,10])
THEN: We output 2
```

```js
function sumOfAllOddNumbers(nums) {
  // Insert code here;
}

sumOfAllOddNumbers([2,4,6,7,8,9,10]) -----> 2;
```

The test suite (`sumOfAllOddNumbers.test.js`) is ultimately designed to verify four core features and expectations:

1) The value of your output should be of the `number` (finite) data type 
2) The value of your output should correspond to the amount of values in the input array `nums` that are odd
3) In defending against hard-coding, any and all well-formed arguments will lead to the accurate amount of values in the input array `nums` that are odd (**note**: see the respective test suite for more information)
4) The input array `nums` is not mutated
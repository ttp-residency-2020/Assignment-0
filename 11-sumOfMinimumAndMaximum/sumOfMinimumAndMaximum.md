# 11-sumOfMinimumAndMaximum

For this exercise (`sumOfMinimumAndMaximum.js`), you are tasked to write out solution code for a function titled `sumOfMinimumAndMaximum(nums)`. This function will take in one argument, which is an array of numbers titled `nums`. The business logic you provide should allow for reporting the sum of the lowest value and the highest value in `nums`.

_In other words_:

```
GIVEN: [2,2] as `nums`
WHEN: Invoking sumOfMinimumAndMaximum([2,2])
THEN: We output 4
```

```js
function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
}

sumOfMinimumAndMaximum([2,2]) -----> 4;
```

_An additional example_:

```
GIVEN: [2,4,5,6,23] as `nums`
WHEN: Invoking sumOfMinimumAndMaximum([2,4,5,6,23])
THEN: We output 25
```

```js
function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
}

sumOfMinimumAndMaximum([2,4,5,6,23]) -----> 5;
```

The test suite (`sumOfMinimumAndMaximum.test.js`) is ultimately designed to verify four core features and expectations:

1) The value of your output should be of the `number` (finite) data type 
2) The value of your output should correspond to the sum of the lowest value and the highest value
3) In defending against hard-coding, any and all well-formed arguments will lead to the sum of the lowest value and the highest value (**note**: see the respective test suite for more information)
4) The input array `nums` is not mutated
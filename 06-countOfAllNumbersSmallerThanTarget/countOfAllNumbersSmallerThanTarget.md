# 06-countOfAllNumbersSmallerThanTarget

For this exercise (`countOfAllNumbersSmallerThanTarget.js`), you are tasked to write out solution code for a function titled `countOfAllNumbersSmallerThanTarget(nums, target)`. This function will take in two arguments. The first argument will be `nums` which is an object that is an array of numbers. The second argument will be `target` which is of the `number` data type. The business logic you provide should allow for tallying up all of the numbers in `nums` that are less than the `target` value and reporting that amount.

_In other words_:

```
GIVEN: [1,2,3,4,5] as `nums` and 9 as `target`
WHEN: Invoking countOfAllNumbersSmallerThanTarget([1,2,3,4,5], 9)
THEN: We output 5
```

```js
function countOfAllNumbersSmallerThanTarget(nums) {
  // Insert code here;
}

countOfAllNumbersSmallerThanTarget([1,2,3,4,5], 9) -----> 5;
```

_An additional example_:

```
GIVEN: [1,5,3,2,20,18] as `nums` and 18 as `target`
WHEN: Invoking countOfAllNumbersSmallerThanTarget([1,5,3,2,20,18], 18)
THEN: We output 4
```

```js
function countOfAllNumbersSmallerThanTarget(nums) {
  // Insert code here;
}

countOfAllNumbersSmallerThanTarget([1,5,3,2,20,18], 18) -----> 4;
```

The test suite (`countOfAllNumbersSmallerThanTarget.test.js`) is ultimately designed to verify four core features and expectations:

1) The value of your output should be of the `number` (finite) data type 
2) The value of your output should correspond to the amount of values in the input array `nums` that are less than the `target` value
3) In defending against hard-coding, any and all well-formed arguments will lead to the accurate amount of values in the input array `nums` that are less than the `target` value (**note**: see the respective test suite for more information)
4) The input array `nums` is not mutated
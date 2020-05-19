# 07-countOfAllIndexMatchingNumbers

For this exercise (`countOfAllIndexMatchingNumbers.js`), you are tasked to write out solution code for a function titled `countOfAllIndexMatchingNumbers(nums)`. This function will take in one argument, an array of numbers titled `nums`. The business logic you provide should allow for tallying up all of the numbers in `nums` that are located at an index of equal value. Put another way, if the location (index) of an element (number) is identical to the element, then include that in the total count. 

_In other words_:

```
GIVEN: [0,1,2,3,4] as `nums`
WHEN: Invoking countOfAllIndexMatchingNumbers([0,1,2,3,4])
THEN: We output 5
```

```js
function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
}

countOfAllIndexMatchingNumbers([0,1,2,3,4]) -----> 5;
```

_An additional example_:

```
GIVEN: [0,2,3,4,4,5,77] as `nums`
WHEN: Invoking countOfAllIndexMatchingNumbers([0,2,3,4,4,5,77])
THEN: We output 2
```

```js
function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
}

countOfAllIndexMatchingNumbers([0,2,3,4,4,5,77]) -----> 2;
```

The test suite (`countOfAllIndexMatchingNumbers.test.js`) is ultimately designed to verify four core features and expectations:

1) The value of your output should be of the `number` (finite) data type 
2) The value of your output should correspond to the amount of values in the input array `nums` that have index-matching numbers
3) In defending against hard-coding, any and all well-formed arguments will lead to the accurate amount of values in the input array `nums` that have index-matching numbers (**note**: see the respective test suite for more information)
4) The input array `nums` is not mutated
# 10-sumOfNumsWithinARange

For this exercise (`sumOfNumsWithinARange.js`), you are tasked to write out solution code for a function titled `sumOfNumsWithinARange(nums, start, end)`. This function will take in three arguments. The first argument: an array of numbers titled `nums`. The second argument: a number titled `start` which indicates the floor of the range. The third argument: a number titled `end` which indicates the ceiling of the range. The business logic you provide should allow for tallying up all of the values in `nums` that fall between `start` and `end` (include values that are equivalent to `start` and include values that are equivalent to `end`).

_In other words_:

```
GIVEN: [2,4,5,6,23] as `nums` and 4 as `start` and 6 as `end`
WHEN: Invoking sumOfNumsWithinARange([2,4,5,6,23])
THEN: We output 3
```

```js
function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
}

sumOfNumsWithinARange([2,4,5,6,23]) -----> 3;
```

_An additional example_:

```
GIVEN: [2,4,5,6,23] as `nums` and 2 as `start` and 23 as `end`
WHEN: Invoking sumOfNumsWithinARange([2,4,5,6,23])
THEN: We output 5
```

```js
function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
}

sumOfNumsWithinARange([2,4,5,6,23]) -----> 5;
```

The test suite (`sumOfNumsWithinARange.test.js`) is ultimately designed to verify four core features and expectations:

1) The value of your output should be of the `number` (finite) data type 
2) The value of your output should correspond to the amount of values in the input array `nums` that fall between `start` and `end` (inclusive of `start` and `end`)
3) In defending against hard-coding, any and all well-formed arguments will lead to the accurate amount of values in the input array `nums` that are fall between `start` and `end`, inclusive of `start` and `end` (**note**: see the respective test suite for more information)
4) The input array `nums` is not mutated
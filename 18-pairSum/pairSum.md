# 18-pairSum

For this exercise (`pairSum.js`), you are tasked to write out solution code for a function titled `pairSum(nums, target)`. This function will take in two arguments. The first argument will be an `array` of numbers called `nums` and the second argument will be a `number` called `target`. The data type of the expected output will be a `boolean` value (aka: true or false). The business logic you provide should allow for determining if two distinct (located at two different indices) numbers in `nums` sum up to the `target` value. If two distinct numbers add up to the `target` value, then return `true`. Otherwise, if a pair of distinct numbers cannot be added together to form the `target` value, return `false`.

_In other words_:

```
GIVEN: [1,2,3,4,5] as `nums` and 8 as `target`
WHEN: Invoking pairSum([1,2,3,4,5], 8)
THEN: We output `true`
```

```js
function pairSum(nums, target) {
  // Insert code here;
}

pairSum([0,1,2,3,4,5], 8) -----> true;
```

_An additional example_:

```
GIVEN: [1,1] as `nums` and 2 as `target`
WHEN: Invoking pairSum([1,1], 2)
THEN: We output true
```

```js
function pairSum(nums, target) {
  // Insert code here;
}

pairSum([1,1], 2) -----> true;
```

The test suite (`pairSum.test.js`) is ultimately designed to verify seven core features and expectations:

1) Executing the function should throw an error if the length of `nums` array is 1 or lower
2) Executing the function should not throw an error if the length of `nums` array is 2 or greater
3) The value of your output should be of the `boolean` data type 
4) The input array `nums` is not mutated
5) The function should return `false` if no two distinct numbers sum up to `target`
6) The function should return `true` if two distinct numbers sum up to `target`
7) In defending against hard-coding, any and all well-formed arguments will lead to sufficient coverage of core features and expectations #5 and #6 (**note**: see the respective test suite for more information)
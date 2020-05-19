# 04-countOfAllBooleans

For this exercise (`countOfAllBooleans.js`), you are tasked to write out solution code for a function titled `countOfAllBooleans(arr)`. This function will take in an `object` which is an array of elements and then it will output a `number`. The business logic you provide should allow for tallying up all of the `boolean` values (ie: true, false) and reporting that amount.

_In other words_:

```
GIVEN: ["hello", "world", 3, "nice", 99, Infinity, -Infinity, true, true, true, false] as `arr`
WHEN: Invoking countOfAllBooleans(["hello", "world", 3, "nice", 99, Infinity, -Infinity, true, true, true, false])
THEN: We output 4
```

```js
function countOfAllBooleans(arr) {
  // Insert code here;
}

countOfAllBooleans(["hello", "world", 3, "nice", 99, Infinity, -Infinity, true, true, true, false]) -----> 4;
```

_An additional example_:

```
GIVEN: [true, false, true, false, true, 7] as `arr`
WHEN: Invoking countOfAllBooleans([true, false, true, false, true, 7])
THEN: We output 5
```

```js
function countOfAllBooleans(arr) {
  // Insert code here;
}

countOfAllBooleans([true, false, true, false, true, 7]) -----> 5;
```

The test suite (`countOfAllBooleans.test.js`) is ultimately designed to verify four core features and expectations:

1) The value of your output should be of the `number` (finite) data type 
2) The value of your output should correspond to the amount of `boolean` values in the input `arr`
3) In defending against hard-coding, any and all well-formed arguments will lead to the accurate amount of `boolean` values in the input `arr` (**note**: see the respective test suite for more information)
4) The input `arr` is not mutated
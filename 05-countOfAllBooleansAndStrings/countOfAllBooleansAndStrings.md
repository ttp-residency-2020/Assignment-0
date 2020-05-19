# 05-countOfAllBooleansAndStrings

For this exercise (`countOfAllBooleansAndStrings.js`), you are tasked to write out solution code for a function titled `countOfAllBooleansAndStrings(arr)`. This function will take in an `object` which is a one-dimensional array of various elements and output a `number`. The business logic you provide should allow for tallying up all of the `boolean` values (ie: true, false) in addition to all of the `string` values and reporting that amount.

_In other words_:

```
GIVEN: [true, "true", false, "false", 9] as `arr`
WHEN: Invoking countOfAllBooleansAndStrings([true, "true", false, "false", 9])
THEN: We output 4
```

```js
function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
}

countOfAllBooleansAndStrings([true, "true", false, "false", 9]) -----> 4;
```

_An additional example_:

```
GIVEN: ["hey", "there", "hello", "there", "world", false] as `arr`
WHEN: Invoking countOfAllBooleansAndStrings(["hey", "there", "hello", "there", "world", false])
THEN: We output 6
```

```js
function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
}

countOfAllBooleansAndStrings(["hey", "there", "hello", "there", "world", false]) -----> 6;
```

The test suite (`countOfAllBooleansAndStrings.test.js`) is ultimately designed to verify four core features and expectations:

1) The value of your output should be of the `number` (finite) data type 
2) The value of your output should correspond to the amount of `boolean` and `string` values in the input `arr`
3) In defending against hard-coding, any and all well-formed arguments will lead to the accurate amount of `boolean` and `string` values in the input `arr` (**note**: see the respective test suite for more information)
4) The input `arr` is not mutated
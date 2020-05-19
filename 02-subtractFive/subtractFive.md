# 02-subtractFive

For this exercise (`subtractFive.js`), you are tasked to write out solution code for a function titled `subtractFive(num)`. This function will take in a `number` and output a `number`. The business logic you provide should allow for subtracting the value of `5` from the input `num` and outputting the difference.

_In other words_:

```
GIVEN: 15 as `num`
WHEN: Invoking subtractFive(15)
THEN: We output 10
```

```js
function subtractFive(num) {
  // Insert code here;
}

subtractFive(15) -----> 10;
```

_An additional example_:

```
GIVEN: 23 as `num`
WHEN: Invoking subtractFive(23)
THEN: We output 18
```

```js
function subtractFive(num) {
  // Insert code here;
}

subtractFive(23) -----> 18;
```

The test suite (`subtractFive.test.js`) is ultimately designed to verify three core features and expectations:

1) The value of your output should be of the `number` (finite) data type 
2) The value of your output should be five less than the `num` input value
3) In defending against hard-coding, any and all well-formed arguments will lead to an output that is five less than the `num` input value (**note**: see the respective test suite for more information)
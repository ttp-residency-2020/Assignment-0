# 03-cutInHalfAndFloor

For this exercise (`cutInHalfAndFloor.js`), you are tasked to write out solution code for a function titled `cutInHalfAndFloor(num)`. This function will take in a `number` and output a `number`. The business logic you provide should allow for dividing the input `num` by the value of `2` and rounding that quotient down.

_In other words_:

```
GIVEN: 22 as `num`
WHEN: Invoking cutInHalfAndFloor(22)
THEN: We output 11
```

```js
function cutInHalfAndFloor(num) {
  // Insert code here;
}

cutInHalfAndFloor(22) -----> 11;
```

_An additional example_:

```
GIVEN: 99 as `num`
WHEN: Invoking cutInHalfAndFloor(99)
THEN: We output 49
```

```js
function cutInHalfAndFloor(num) {
  // Insert code here;
}

cutInHalfAndFloor(99) -----> 49;
```

The test suite (`cutInHalfAndFloor.test.js`) is ultimately designed to verify three core features and expectations:

1) The value of your output should be of the `number` (finite) data type 
2) The value of your output should be half of the `num` input value, rounded down
3) In defending against hard-coding, any and all well-formed arguments will lead to an output that is half of the `num` input value, rounded down (**note**: see the respective test suite for more information)
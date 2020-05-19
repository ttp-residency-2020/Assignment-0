# 12-fizzBuzz

For this exercise (`fizzBuzz.js`), you are tasked to write out solution code for a function titled `fizzBuzz(start, end)`. This function will take in two arguments, a number referenced as `start` and a number referenced as `end`. The business logic you provide should allow for returning an array containing both `numbers` and/or `strings`. Based on certain conditions and as the operation increases one-by-one from `start` to `end`, certain values will be inserted into the output array. Include both `start` and `end`. For more details, please read further.

When incrementing from `start` to `end`, evaluate the current number in the iteration according to these conditions:

Here are the conditions:

- For multiples of three, insert "Fizz" instead of the number into the output array
- For multiples of five, insert "Buzz" instead of the number into the output array
- For numbers which are multiples of both three and five, insert "FizzBuzz" into the output array
- For numbers which are neither a multiple of three nor a multiple of five, insert the number into the output array

_In other words_:

```
GIVEN: 1 as `start` and 15 as `end`
WHEN: Invoking fizzBuzz(1,15)
THEN: We output [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
```

```js
function fizzBuzz(start, end) {
  // Insert code here;
}

fizzBuzz(1, 15) -----> [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"];
```

_An additional example_:

```
GIVEN: 1 as `start` and 20 as `end`
WHEN: Invoking fizzBuzz(1,15)
THEN: We output [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]
```

```js
function fizzBuzz(start, end) {
  // Insert code here;
}

fizzBuzz(1, 20) -----> [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"];
```

The test suite (`fizzBuzz.test.js`) is ultimately designed to verify four core features and expectations:

1) The value of your output should be an `array`
2) The size of your output array is determined by and should be equivalent to the difference between `end` and `start`, offset by one
3) The output array will contain numbers and/or strings that adhere to the four conditions of fizzBuzz stated in the prompt
4) In defending against hard-coding, any and all well-formed arguments will lead to sufficient coverage of core feature/expectation #3 (**note**: see the respective test suite for more information)
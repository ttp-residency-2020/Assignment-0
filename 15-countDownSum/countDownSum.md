# 15-countDownSum

For this exercise (`countDownSum.js`), you are tasked to write out solution code for a function titled `countDownSum(num)`. This function will take in one argument, a `number` referenced as `num`. This function will output a `number` value that represents the sum of the series of numbers from `num` down to and including 1. Implement this solution with recursion. 

Note: This is technically not a standalone function like the previous exercises centered around; it is an instance method of a class. This minor factor helped with setting up a necessary part of the corresponding testing suite (test spec #3). In light of this, please review the `this` keyword of JavaScript in order to fill out the business logic of the instance method. The primary purpose of this particular exercise is less about testing knowledge of Classes (we will go into that at a later date with other resources) and moreso about implementing a recursive approach, so please concentrate on the business logic of the instance method.

_In other words_:

```
GIVEN: 5 as `num`
WHEN: Invoking countDownSum(5)
THEN: We output 15
```

```js
class MySolution {
  countDownSum(num) {
    // Insert code here;
  }
}

let studentSolution = new MySolution();
studentSolution.countDownSum(5) -----> 15;
```

_An additional example_:

```
GIVEN: 10 as `num`
WHEN: Invoking countDownSum(10)
THEN: We output 55
```

```js
class MySolution {
  countDownSum(num) {
    // Insert code here;
  }
}

let studentSolution = new MySolution();
studentSolution.countDownSum(10) -----> 55;
```

The test suite (`countDownSum.test.js`) is ultimately designed to verify four core features and expectations:

1) The function should return a `number` (finite)
2) The function should return the sum of all numbers from `num` down to and including 1
3) The function should involve a recursive approach
4) In defending against hard-coding, any and all well-formed arguments will lead to sufficient coverage of core features/expectations #2 and #3 (**note**: see the respective test suite for more information)
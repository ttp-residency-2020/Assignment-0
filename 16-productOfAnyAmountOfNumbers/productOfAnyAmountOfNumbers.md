# 16-productOfAnyAmountOfNumbers

For this exercise (`productOfAnyAmountOfNumbers.js`), you are tasked to write out solution code for a function titled `productOfAnyAmountOfNumbers(...args)`. This function is capable of accepting and will take in any amount of arguments. Each argument passed into this function will be of the `number` data type. The business logic you provide should allow for calculating the product of any and all numbers passed into the function.

Please review `rest parameters` in order to better understand the "..." preceding the `args` parameter, which allows us to represent an indefinite number of arguments as an array. Alternatively and optionally, reviewing the `arguments` keyword, which gives us access to the arguments passed into a function, might also provide another perspective.

_In other words_:

```
GIVEN: 3, 4, and 5 as arguments
WHEN: Invoking productOfAnyAmountOfNumbers(3,4,5)
THEN: We output 60
```

```js
function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
}

productOfAnyAmountOfNumbers(3,4,5) -----> 60;
```

_An additional example_:

```
GIVEN: 2,4,6 as arguments
WHEN: Invoking productOfAnyAmountOfNumbers(2,4,6)
THEN: We output 48
```

```js
function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
}

productOfAnyAmountOfNumbers([2,4,6]) -----> 48;
```

The test suite (`productOfAnyAmountOfNumbers.test.js`) is ultimately designed to verify four core features and expectations:

1) The value of your output should be of the `number` (finite) data type 
2) The function should be capable of accepting any amount of arguments
3) The value of your output should reflect the product of multiplying all of the numbers passed into the function
4) In defending against hard-coding, any and all well-formed arguments will lead to sufficient coverage of feature and expectation #3 (**note**: see the respective test suite for more information)
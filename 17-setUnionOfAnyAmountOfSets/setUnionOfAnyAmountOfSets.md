# 17-setUnionOfAnyAmountOfSets

For this exercise (`setUnionOfAnyAmountOfSets.js`), you are tasked to write out solution code for a function titled `setUnionOfAnyAmountOfSets(...args)`. This function is capable of accepting and will take in any amount of arguments. Each of these arguments passed in will be a special type of JavaScript `object` known as a `set` which will strictly contain numbers. Within any given `set`, there will be unique values. In set theory, the union of a collection of sets is the set of all elements in the collection. The business logic you provide should allow for composing and outputting a `set` that contains all of the unique values across the indefinite amount of sets passed into the function.

Please review `rest parameters` in order to better understand the "..." preceding the `args` parameter, which allows us to represent an indefinite number of arguments as an array. Alternatively and optionally, reviewing the `arguments` keyword, which gives us access to the arguments passed into a function, might also provide another perspective. Additionally, you may also want to review: the `for...in`/`for...of` loop, general iteration techniques over `sets` and iterables in JavaScript, JavaScript `set` objects, and the `new` keyword which allows for creating instances of a particular class.

_In other words_:

```
GIVEN: { 1, 2, 4 }, { 4, 5, 6 }, and { 6, 7, 8 } as arguments
WHEN: Invoking setUnionOfAnyAmountOfSets({ 1, 2, 4 }, { 4, 5, 6 }, { 6, 7, 8 })
THEN: We output { 1, 2, 4, 5, 6, 7, 8 }
```

```js
function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
}

setUnionOfAnyAmountOfSets({ 1, 2, 4 }, { 4, 5, 6 }, { 6, 7, 8 }) -----> { 1, 2, 4, 5, 6, 7, 8 };
```

_An additional example_:

```
GIVEN: { 1, 2 }, { 3, 4 }, and { 5, 6 } as arguments
WHEN: Invoking setUnionOfAnyAmountOfSets({ 1, 2 }, { 3, 4 }, { 5, 6 })
THEN: We output { 1, 2, 3, 4, 5, 6 }
```

```js
function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
}

setUnionOfAnyAmountOfSets({ 1, 2 }, { 3, 4 }, { 5, 6 }) -----> { 1, 2, 3, 4, 5, 6 };
```

The test suite (`setUnionOfAnyAmountOfSets.test.js`) is ultimately designed to verify four core features and expectations:

1) The value of your output should be a `set` data structure 
2) The function should be capable of accepting any amount of arguments
3) The value of your output should reflect a `set` that is a set containing all elements of the collection of sets
4) In defending against hard-coding, any and all well-formed arguments will lead to sufficient coverage of feature and expectation #3 (**note**: see the respective test suite for more information)
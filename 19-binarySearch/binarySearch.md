# 19-binarySearch

For this exercise (`binarySearch.js`), you are tasked to write out solution code for a function (instance method, not a standalone function) titled `binarySearch(nums, target)`. This function will take in two arguments. The first argument will be an array of numbers titled `nums`, which is sorted in ascending order (from least to greatest). The second argument will be a `number` titled `target`. The output of this function will be a `boolean` value that indicates if the `target` value is located in the `nums` input array. If the `target` value is located in the input array, return true. If the `target` value is not located in the input array, return false. The business logic you provide should allow for implementing the binary search algorithm to search through `nums` such that a logarithmic time complexity is a quality of the design of your solution. Implement this recursively.

> "Binary search is the most efficient searching algorithm having a run-time complexity of O(log2 N). This algorithm works only on a sorted list of elements. Binary search begins by comparing the middle element of the list with the target element. If the target value matches the middle element, its position in the list is returned. If it does not match, the list is divided into two halves. The first half consists of the first element to middle element whereas the second half consists of the element next to the middle element to the last element." - InterviewBit 

Note: Similar to `15-countDownSum`, this exercise focuses less-so on assessing the understanding of JavaScript classes and more-so on practicing with problem-solving, JavaScript syntax, and the JavaScript library. Most of the code (outside of the core function `binarySearch`) is already set up, with the primary two elements requiring review centering around: instance properties and the `this` keyword. In light of this, please concentrate on the binary search implementation. 

_In other words_:

```
GIVEN: [1,2,3,4,5] as `nums` and 3 as `target`
WHEN: Invoking binarySearch([1,2,3,4,5], 3)
THEN: We output true
```

```js
class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
  // Insert code here;
  }
}

let studentSolution = new MySolution();
studentSolution.binarySearch([1,2,3,4,5], 3) -----> true;
```

_An additional example_:

```
GIVEN: [1,2,3,4,5] as `nums` and 8 as `target`
WHEN: Invoking binarySearch([1,2,3,4,5], 8)
THEN: We output false
```

```js
class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
  // Insert code here;
  }
}

let studentSolution = new MySolution();
studentSolution.binarySearch([1,2,3,4,5], 8) -----> false;
```

The test suite (`binarySearch.test.js`) is ultimately designed to verify six core features and expectations:

1) The function `binarySearch(nums, target)` should be an inherited instance method
2) The output of this instance method should be of the `boolean` data type 
3) Your instance method should return `false` if the `target` value does not exist in the `nums` input array
4) Your instance method should return `true` if the `target` value exists in the `nums` input array
5) In defending against hard-coding, any and all well-formed arguments will lead to sufficient coverage of #3 and #4 (**note**: see the respective test suite for more information)
6) Your instance method should be written such that there is an overall logarithmic time complexity when processing the input and performing operations throughout the solution code; it should also be implemented recursively
7) The input array `nums` is not mutated
# 13-isPalindrome

For this exercise (`isPalindrome.js`), you are tasked to write out solution code for a function titled `isPalindrome(word)`. This function will take in one argument, a `string` referenced as `word`. This function will out put a `boolean` value indicating whether the input `word` is a palindrome. If the input `word` is a palindrome, return `true`. If the input `word` is not a palindrome, return `false`. A palindrome is a word that reads the same forwards as it does backwards.

_In other words_:

```
GIVEN: "racecar" as `word`
WHEN: Invoking isPalindrome("racecar")
THEN: We output true
```

```js
function isPalindrome(word) {
  // Insert code here;
}

isPalindrome("racecar") -----> true;
```

_An additional example_:

```
GIVEN: "door" as `word`
WHEN: Invoking isPalindrome("door")
THEN: We output false
```

```js
function isPalindrome(word) {
  // Insert code here;
}

isPalindrome("door") -----> false;
```

The test suite (`isPalindrome.test.js`) is ultimately designed to verify four core features and expectations:

1) The function return a `boolean` value
2) The function should return `true` if the input `word` is a palindrome
3) The function should return `false` if the input `word` is not a palindrome
4) In defending against hard-coding, any and all well-formed arguments will lead to sufficient coverage of core features/expectations #2 and #3 (**note**: see the respective test suite for more information)
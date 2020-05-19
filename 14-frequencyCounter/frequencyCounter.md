# 14-frequencyCounter

For this exercise (`frequencyCounter.js`), you are tasked to write out solution code for a function titled `frequencyCounter(word)`. This function will take in one argument, a `string` referenced as `word`. This function will output an `object` value composed of key:value pairs where the keys are individual letters of `word` and the corresponding value is the amount of times each respective letter appeared. In this way, we create an `object` where we can look up the frequency of any letter in word.

_In other words_:

```
GIVEN: "apple" as `word`
WHEN: Invoking frequencyCounter("apple")
THEN: We output { "a": 1, "p": 2, "l": 1, "e": 1 }
```

```js
function frequencyCounter(word) {
  // Insert code here;
}

frequencyCounter("apple") -----> { "a": 1, "p": 2, "l": 1, "e": 1 };
```

_An additional example_:

```
GIVEN: "computer" as `word`
WHEN: Invoking frequencyCounter("computer")
THEN: We output { "c": 1, "o": 1, "m": 1, "p": 1, "u": 1, "t": 1, "e": 1, "r": 1 }
```

```js
function frequencyCounter(word) {
  // Insert code here;
}

frequencyCounter("computer") -----> { "c": 1, "o": 1, "m": 1, "p": 1, "u": 1, "t": 1, "e": 1, "r": 1 };
```

The test suite (`frequencyCounter.test.js`) is ultimately designed to verify four core features and expectations:

1) The function should return an `object`
2) The amount of keys in the output `object` should be equivalent to the amount of unique letters in the word
3) The output `object` should contain key:value pairs that indicate accurate frequencies of each letter in the input `word`
4) In defending against hard-coding, any and all well-formed arguments will lead to sufficient coverage of core features/expectations #2 and #3 (**note**: see the respective test suite for more information)
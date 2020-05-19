# 01-titleCaseEdit

For this exercise (`titleCaseEdit.js`), you are tasked to write out solution code for a function titled `titleCaseEdit(title)`. This function will take in a `string` and output a `string`. The business logic you provide should allow for revising the input `title` into conventional title case. For all intents and purposes, conventional title case means that each and every word should be capitalized. For example, the conventional title case revision of "the great Gatsby" would be "The Great Gatsby" and the conventional title case revision of "good Will hunting" would be "Good Will Hunting".

_In other words_:

```
GIVEN: "the cow jumped over the moon" as `title`
WHEN: Invoking titleCaseEdit("the cow jumped over the moon")
THEN: We output "The Cow Jumped Over The Moon"
```

```js
function titleCaseEdit(title) {
  // Insert code here;
}

titleCaseEdit("the cow jumped over the moon") -----> "The Cow Jumped Over The Moon";
```

_An additional example_:

```
GIVEN: "the Boy who Cried wolf" as `title`
WHEN: Invoking titleCaseEdit("the Boy who Cried wolf")
THEN: We output "The Boy Who Cried Wolf"
```

```js
function titleCaseEdit(title) {
  // Insert code here;
}

titleCaseEdit("the Boy who Cried wolf") -----> "The Boy Who Cried Wolf";
```

The test suite (`titleCaseEdit.test.js`) is ultimately designed to verify three core features and expectations:

1) The value of your output should be of the `string` data type 
2) The value of your output should be of the same length as the `title` input
3) The conventional title case revision will be dynamic, and not hard-coded, such that any and all well-formed arguments passed into the function will result in properly modified strings (**note**: see the respective test suite for more information)
# 00-greetFriend

For this exercise (`greetFriend.js`), you are tasked to write out solution code for a function titled `greetFriend(name)`. This function will take in a `string` and output a `string`. The business logic you provide should allow for the proper greeting of the value of the `name` argument.

_In other words_:

```
GIVEN: "Albert" as `name`
WHEN: Invoking greetFriend("Albert")
THEN: We output "Hello, Albert!"
```

```js
function greetFriend(name) {
  // Insert code here;
}

greetFriend("Albert") -----> "Hello, Albert!";
```

_An additional example_:

```
GIVEN: "Brian" as an argument
WHEN: Invoking greetFriend("Brian")
THEN: We output "Hello, Brian!"
```

```js
function greetFriend(name) {
  // Insert code here;
}

greetFriend("Brian") -----> "Hello, Brian!";
```

The test suite (`greetFriend.test.js`) is ultimately designed to verify two core features and expectations:

1) The value of your output should be of the `string` data type 
2) The greeting will be dynamic, and not hard-coded, such that any and all well-formed arguments passed into the function will adhere to the proper greeting format (**note**: see the respective test suite for more information)
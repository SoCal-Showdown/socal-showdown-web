# JavaScript Basics

JavaScript is the base language most web applications are written in.

You can try out these examples by opening a new browser tab and pressing Ctrl+Shift+J to open the JavaScript console.

## Comments

```js
// Everything after a double slash is a comment.
// Comments do not affect the code but can provide explanations
// to other programmers.
```

```js
/* Block comment
that can be
multiple lines */
```

## Printing to the console

```js
console.log('Hello world');
// This prints the text "Hello world" on the screen.
// Every statement ends with a semicolon, and usually you have one statement per line.
```

## Values

```js
// A string is text. To create a string surround it with single quotes.
'This is a string'
```

```js
// These are numbers
5
0
-53521
0.0015125
```

```js
// A boolean is only true or false
true
false
```

All of these are data you can manipulate.

They can be logged using `console.log`, e.g.

```js
console.log(5);
```

## Variables

A variable is a way to store data. Variables can store any of the above kinds of values.

Create a read-only variable using `const`.

```js
const name = 'Bob';
// This creates a variable "name" which is set to the string "Bob"
```

You can get the stored value of a variable by typing the variable's name.

```js
const name = 'Bob';
console.log(name);
// This prints "Bob" on the screen because name is set to "Bob"
```

You can also create a string that includes the value of a variable using backticks. By typing `${...}`, anything between the curly braces will be evaluated.

```js
const name = 'Bob';
console.log(`Hello, ${name}!`);
// Prints "Hello, Bob!"
```

To create a variable you can change later, use `let`.

```js
let score = 5;
// This creates a variable "score" which is set to 5
```

You can change the variable like this:

```js
score = 6;
```

For example:

```js
let score = 5;
console.log(score); // Prints 5
score = 6;
console.log(score); // Prints 6
```

## Functions

Functions are the main way you make things happen in JavaScript.

`console.log` is a function you've already used. It prints text to the screen.

```js
console.log('text to print');
```

The way you run a function is the function name followed by parentheses, and then sometimes arguments in the parentheses. Arguments tell the function what to do. For example, the argument for `console.log` tells it what to print to the screen.

You can make your own functions using the `function` keyword.

```js
function greet() {
    // All code inside the curly braces gets run every time your function is run
    console.log('Hello!');
}
```

You can now use this function in your code just like `console.log`.

```js
greet();
```

To have arguments, add them as names inside the parenthses:

```js
function greet(name) {
    // Now you can use name just like a variable
    console.log(`Hello, ${name}`);
}
```

```js
greet('Bob');
// Hello, Bob
```

Functions can also _return_ a value. Like a variable, you can call the function and use the output:

```js
function getName() {
    return 'Bob';
}

const name = getName();
// name is set to "Bob"

console.log(getName());
// Prints "Bob"
```

This may not seem useful now, but later you'll add more logic inside the function to do further processing, for example:

```js
function makeGreeting(name) {
    return `Hello, ${name}`;
}

console.log(makeGreeting('Bob'));
// Prints "Hello, Bob"
```

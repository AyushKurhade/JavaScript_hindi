# Call Stack and Execution Context in JavaScript

## Introduction

Understanding **Execution Context** and the **Call Stack** is essential for learning how JavaScript executes code. Every JavaScript program runs using these two concepts.

---

# What is Execution Context?

An **Execution Context** is the environment in which JavaScript code is executed.

It contains:

* Variables
* Functions
* Scope information
* Value of the `this` keyword

Whenever JavaScript executes code, it creates an execution context.

There are two main types:

## 1. Global Execution Context (GEC)

The Global Execution Context is created when a JavaScript file starts running.

### Example

```javascript
let name = "Ayush";

function greet() {
    console.log("Hello");
}

greet();
```

When the file starts, JavaScript creates:

```text
Global Execution Context
```

It stores:

```text
name → "Ayush"
greet → function definition
```

---

## 2. Function Execution Context (FEC)

Whenever a function is called, JavaScript creates a new execution context specifically for that function.

### Example

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

When `greet()` is called:

```text
Function Execution Context Created
```

After execution completes:

```text
Function Execution Context Destroyed
```

---

# Phases of Execution Context

Every execution context goes through two phases:

## Phase 1: Memory Creation Phase

Before executing code, JavaScript scans the program and allocates memory.

### Example

```javascript
var a = 10;
var b = 20;

function add() {
    return a + b;
}
```

### Memory Allocation

```text
a → undefined
b → undefined
add → complete function definition
```

Variables receive:

```javascript
undefined
```

Functions receive:

```javascript
complete function definition
```

---

## Phase 2: Execution Phase

JavaScript now executes code line by line.

```javascript
a = 10;
b = 20;
```

Updated memory:

```text
a → 10
b → 20
add → function
```

---

# What is the Call Stack?

The **Call Stack** is a data structure used by JavaScript to manage function execution.

It follows:

```text
LIFO (Last In First Out)
```

Think of it like a stack of plates:

* Last plate placed on top is removed first.
* Last function added to the stack executes first.

---

# Example of Call Stack

```javascript
function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.log("Hello");
}

one();
```

---

## Step 1

Global Execution Context enters the stack.

```text
Call Stack

| Global |
---------
```

---

## Step 2

`one()` is called.

```text
| one    |
| Global |
---------
```

---

## Step 3

`two()` is called.

```text
| two    |
| one    |
| Global |
---------
```

---

## Step 4

`three()` is called.

```text
| three  |
| two    |
| one    |
| Global |
---------
```

---

## Step 5

`three()` completes.

```text
| two    |
| one    |
| Global |
---------
```

---

## Step 6

`two()` completes.

```text
| one    |
| Global |
---------
```

---

## Step 7

`one()` completes.

```text
| Global |
---------
```

---

## Step 8

Global Execution Context completes.

```text
Empty Stack
```

---

# Complete Visualization

```javascript
function one() {
    console.log("One");
    two();
}

function two() {
    console.log("Two");
    three();
}

function three() {
    console.log("Three");
}

one();
```

### Output

```text
One
Two
Three
```

### Call Stack Flow

```text
Global
   ↓
one()
   ↓
two()
   ↓
three()
   ↑
two() removed
   ↑
one() removed
   ↑
Global removed
```

---

# Stack Overflow

A stack overflow occurs when functions keep calling themselves indefinitely.

### Example

```javascript
function test() {
    test();
}

test();
```

Execution:

```text
test()
test()
test()
test()
test()
...
```

Eventually JavaScript throws:

```text
RangeError: Maximum call stack size exceeded
```

This happens because the call stack becomes full.

---

# Relationship Between Execution Context and Call Stack

Whenever a function is invoked:

1. A new Execution Context is created.
2. It is pushed onto the Call Stack.
3. The function executes.
4. Its Execution Context is removed from the Call Stack after completion.

### Flow

```text
Function Call
      ↓
Create Execution Context
      ↓
Push into Call Stack
      ↓
Execute Function
      ↓
Pop from Call Stack
```

---

# Interview Definitions

## Execution Context

> The environment in which JavaScript code is executed. It contains variables, functions, scope information, and the value of `this`.

---

## Call Stack

> A LIFO data structure used by the JavaScript engine to manage execution contexts and track function calls.

---

## One-Line Relationship

> Every time a function is invoked, a new Execution Context is created and pushed onto the Call Stack. When the function finishes, its Execution Context is popped from the Call Stack.

---

# Key Points to Remember

* JavaScript creates a Global Execution Context when a file starts.
* Every function call creates a new Function Execution Context.
* Execution Context has two phases:

  * Memory Creation Phase
  * Execution Phase
* Variables are initialized with `undefined` during memory creation.
* Functions receive their complete definitions during memory creation.
* Call Stack follows the LIFO principle.
* Function calls are pushed onto the stack and removed after execution.
* Infinite recursion causes a Stack Overflow error.
* Execution Context and Call Stack work together to execute JavaScript code.

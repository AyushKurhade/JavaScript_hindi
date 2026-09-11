# JavaScript Promises and Asynchronous Programming

A comprehensive guide and reference sheet for understanding **Promises, Async/Await, Error Handling, and Network Requests** in JavaScript.

---

## 📌 Topics Covered

* [1. Basic Promise Creation & Resolution](#1-basic-promise-creation--resolution)
* [2. Passing Data Through Promises](#2-passing-data-through-promises)
* [3. Chaining, Error Handling, & Cleanup](#3-chaining-error-handling--cleanup)
* [4. Async/Await (A Cleaner Alternative)](#4-asyncawait-a-cleaner-alternative)
* [5. Network Requests with the `fetch()` API](#5-network-requests-with-the-fetch-api)
* [6. Parallel Execution with `Promise.all()`](#6-parallel-execution-with-promiseall)

---

## 📝 Summarized Information & Explanation

### 1. Basic Promise Creation & Resolution
A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation.
* **Implementation:** Promises can be stored in a variable (`const promiseOne = new Promise(...)`) or instantiated directly inline. Inside, utilities like `setTimeout` can simulate background tasks like database calls or cryptography.
* **💡 Key Concept:** You must explicitly call `resolve()` inside the execution block to trigger the subsequent `.then()` block. Without `resolve()`, `.then()` will never execute.

### 2. Passing Data Through Promises
* When an asynchronous task successfully completes, you can pass data (objects, arrays, strings, etc.) directly into the `resolve()` function.
* **💡 Key Concept:** The data passed into `resolve(data)` automatically becomes the argument/input for the callback function inside the `.then(data)` block.

### 3. Chaining, Error Handling, & Cleanup
* **Conditional Logic:** If a task fails, `reject()` is called instead of `resolve()`.
* **Chaining (`.then().then()`):** Whatever you `return` from the first `.then()` is automatically wrapped in a new promise and passed as input to the next `.then()`. This prevents deeply nested "callback hell".
* **`.catch()`:** Intercepts and handles any error thrown by `reject()`.
* **`.finally()`:** A cleanup block that executes **no matter what**—regardless of whether the promise was resolved or rejected. (Ideal for stopping loading spinners).

### 4. Async/Await (A Cleaner Alternative)
Instead of dealing with continuous `.then()` and `.catch()` blocks, JavaScript offers `async/await` syntax to write asynchronous code that reads like synchronous code.
* **💡 Key Concept:** Functions are marked with the `async` keyword, allowing the use of `await` to pause execution until a promise settles.
* Since `await` does not have an implicit error catcher, blocks must be wrapped in standard `try {} catch (error) {}` statements to handle rejections safely.

### 5. Network Requests with the `fetch()` API
The modern `fetch()` API is used to perform network requests and returns a promise.
* **Two-Step Process:** `fetch()` initially returns a stream response object. You must first convert it to a readable format using `response.json()` (which itself returns a promise), and then read the actual data in a secondary `.then()` block or `await` assignment.

---

## ⚡ Advanced Concept: Parallel Execution with `Promise.all()`

`Promise.all()` is a static method used to execute **multiple asynchronous operations concurrently** (in parallel) and wait for all of them to complete.

* **How it works:** It accepts an *array* of promises and returns a single, unified promise.
* **Success Scenario:** It resolves only when **all** input promises resolve successfully. It returns an ordered array containing all the resolved values.
* **Failure Scenario:** It operates on a **"fail-fast"** basis. If even *one* promise rejects, the entire `Promise.all()` block immediately rejects with that specific error, ignoring all other successful or pending operations.

### Code Example

```javascript
const fetchUsers = fetch('https://api.github.com/users/hiteshchoudhary');
const fetchRepo = fetch('https://github.com');

Promise.all([fetchUsers, fetchRepo])
  .then(([usersResponse, repoResponse]) => {
     console.log("Both network requests finished successfully!");
  })
  .catch(error => {
     console.error("One of the requests failed!", error);
  });
```

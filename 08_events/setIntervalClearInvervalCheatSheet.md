# ⚡ JavaScript Timers — setInterval() & clearInterval()

> **Quick Revision Cheat Sheet | Hinglish + Code Examples**

---

## 📌 1. setInterval()

### Definition

`setInterval()` ek function ko **fixed time interval ke baad repeatedly** execute karta hai.

### Syntax

```javascript
setInterval(function, interval);
```

### Example

```javascript
setInterval(() => {
    console.log("Hello");
}, 1000);
```

Output:

```text
Hello
Hello
Hello
Hello
...
```

`1000 ms = 1 second`

So function har **1 second** mein execute hoga.

---

# 🧠 2. setInterval() with Function

```javascript
const sayDate = function(str) {
    console.log(str, Date.now());
};

const intervalId = setInterval(sayDate, 1000, "hi");
```

### Breakdown

```text
sayDate     → Function
1000        → 1000 milliseconds = 1 second
"hi"        → Function ko argument
intervalId  → Timer ID
```

Every 1 second:

```text
hi 1756...
hi 1757...
hi 1758...
```

---

# 🔑 3. Arguments in setInterval()

You can pass arguments after the delay.

```javascript
setInterval(function, delay, arg1, arg2, ...);
```

Example:

```javascript
function greet(name) {
    console.log("Hello", name);
}

setInterval(greet, 1000, "Ayush");
```

Output:

```text
Hello Ayush
Hello Ayush
Hello Ayush
...
```

---

# 🛑 4. clearInterval()

### Definition

`clearInterval()` is used to **stop a running `setInterval()`**.

### Syntax

```javascript
clearInterval(intervalID);
```

Example:

```javascript
const timer = setInterval(() => {
    console.log("Hello");
}, 1000);

clearInterval(timer);
```

The interval is stopped.

---

# 🔄 5. Timer ID

`setInterval()` returns an interval ID.

```javascript
const intervalId = setInterval(sayDate, 1000);
```

Here:

```text
setInterval()
      ↓
Returns Interval ID
      ↓
Store in intervalId
      ↓
clearInterval(intervalId)
      ↓
Interval stopped
```

---

# ⚠️ 6. Important Mistake

### ❌ Wrong for a Start/Stop program

```javascript
const intervalId = setInterval(sayDate, 1000);

clearInterval(intervalId);
```

Why?

Because `clearInterval()` immediately stops the interval.

### Correct approach

```javascript
let intervalId;

intervalId = setInterval(sayDate, 1000);

// Later
clearInterval(intervalId);
```

Usually the `clearInterval()` call is triggered by an event such as a button click.

---

# 🖱️ 7. Start and Stop Example

```javascript
const sayDate = function(str) {
    console.log(str, Date.now());
};

let intervalId;

document.querySelector('#start').addEventListener('click', function() {
    intervalId = setInterval(sayDate, 1000, "hi");
});

document.querySelector('#stop').addEventListener('click', function() {
    clearInterval(intervalId);
});
```

### Flow

```text
START clicked
      ↓
setInterval()
      ↓
Function runs every 1 second
      ↓
START → START → START → ...
      ↓
STOP clicked
      ↓
clearInterval()
      ↓
Interval stopped
```

---

# ⏱️ 8. Time Conversion

```text
1000 ms  = 1 second
2000 ms  = 2 seconds
3000 ms  = 3 seconds
5000 ms  = 5 seconds
```

---

# ⚡ 9. setTimeout vs setInterval

| Function          | Purpose                                              |
| ----------------- | ---------------------------------------------------- |
| `setTimeout()`    | Function ko delay ke baad **once** execute karta hai |
| `clearTimeout()`  | `setTimeout()` ko cancel karta hai                   |
| `setInterval()`   | Function ko repeatedly execute karta hai             |
| `clearInterval()` | `setInterval()` ko stop karta hai                    |

### Easy Trick

```text
TIMEOUT
   ↓
Once

INTERVAL
   ↓
Repeatedly
```

---

# 🧪 10. Complete Example

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Timer</title>
</head>

<body>

    <h1>Chai aur Javascript</h1>

    <button id="start">Start</button>
    <button id="stop">Stop</button>

    <script>

        const sayDate = function(str) {
            console.log(str, Date.now());
        };

        let intervalId;

        document.querySelector('#start').addEventListener('click', function() {
            intervalId = setInterval(sayDate, 1000, "hi");
        });

        document.querySelector('#stop').addEventListener('click', function() {
            clearInterval(intervalId);
        });

    </script>

</body>

</html>
```

---

# 🎯 11. Interview / Exam Questions

### Q1. What is setInterval()?

`setInterval()` repeatedly executes a function after a specified time interval.

### Q2. What is clearInterval()?

`clearInterval()` stops a previously created `setInterval()`.

### Q3. What does setInterval() return?

It returns an **interval ID**, which can be used with `clearInterval()`.

### Q4. What is the difference between setTimeout() and setInterval()?

```text
setTimeout()  → Executes once
setInterval() → Executes repeatedly
```

### Q5. How do you stop setInterval()?

```javascript
clearInterval(intervalId);
```

---

# 🔥 12. One-Minute Revision

```javascript
// Start interval
const id = setInterval(function, 1000);

// Stop interval
clearInterval(id);
```

### Remember:

```text
setInterval()
      ↓
Repeated execution
      ↓
Returns ID
      ↓
clearInterval(ID)
      ↓
Stops execution
```

### Most Important Pattern

```javascript
let intervalId;

intervalId = setInterval(() => {
    console.log("Running...");
}, 1000);

clearInterval(intervalId);
```

> **`setInterval()` = repeatedly run karo.**
>
> **`clearInterval()` = repeatedly running code ko stop karo.**

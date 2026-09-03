# ⚡ JavaScript Timers — setTimeout() & clearTimeout()

> **Quick Revision Cheat Sheet | Hinglish + Examples**

---

## 📌 1. What are JavaScript Timers?

JavaScript timers are used to execute code after a specific amount of time.

Main timer functions:

* `setTimeout()` → code ko **ek baar delay ke baad** execute karta hai.
* `clearTimeout()` → scheduled `setTimeout()` ko **cancel** karta hai.

---

# ⏱️ 2. setTimeout()

### Definition

`setTimeout()` ek function ko specified delay ke baad **once** execute karta hai.

### Syntax

```javascript
setTimeout(function, delay);
```

### Example

```javascript
setTimeout(() => {
    console.log("Hello");
}, 2000);
```

### Output

```text
Hello
```

Output **2 seconds ke baad** aayega.

### Important

```text
1000 milliseconds = 1 second
2000 milliseconds = 2 seconds
```

---

# 🧠 3. How setTimeout() Works

```javascript
setTimeout(changeText, 2000);
```

Means:

```text
Function → changeText
Delay    → 2000 ms
             ↓
          2 seconds
             ↓
       Execute function
```

⚠️ `setTimeout()` function ko immediately execute nahi karta.

### Correct

```javascript
setTimeout(changeText, 2000);
```

### Incorrect

```javascript
setTimeout(changeText(), 2000);
```

`changeText()` likhne se function immediately call ho jayega.

---

# 🛑 4. clearTimeout()

### Definition

`clearTimeout()` ek previously scheduled `setTimeout()` ko cancel karta hai.

### Syntax

```javascript
clearTimeout(timerID);
```

### Example

```javascript
const timer = setTimeout(() => {
    console.log("Hello");
}, 2000);

clearTimeout(timer);
```

Result:

```text
Hello → ❌ Not printed
```

Because timer cancel ho gaya.

---

# 🔑 5. Timer ID

`setTimeout()` ek timer ID return karta hai.

```javascript
const timer = setTimeout(() => {
    console.log("Hello");
}, 2000);
```

Here:

```text
setTimeout()
     ↓
returns Timer ID
     ↓
stored in timer
```

Then:

```javascript
clearTimeout(timer);
```

Timer cancel ho jata hai.

### Remember

```text
setTimeout()
     ↓
Timer ID
     ↓
clearTimeout(Timer ID)
     ↓
Cancelled
```

---

# 🖱️ 6. addEventListener()

Used to perform an action when an event occurs.

### Syntax

```javascript
element.addEventListener("event", function);
```

### Example

```javascript
button.addEventListener("click", function() {
    console.log("Button clicked");
});
```

Common events:

```text
click
dblclick
mouseover
mouseout
keydown
keyup
submit
change
```

---

# 🌐 7. DOM Manipulation

### Select an element

```javascript
document.querySelector('h1');
```

Selects the first `<h1>` element.

### Change HTML content

```javascript
document.querySelector('h1').innerHTML = "best JS series";
```

Means:

> `<h1>` ke andar ka content change karo.

---

# 🧪 8. Complete Example

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Timer</title>
</head>

<body>

    <h1>Chai aur code</h1>

    <button id="stop">Stop</button>

    <script>

        const changeText = function() {
            document.querySelector('h1').innerHTML = "best JS series";
        };

        const changeMe = setTimeout(changeText, 2000);

        document.querySelector('#stop').addEventListener('click', function() {

            clearTimeout(changeMe);

            console.log("STOPPED");

        });

    </script>

</body>

</html>
```

---

# 🔄 9. Program Flow

### Without clicking Stop

```text
Page Load
    ↓
setTimeout()
    ↓
Wait 2 seconds
    ↓
changeText()
    ↓
<h1> changes
    ↓
"best JS series"
```

### Clicking Stop before 2 seconds

```text
Page Load
    ↓
setTimeout()
    ↓
User clicks Stop
    ↓
clearTimeout()
    ↓
Timer cancelled
    ↓
<h1> remains unchanged
    ↓
Console → "STOPPED"
```

---

# 🧠 10. Quick Comparison

| Function             | Purpose                                           |
| -------------------- | ------------------------------------------------- |
| `setTimeout()`       | Function ko delay ke baad once execute karta hai  |
| `clearTimeout()`     | `setTimeout()` ko cancel karta hai                |
| `setInterval()`      | Function ko repeatedly execute karta hai          |
| `clearInterval()`    | `setInterval()` ko stop karta hai                 |
| `addEventListener()` | Event ke response mein function execute karta hai |
| `querySelector()`    | HTML element select karta hai                     |
| `innerHTML`          | HTML content change karta hai                     |
| `console.log()`      | Console mein output deta hai                      |

---

# 🎯 11. Exam/Interview Points

### Q: What is setTimeout()?

`setTimeout()` is a JavaScript function that executes a function once after a specified delay.

### Q: What is clearTimeout()?

`clearTimeout()` cancels a previously scheduled `setTimeout()`.

### Q: What does setTimeout() return?

It returns a **timer ID**, which can be passed to `clearTimeout()`.

### Q: 2000 milliseconds equals?

```text
2000 ms = 2 seconds
```

### Q: Difference between setTimeout and setInterval?

```text
setTimeout  → executes once after delay
setInterval → executes repeatedly after every interval
```

---

# 🔥 12. One-Line Revision

```text
setTimeout()     → Delay ke baad function ONCE run
clearTimeout()   → setTimeout ko CANCEL
setInterval()    → Function repeatedly run
clearInterval()  → setInterval ko STOP
```

### Most Important Pattern

```javascript
const timer = setTimeout(myFunction, 2000);

clearTimeout(timer);
```

> **Timer ko cancel karna hai → `setTimeout()` ka returned ID store karo → `clearTimeout(ID)` use karo.**

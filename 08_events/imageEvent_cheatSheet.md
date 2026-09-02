# ⚡ JavaScript Events — Cheat Sheet

> **Quick Revision Notes | Hinglish + Code Examples**

---

## 📌 1. What is an Event?

**Event** = webpage par hone wala koi action.

Examples:

* `click` → user ne click kiya
* `dblclick` → double click
* `mouseover` → mouse element ke upar gaya
* `mouseout` → mouse element se bahar gaya
* `keydown` → keyboard key press hui
* `keyup` → keyboard key release hui
* `submit` → form submit hua
* `load` → webpage load hui

---

# 🎯 2. `addEventListener()`

Event ko element ke saath attach karne ke liye use hota hai.

### Syntax

```javascript
element.addEventListener('event', function(e) {
    // code
});
```

### Example

```javascript
document.querySelector('#btn').addEventListener('click', function(e) {
    console.log("Button clicked");
});
```

### Hinglish

Jab `#btn` par click hoga, andar wala function execute hoga.

---

# 🎯 3. Event Object `e`

Event hone par browser automatically ek **event object** provide karta hai.

```javascript
element.addEventListener('click', function(e) {
    console.log(e);
});
```

`e` ke andar event se related information hoti hai.

### Important Properties

```javascript
e.target
e.currentTarget
e.type
e.clientX
e.clientY
e.screenX
e.screenY
e.altKey
e.ctrlKey
e.shiftKey
```

---

# ⭐ 4. `e.target`

`e.target` batata hai ki **actually kis element par event hua**.

### Example

```javascript
document.querySelector('#images').addEventListener('click', function(e) {
    console.log(e.target);
});
```

Agar image par click kiya:

```html
<img id="owl">
```

Then:

```javascript
e.target
```

→ `<img id="owl">`

### Useful

```javascript
e.target.id
```

Output:

```text
owl
```

```javascript
e.target.tagName
```

Output:

```text
IMG
```

### 🧠 Remember

> **target = kis element par click hua?**

---

# ⭐ 5. `e.currentTarget`

`currentTarget` batata hai ki **jis element par event listener laga hua hai**.

Example:

```javascript
document.querySelector('#images').addEventListener('click', function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
});
```

Agar image click ki:

```text
e.target        → IMG
e.currentTarget → UL (#images)
```

### 🧠 Remember

> **target = actual clicked element**
> **currentTarget = listener wala element**

---

# 🔥 6. Event Bubbling

Event bubbling mein event **child element se parent element ki taraf move karta hai**.

Example:

```text
IMG
 ↓
LI
 ↓
UL
 ↓
BODY
 ↓
DOCUMENT
```

Agar `IMG` par click kiya, event parent elements tak bubble karega.

### Example

```javascript
document.querySelector('#images').addEventListener('click', function() {
    console.log("UL clicked");
});

document.querySelector('#owl').addEventListener('click', function() {
    console.log("OWL clicked");
});
```

Owl par click karne par:

```text
OWL clicked
UL clicked
```

### 🧠 Remember

> **Bubbling = Child → Parent**

---

# 🛑 7. `stopPropagation()`

Event ko parent elements tak propagate/bubble hone se rokta hai.

```javascript
document.querySelector('#owl').addEventListener('click', function(e) {
    e.stopPropagation();

    console.log("Owl clicked");
});
```

Ab click event UL tak nahi jayega.

### Without `stopPropagation()`

```text
IMG → LI → UL → BODY
```

### With `stopPropagation()`

```text
IMG → 🛑 STOP
```

### 🧠 Remember

> `stopPropagation()` = **event ko aage mat jaane do**

---

# 🛑 8. `preventDefault()`

Browser ke **default behaviour ko stop** karta hai.

Example:

```html
<a href="https://google.com" id="google">
    Google
</a>
```

Normally Google link par click karne se Google open hoga.

But:

```javascript
document.querySelector('#google').addEventListener('click', function(e) {
    e.preventDefault();

    console.log("Google clicked");
});
```

Ab Google open nahi hoga.

### 🧠 Remember

> `preventDefault()` = **browser ka default action rokna**

---

# ⭐ 9. Event Delegation

Event delegation mein har child element par alag listener lagane ke bajay **parent element par ek listener** lagate hain.

### ❌ Without Event Delegation

```javascript
document.querySelector('#owl')
    .addEventListener('click', function() {});

document.querySelector('#river')
    .addEventListener('click', function() {});

document.querySelector('#japan')
    .addEventListener('click', function() {});
```

Bahut saare listeners ho jayenge.

### ✅ With Event Delegation

```javascript
document.querySelector('#images')
    .addEventListener('click', function(e) {

        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
        }

    });
```

Ek hi listener parent `UL` par hai.

### Structure

```text
UL (#images)
│
├── LI
│   └── IMG
│
├── LI
│   └── IMG
│
├── LI
│   └── IMG
│
└── LI
    └── IMG
```

Image click:

```text
IMG
 ↓
UL listener
 ↓
e.target = IMG
```

### 🧠 Remember

> **Event Delegation = Parent handles children's events**

---

# 🗑️ 10. `remove()`

DOM se element remove karne ke liye use hota hai.

```javascript
element.remove();
```

Example:

```javascript
document.querySelector('#owl').remove();
```

Owl image DOM se remove ho jayegi.

---

# 🎯 11. `parentNode`

Kisi element ka parent element return karta hai.

Example:

```html
<li>
    <img id="owl">
</li>
```

```javascript
e.target.parentNode
```

Result:

```text
LI
```

---

# 💻 12. Complete Practical Example

HTML:

```html
<ul id="images">

    <li>
        <img width="200px" id="owl" src="owl.jpg">
    </li>

    <li>
        <img width="200px" id="river" src="river.jpg">
    </li>

    <li>
        <img width="200px" id="japan" src="japan.jpg">
    </li>

</ul>
```

JavaScript:

```javascript
document.querySelector('#images')
    .addEventListener('click', function(e) {

        console.log(e.target.tagName);

        if (e.target.tagName === 'IMG') {

            console.log(e.target.id);

            let removeIt = e.target.parentNode;

            removeIt.remove();
        }

    });
```

### 🔍 Code ka flow

Suppose `owl` image par click kiya:

```text
1. User clicks OWL
        ↓
2. Event occurs on IMG
        ↓
3. Event bubbles to UL
        ↓
4. e.target = IMG
        ↓
5. e.target.tagName = "IMG"
        ↓
6. Condition TRUE
        ↓
7. e.target.id = "owl"
        ↓
8. parentNode = LI
        ↓
9. LI.remove()
        ↓
10. OWL image disappears
```

---

# 📋 13. Important Event Properties

| Property          | Meaning                          |
| ----------------- | -------------------------------- |
| `e.target`        | Actual element jis par event hua |
| `e.currentTarget` | Element jiske paas listener hai  |
| `e.type`          | Event ka type                    |
| `e.clientX`       | Mouse X position in viewport     |
| `e.clientY`       | Mouse Y position in viewport     |
| `e.screenX`       | Mouse X position on screen       |
| `e.screenY`       | Mouse Y position on screen       |
| `e.altKey`        | Alt key pressed hai ya nahi      |
| `e.ctrlKey`       | Ctrl key pressed hai ya nahi     |
| `e.shiftKey`      | Shift key pressed hai ya nahi    |

---

# ⚡ 14. Most Important Methods

| Method               | Use                               |
| -------------------- | --------------------------------- |
| `addEventListener()` | Event attach karna                |
| `preventDefault()`   | Default browser action stop karna |
| `stopPropagation()`  | Event bubbling stop karna         |
| `remove()`           | Element remove karna              |
| `querySelector()`    | Element select karna              |
| `getElementById()`   | ID se element select karna        |

---

# 🧠 15. One-Minute Revision

```text
EVENT
↓
Webpage par hone wala action

addEventListener()
↓
Event ko listen/attach karta hai

e.target
↓
Actually kis element par event hua?

e.currentTarget
↓
Kis element par listener laga hai?

Event Bubbling
↓
Child → Parent

stopPropagation()
↓
Bubbling stop

preventDefault()
↓
Browser ka default action stop

parentNode
↓
Parent element find

remove()
↓
Element delete

Event Delegation
↓
Parent ek listener se multiple children
handle karta hai
```

---

# 🔥 SUPER SHORT CHEAT SHEET

```javascript
// Select
document.querySelector('#id');

// Event
element.addEventListener('click', function(e) {

    // Actual clicked element
    console.log(e.target);

    // ID
    console.log(e.target.id);

    // Tag
    console.log(e.target.tagName);

    // Parent
    console.log(e.target.parentNode);

    // Stop default browser action
    e.preventDefault();

    // Stop bubbling
    e.stopPropagation();

    // Remove element
    e.target.remove();
});
```

## 🎯 Memory Trick

> **TARGET → CLICKED**
> **CURRENTTARGET → LISTENER**
> **BUBBLING → CHILD → PARENT**
> **PREVENT → DEFAULT ACTION STOP**
> **STOP → PROPAGATION STOP**
> **REMOVE → ELEMENT DELETE**
> **DELEGATION → PARENT HANDLES CHILD**

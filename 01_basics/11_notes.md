# 🚀 JavaScript Variables — `var`, `let`, and `const`

Understanding variables properly is one of the most important JavaScript fundamentals.

---

# 🔹 `var`

- Function Scoped
- Can be reassigned
- Can be redeclared
- Hoisted to the top
- Accessible before declaration as `undefined`
- Does NOT support Temporal Dead Zone (TDZ)
- Mostly used in old JavaScript
- Avoid in modern development

### Example

```javascript
var username = "Bunny";

username = "Mr Bunny";

console.log(username);
```

---

# 🔹 `let`

- Block Scoped
- Can be reassigned
- Cannot be redeclared in the same scope
- Hoisted but stays inside TDZ
- Accessing before declaration throws error
- Best when values need to change

### Example

```javascript
let score = 10;

score = 20;

console.log(score);
```

---

# 🔹 `const`

- Block Scoped
- Cannot be reassigned
- Cannot be redeclared
- Hoisted but stays inside TDZ
- Must be initialized during declaration
- Preferred choice in modern JavaScript

### Example

```javascript
const pi = 3.14;

console.log(pi);
```

---

# ⚠️ Important Interview Point

`const` does NOT make arrays or objects immutable.

It only prevents reassignment of the reference.

### Example

```javascript
const arr = [1, 2];

arr.push(3);

console.log(arr);
```

### Output

```javascript
[1, 2, 3]
```

---

# ✅ Best Practice

```javascript
const -> use by default
let   -> when value changes
var   -> avoid in modern JavaScript
```

---

# 🎯 What Interviewers Expect

Interviewers usually check whether you understand:

- Scope
- Hoisting
- Temporal Dead Zone (TDZ)
- Reassignment vs Redeclaration
- Real-world usage
- Why `var` is avoided
- Why `const` is preferred

---

# 🏁 Final Takeaway

```javascript
Use const by default.
Use let when values change.
Avoid var in modern JavaScript.
```
# Working with XMLHttpRequest and API Requests

A structured guide demonstrating how to make network requests in native JavaScript using `XMLHttpRequest`, tracking request lifecycle states, and handling JSON responses.

## 🚀 1. XMLHttpRequest readyState Stages

The `XMLHttpRequest.readyState` property returns the current state of the request. Below is a reference table explaining the **5 readyState stages**:

| State | Name | Description |
| :---: | :--- | :--- |
| **0** | `UNSENT` | Client has been created. `open()` has not been called yet. |
| **1** | `OPENED` | `open()` has been called. The request is configured. |
| **2** | `HEADERS_RECEIVED` | `send()` has been called. Headers and HTTP status are now available. |
| **3** | `LOADING` | Downloading data. `responseText` holds partial data. |
| **4** | `DONE` | The operation is complete. Data is fully downloaded. |

---

## 💻 2. Code Example

```javascript
const requestUrl = 'https://api.github.com/users/hiteshchoudhary';
const xhr = new XMLHttpRequest();

xhr.open('GET', requestUrl);

xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        console.log(typeof data);
        console.log(data.followers);
    }
}

xhr.send();
```

---

## 🔍 3. JavaScript Logic Breakdown

### **Initialization**
* **`requestUrl`**: Defines the target API endpoint (GitHub's public API for the user `hiteshchoudhary`).
* **`new XMLHttpRequest()`**: Creates a new instance of the `XMLHttpRequest` object to construct and manage the network request.

### **Configuration**
* **`xhr.open('GET', requestUrl)`**: Configures the HTTP request method (`GET`) and the destination URL. Executing this method transitions the `readyState` to **1 (OPENED)**.

### **State Tracking & Data Handling**
* **`xhr.onreadystatechange`**: An event handler that triggers automatically every time the `readyState` value changes (from states 1 through 4).
* **`console.log(xhr.readyState)`**: Outputs the current numeric state to the browser console for tracking purposes.
* **`if (xhr.readyState === 4)`**: A conditional check ensuring execution halts until the operation is **completely finished**.
* **`JSON.parse(this.responseText)`**: Converts the raw JSON string received from the server into a standard JavaScript object so its properties can be accessed.
* **`console.log(data.followers)`**: Extracts and prints the user's total GitHub follower count directly to the console.

### **Execution**
* **`xhr.send()`**: Fires off the request, establishing a connection to the GitHub server.

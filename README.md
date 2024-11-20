
# Asynchronous Programming Exercises

This repository contains an assignment demonstrating various asynchronous programming techniques in JavaScript, including callbacks, promises, and async/await. Each technique is implemented using a button and a div element to fetch and display data dynamically from the API.


## Features

- Demonstrates asynchronous operations using:
  - **Callbacks**
  - **Promises**
  - **Async/Await**  
- Includes error handling for promises and async/await, such as network issues and timeouts.  
- Clean and minimal HTML/CSS design for each exercise.  


## Run Locally

1. Clone the project

```bash
  git clone https://link-to-project
```

2. Open any of the HTML files (callbacks.html, promises.html, or async-await.html) in a browser.

3. Click the button on the page to execute the asynchronous functionality.


## Tasks


### *1. Callback Implementation (`callbacks.html`)*  
- Simulates a delay of 5 seconds using a callback function.
- Fetches and displays post titles from the API.  

### *2. Promise Implementation (`promises.html`)* 
- Displays "Loading..." while the promise is pending.  
- Fetches and displays post titles once the promise is resolved.  
- Includes a timeout mechanism to reject the promise after 5 seconds.  

### *3. Async/Await Implementation (`async-await.html`)*
- Uses `async/await` to fetch data.  
- Displays "Loading..." while fetching the data.  
- Handles errors like timeouts and network issues gracefully.  

## API Endpoint

https://dummyjson.com/posts
## Screenshots

![Screenshot 2024-11-20 112655](https://github.com/user-attachments/assets/d4bf2b59-df52-4376-9871-c8b6507148c1)

![Screenshot 2024-11-20 112813](https://github.com/user-attachments/assets/1f8ca2a4-cd6d-4ba9-a43c-1a2367421b38)

![Screenshot 2024-11-20 112853](https://github.com/user-attachments/assets/ec28956a-0da6-4d5a-8d1e-dc8e1636417c)



## Error Handling

 
 **Network Issues**:
   - Caught using `catch` blocks to display error messages.  
 **Timeouts**:
   - Implemented with `Promise.race()` to reject after 5 seconds.  
 **HTTP Errors**:
   - Handled by checking `response.ok` in the fetch call.  


## How to Contribute

1. Fork the repository.  
2. Create a new branch.  
3. Commit your changes and push them to the branch.  
4. Open a pull request for review.  


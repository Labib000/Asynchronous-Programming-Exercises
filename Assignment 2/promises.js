// Function to fetch posts using a Promise with error handling and timeout
function fetchPostsWithTimeout(timeout = 5000) {
    return new Promise((resolve, reject) => {
        // Set a timeout to reject the promise if it takes too long
        const timeoutId = setTimeout(() => {
            reject("Operation timed out.");
        }, timeout);

        // Fetching posts from the API
        fetch("https://dummyjson.com/posts")
            .then(response => {
                // Clear the timeout if the fetch succeeds
                clearTimeout(timeoutId);

                // Check if the response is OK, else reject
                if (!response.ok) {
                    reject("Failed to fetch posts.");
                }
                return response.json();
            })
            // Resolve with the posts data
            .then(data => {
                resolve(data.posts); 
            })
            // Reject with the error message
            .catch(error => {
                reject(error.message); 
            });
    });
}

// Event listener for the button
document.getElementById("fetchPosts").addEventListener("click", function () {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = "Loading...";

    // Use the fetchPostsWithTimeout function
    fetchPostsWithTimeout()
        .then(posts => {
            // On success, display the fetched posts
            outputDiv.innerHTML = "<h3>Fetched Posts:</h3>";
            const ul = document.createElement("ul");
            posts.forEach(post => {
                const li = document.createElement("li");
                li.textContent = post.title;
                ul.appendChild(li);
            });
            outputDiv.appendChild(ul);
        })
        .catch(error => {
            // On failure, display the error message
            outputDiv.textContent = "Error: " + error;
        });
});

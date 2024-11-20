// This function makes the program wait for 5 seconds
function waitFiveSeconds(whatToDoNext) {
    // setTimeout is like a timer - it waits before executing
    setTimeout(whatToDoNext, 5000);  // 5000 means 5 seconds
}

// This function gets posts from the internet and shows them
function getAndShowPosts() {
    // Selecting the div where I want to show the posts
    let outputBox = document.getElementById("output");
    
    // Fetching posts from the API
    fetch("https://dummyjson.com/posts")
        // When we get the data, turning it into something that is readable 
        .then(function(answer) {
            return answer.json();
        })
        // Now using the received data
        .then(function(data) {
            // First, adding a title to page
            outputBox.innerHTML = "<h3>Here are the posts I found:</h3>";
            
            // making a list
            let listOfPosts = "<ul>";
            
            // Going through each post one by one
            data.posts.forEach(function(post) {
                // Adding each post title to the list
                listOfPosts = listOfPosts + "<li>" + post.title + "</li>";
            });
            
            // Finishing the list
            listOfPosts = listOfPosts + "</ul>";
            
            // Showing the list on the page
            outputBox.innerHTML = outputBox.innerHTML + listOfPosts;
        })
        // Error Handling, showing an error message
        .catch(function(error) {
            outputBox.innerHTML = "Oops! Something went wrong: " + error.message;
        });
}

// When someone clicks the button...
let button = document.getElementById("runCallback");
button.onclick = function() {
    // Selecting the output div 
    let outputBox = document.getElementById("output");
    
    // Tell user to wait
    outputBox.innerHTML = "Hold on! Getting posts in 5 seconds...";
    
    // Wait 5 seconds, then get the posts
    waitFiveSeconds(getAndShowPosts);
};
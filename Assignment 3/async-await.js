// Geting the HTML elements
let button = document.getElementById("fetchData");
let screen = document.getElementById("output");

// This function checks if the system has internet
function checkInternet() {
    if (!navigator.onLine) {
        screen.innerHTML = "No internet! Please connect to the internet and try again.";
        return false;
    }
    return true;
}

// This is the main function that gets posts
async function getPosts() {
    // First check if the system has internet
    if (!checkInternet()) {
        return;  // Stop here if no internet
    }

    // Tell user system is working on it
    screen.innerHTML = "Getting posts... Please wait!";
    
    try {
        // Trying to get the posts, but don't wait forever
        let gotPosts = false;
        
        // Set up a timer to wait 5 seconds
        setTimeout(function() {
            if (!gotPosts) {
                screen.innerHTML = "It's taking too long! Please try again.";
            }
        }, 5000);  // 5000 means 5 seconds
        
        // Fetching posts from the API
        let answer = await fetch("https://dummyjson.com/posts");
        gotPosts = true;
        
        // If we got to this point, check if the answer is readable
        if (answer.ok) {
            // Turning the answer into something that can be read
            let data = await answer.json();
            
            // Makeing an empty string to hold all the titles
            let allTitles = "";
            
            // Add each title to the string
            for(let i = 0; i < data.posts.length; i++) {
                allTitles = allTitles + (i + 1) + ". " + data.posts[i].title + "\n";
            }
            
            // Show all the titles
            screen.innerHTML = allTitles;
            
        } else {
            // If something went wrong, show a simple error message
            if (answer.status === 404) {
                screen.innerHTML = "Couldn't find the posts. Maybe try again?";
            } else if (answer.status === 500) {
                screen.innerHTML = "The website isn't working right now. Try again later!";
            } else {
                screen.innerHTML = "Oops! Something went wrong. Try again!";
            }
        }
        
    } catch (error) {
        // If anything goes wrong, show a simple message
        screen.innerHTML = "Something went wrong! Here's what happened: " + error.message;
    }
}

// When button is clicked, try to get posts
button.onclick = getPosts;

// Check if internet comes back
window.onoffline = function() {
    screen.innerHTML = "Your internet went away! Please reconnect!";
};

window.ononline = function() {
    screen.innerHTML = "Your internet is back! Click the button to try again!";
};
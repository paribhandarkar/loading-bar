# Loading Bar

This project is a simple loading bar that fills up over time. It was created using HTML, CSS, and JavaScript, and it uses a combination of a counter and a loading bar to visually indicate progress. The loading bar is initially empty, and the counter displays the current percentage of completion. The counter and the loading bar are updated once every 20 milliseconds until the counter reaches 100%, at which point the loading bar is completely filled and the process is complete. This project is a great way to practice working with HTML, CSS, and JavaScript, and it can be customized in many ways to suit different needs and purposes.

## Demo

You can try out the application by visiting [this link](https://paribhandarkar.github.io/loading-bar/).

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To get started with this project, clone the repository and open the `index.html` file in your preferred web browser.

## New Things I Learned

Learned the difference between `setTimeout()` and `setInterval()`, when to use each, and what the consequences of using each could be.

The consequences of using each are that **`setInterval()`** can cause multiple instances of a function to be running simultaneously, which can lead to unexpected behavior or performance issues. On the other hand, **`setTimeout()`** ensures that each instance of the function completes before the next one is called. This means that using **`setTimeout()`** can be better in certain situations, such as updating a progress bar where you want to ensure that each step completes before the next one is called.

In general, it's important to consider the context in which you're using these methods and choose the one that's best suited for the task at hand.

## Challenges I faced

When I initially used **`setInterval()`** in my code, I noticed that the counter was continuously increasing and the loading bar was never stopping. This happened because **`setInterval()`** schedules a function to be executed repeatedly at a specified interval, regardless of whether the previous function call has completed or not. This means that multiple instances of the function can run simultaneously, causing unexpected behavior or performance issues.

However, later i realized that the **`setTimeout()`** method must be used instead, which schedules a function to be executed once after a specified delay. This ensured that each instance of the function had to complete before the next one was called. The counter and loading bar were updated once every 20 milliseconds until the counter reached 100%, at which point the function stopped running.

To fix the issue with **`setInterval()`**, I would need to ensure that the previous call to the function had completed before scheduling the next one. This can be done by using a boolean variable to indicate whether the function is currently running, and to only schedule a new call to the function if it's not already running. Alternatively, I could use **`clearInterval()`** to stop the interval once the counter reaches 100%.

![Untitled video - Made with Clipchamp](https://github.com/paribhandarkar/loading-bar/assets/76446574/66c04064-c0ac-474c-bbe5-5c43485eb2b3)

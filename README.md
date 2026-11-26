# Simple Web Form Project

## Project Structure
This project is built using pure HTML, CSS, and Vanilla JavaScript (no frameworks). It consists of four main files:
- `index.html`: The structure of the web page, containing the form with three input fields (Name, Email, Message).
- `style.css`: The styling file, making the form responsive (no horizontal scroll on 375px screens) and adding hover effects to the button.
- `script.js`: The logic file, handling form validation and submission events.
- `README.md`: This documentation file.

## File Functions
- **index.html**: Defines the DOM elements, including the form, input fields, and the submit button.
- **style.css**: Centers the form on the screen, adds a clean card design, and ensures it fits on mobile screens.
- **script.js**: Listens for the form's `submit` event. It checks if the Name and Message fields are not empty, and if the Email contains a valid format (e.g., `user@example.com`). It displays error messages inside the page if validation fails.

## Why `preventDefault` is used?
The `event.preventDefault()` method is used inside the submit event listener to stop the browser from performing its default action, which is reloading the page when a form is submitted. By preventing this default behavior, we allow the JavaScript code to handle the submission gracefully, show success/error messages dynamically without refreshing the page, and maintain the user's input until it is validated.

## How to Run
1. Open the terminal in the project directory.
2. Start a local server using Python:
   ```bash
   python3 -m http.server 8000
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const postButton = document.querySelector('#post')
const msgDiv = document.querySelector('#warning');

// renderLastPosted();

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
}


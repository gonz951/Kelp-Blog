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

postButton.addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const blogTitle = document.querySelector('#title').value;
    const blogContent = document.querySelector('#content').value;

    if (username === '') {
        displayMessage('error', 'Please, add a username.');
    } else if (blogTitle === '') {
        displayMessage('error', 'Please, add a blog title.');
    } else if (blogContent === '') {
        displayMessage('error', 'Please, add blog content.')
    } else {
        displayMessage('success', 'Posted!');

        

    }

})


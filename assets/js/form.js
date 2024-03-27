const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const postButton = document.querySelector('#post');
const warningDiv = document.querySelector('#warning');

// const getData = 

// renderLastPosted();

function displayMessage(type, message) {
    warningDiv.textContent = message;
    warningDiv.setAttribute('class', type);
}

postButton.addEventListener('click', function(event) {
    event.preventDefault();

    const post = {
        username: usernameInput.value, 
        title: titleInput.value,
        content: contentInput.value,
    }
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

    localStorage.setItem('post', JSON.stringify(post));

})


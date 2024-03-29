const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const postButton = document.querySelector('#post');
const warningDiv = document.querySelector('#warning');

const getData = localStorage.getItem('postData');


// renderLastPosted();

let posts = [ ]

if (getData) {
    posts = JSON.parse(getData)
} 
console.log(getData)

function displayMessage(type, message) {
    warningDiv.textContent = message;
    warningDiv.setAttribute('class', type);
}

function renderLastPosted() {
    // should this even have anything, is this needed
}

postButton.addEventListener('click', function(event) {
    event.preventDefault();
    

    const postData = {
        username: usernameInput.value, 
        title: titleInput.value,
        content: contentInput.value
    }
    const usernameBox = document.querySelector('#username').value;
    const titleBox = document.querySelector('#title').value;
    const contentBox = document.querySelector('#content').value;

    if (usernameBox === '') {
        displayMessage('error', 'Please, add a username.');
    } else if (titleBox === '') {
        displayMessage('error', 'Please, add a blog title.');
    } else if (contentBox === '') {
        displayMessage('error', 'Please, add blog content.');
    } else {
        displayMessage('success', 'Posted!');
        console.log(posts)

        localStorage.setItem('postData', JSON.stringify(posts));
        posts.push(postData);
        window.location.href('./blog.html');
    }
    
});


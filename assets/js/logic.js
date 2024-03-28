let posts = JSON.parse(localStorage.getItem('postData'));

// console.log(posts[0].title);

function getBlogs() {
    document.getElementById('blog-title').textContent = posts[0].title;
    document.getElementById('blog-content').textContent = posts[0].content;
    document.getElementById('blog-username').textContent = posts[0].username;
}

getBlogs();
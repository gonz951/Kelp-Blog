// let posts = JSON.parse(localStorage.getItem('postData'));

// console.log(posts[0].title)

// function getBlogs() {
//     document.getElementById('title').textContent = posts[0].title;
// }

// function postBubble() {

//     const blogTemplate = `
//     <section class="blogpost">
//                 <h3><span class="blog-title">${title}</span></h3>
//                 <p><span class="blog-content">${content}</span></p>
//                 <h4><span class="blog-username">${username}</span></h4>
//             </section>`

// }
 
// postBubble();


function getBlogs() {
    document.getElementById('blog-title').textContent = posts[0].title;
    document.getElementById('blog-content').textContent = posts[0].content;
    document.getElementById('blog-username').textContent = posts[0].username;
}

getBlogs();
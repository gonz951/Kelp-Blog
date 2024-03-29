//let posts = JSON.parse(localStorage.getItem('postData'));
let posts = []

if (getData) {
    posts = JSON.parse(getData)
} 

// console.log(posts[0].title);

function getBlogs() {
    document.getElementById('blog-title').textContent = posts[0].title;
    document.getElementById('blog-content').textContent = posts[0].content;
    document.getElementById('blog-username').textContent = posts[0].username;
}

getBlogs();

// if (!posts) {

// } else {

//     for (const post of posts (array)) {
//         const postDiv = document.createElement('article')
//         const postTitle = document.createElement('h3');
        
//     }
//     for (let i = 0; i < posts.length; i++) {
//         const element = array[index];
        
//     }
// }
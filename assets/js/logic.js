const themeSwitcher = document.querySelector('#theme-toggle');
const container = document.querySelector('.container');

let mode = 'light';

themeSwitcher.addEventListener('click', function() {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
    } else {
        mode = 'light';
        container.setAttribute('class', 'light');
    }
})




// console.log(posts[0].title);


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
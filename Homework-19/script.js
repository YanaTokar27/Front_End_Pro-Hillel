const submit = document.querySelector('.submit');
const getComment = document.querySelector('.getComment')
const field = document.querySelector('.field');
let id = '';
const title = document.querySelector('.title');
const body = document.querySelector('.body');
const commentData = document.querySelector('.commentData');
const error = document.querySelector('.error');

submit.addEventListener('click', function () {
    id = Number(field.value);

    if (id > 0 && id <= 100) {
        error.textContent = '';
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(data => data.json())
            .then(post => {
                title.textContent = post.title
                body.textContent = post.body
            })
            .then(function () {
                getComment.classList.remove('disable')
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    } else {
        clean();
        error.textContent = 'Invalid ID'
    }
})

const clean = function () {
    title.textContent = '';
    body.textContent = '';
    getComment.classList.add('disable')
    commentData.textContent = '';
}

getComment.addEventListener('click', function () {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(data => data.json())
        .then(comments => {
            commentData.textContent = '';
            comments.forEach(comment => {
                const h3 = document.createElement('h3');
                h3.textContent = comment.name;
                const p = document.createElement('p');
                p.textContent = comment.body;
                commentData.appendChild(h3);
                commentData.appendChild(p);
            });
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
});


















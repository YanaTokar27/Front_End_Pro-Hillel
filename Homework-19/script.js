// const field = document.querySelector('.field');
const submit = document.querySelector('.submit');
// const id = Number(field.value);
const getComment = document.querySelector('.getComment')

submit.addEventListener('click', function () {
    const field = document.querySelector('.field');
    const id = Number(field.value);

    if (id && id <= 100) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(data => data.json())
            .then(post => {
                const title = document.querySelector('.title');
                const body = document.querySelector('.body')
                title.textContent = post.title
                body.textContent = post.body
            })
            .then(function () {
                const getComment = document.querySelector('.getComment')
                getComment.classList.remove('disable')

            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }
})

getComment.addEventListener('click', function () {
    const field = document.querySelector('.field');
    const id = Number(field.value);

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(data => data.json())
        .then(comments => {
            const commentData = document.querySelector('.commentData');
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


















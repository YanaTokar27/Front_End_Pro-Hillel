const container = document.querySelector('.container');
const input = document.querySelector('input');

input.addEventListener('focus', function () {
    const ghost = document.createElement('div');
    ghost.setAttribute('id', 'ghost')

    container.appendChild(ghost);
})

input.addEventListener('blur', function () {
    const ghost = document.getElementById('ghost');
    container.removeChild(ghost)
})



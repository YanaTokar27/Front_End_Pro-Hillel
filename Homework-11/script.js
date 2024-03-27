const container = document.querySelector('.container');
const input = document.querySelector('input');

input.addEventListener('focus', function () {
    const ghost = document.createElement('div');
    ghost.setAttribute('id', 'ghost')

    ghost.style.background = 'green';
    ghost.style.height = '50px';
    ghost.style.width = '50px';


    container.appendChild(ghost);
})

input.addEventListener('blur', function () {
    const ghost = document.getElementById('ghost');
    container.removeChild(ghost)
})



const task1 = () => {          //querySelector
    let nameLesson = document.querySelector('.title');
    nameLesson.style.color = 'red';
    nameLesson.style.fontSize = '18px';
    nameLesson.style.fontStyle = 'italic';
}

const task2 = () => {              //.style
    //знайти елемент з класом list
    //знайти другий li і змінити в ньому текст
    //зробити текст в div червоним

    document.querySelector('.list').style.color = 'blue';

    // document.querySelector('li:nth-child(2)').textContent = 'JS';   - span в html 
    document.querySelector('li:nth-of-type(2)').innerHTML = 'PHP'

    document.querySelector('.name').style.color = 'green';
}

const task3 = () => {            //createElement
    //додавання нового елементу li

    const li = document.createElement('li');
    let parent = document.querySelector('.list');
    parent.appendChild(li);
    li.textContent = 'New Li';

    //видалення елементу
    // parent.removeChild(li);
}

const task4 = () => {             //addEventListener
    document.querySelector('#elem').addEventListener("dblclick", function () {
        this.value = "Don't click me again";
    });

    function handler() {
        alert('Hello!');
    }
    document.querySelector('#elem2').addEventListener("mouseover", handler);
}

const task5 = () => {            //event.target або this 
    document.querySelector('#elem3').addEventListener("click", function (event) {
        console.log(event.target);
    });
}

const task6 = () => {         //event - input
    document.querySelector('#elem4').addEventListener("input", function (event) {
        console.log(event.target.value);
    });
}

const task7 = () => {         //делегування
    var table = document.querySelector('table');

    table.addEventListener('click', function (event) {
        var target = event.target;     //найглибший елемент в таблиці
        if (target.tagName == 'TD') {
            target.classList.add('color');   //target.classList.toggle('color');
        }
        console.dir(event.target);
    })
}

const task8 = () => {         //відміняє дефолтну поведінку браузеру
    document.querySelector('a').addEventListener("click", function (event) {
        event.preventDefault();
    });
}

task1();
task2();
task3();
task4();
task5();
task6();
task7();
task8();


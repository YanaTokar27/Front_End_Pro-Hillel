const task1 = () => {             //XMLHttpRequest()
    let xhr = new XMLHttpRequest();
    const newPost = {
        name: 'Yana',
        text: 'New User'
    }

    xhr.open('POST', 'https://6628f7e654afcabd0737a2a7.mockapi.io/posts', false);
    xhr.send(JSON.stringify(newPost));

    if (xhr.status != 200) {
        // обробити помилку
        console.log('Помилка ' + xhr.status + ': ' + xhr.statusText);
    } else {
        // вивести результат
        console.log(JSON.parse(xhr.responseText));
    }
}

const task2 = () => {   //якщо зробити попередній код асинхронним
    let xhr = new XMLHttpRequest();
    const newPost = {
        name: 'Yana',
        text: 'New User'
    }

    xhr.open('POST', 'https://6628f7e654afcabd0737a2a7.mockapi.io/posts');
    xhr.send(JSON.stringify(newPost));

    xhr.onload = function () {
        //onload - відпрацює тільки тоді, коли сторінка завантажиться і отримає відповідь
        if (xhr.status != 200) {
            // обробити помилку
            console.log('Помилка ' + xhr.status + ': ' + xhr.statusText);
        } else {
            // вивести результат
            console.log(JSON.parse(xhr.responseText));
        }
    }

}

const task3 = () => {       //fetch - повертає проміс, по дефолту стоїть get
    const promise = fetch('https://6628f7e654afcabd0737a2a7.mockapi.io/posts');
    // const promise = fetch('https://6628f7e654afcabd0737a2a7.mockapi.io/posts', { method: 'GET' });
}

const task4 = () => {     //практика на learn.javascript
    fetch('https://learn.javascript.ru/article/promise-chaining/user.json')
        .then(response => response.json())
        .then(user => console.log(user));
}

const task5 = () => {      //практика на mockAPI
    fetch('https://6628f7e654afcabd0737a2a7.mockapi.io/posts')
        .then(response => response.json())
        .then(posts => console.log(posts));
}

const task6 = () => {   //практика з аватаром свого профіля на github
    // fetch('https://api.github.com/users/YanaTokar27')
    fetch('https://api.github.com/users/user2')

        .then(data => data.json())
        .then(user => {
            const avatarUrl = user.avatar_url;
            document.querySelector('img').setAttribute('src', avatarUrl);

            document.querySelector('.loader').style.display = 'none';
            document.querySelector('img').style.display = 'block';
        });
}

const task7 = () => {    //практика вивести імена користувачів
    fetch('https://6628f7e654afcabd0737a2a7.mockapi.io/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(posts => {
                const divEl = document.createElement('div');
                divEl.textContent = posts.name;

                document.querySelector('body').appendChild(divEl);
            });
        })
}

const task8 = () => {  //приклад fetch з методом POST
    const url = 'https://6627ec7eb625bf088c0a46ad.mockapi.io/posts';

    const postData = {
        createdAt: "2024-04-23T07:35:33.975Z",
        name: "Test user",
        text: "Test Post",
        id: "18"
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}


// task1();
// task2();
// task3();
// task4();
// task5();
// task6();
// task7();
task8();


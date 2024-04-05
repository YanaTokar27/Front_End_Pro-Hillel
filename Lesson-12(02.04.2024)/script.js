const task1 = () => {
    const anakinSkywalker = 'Anakin Skywalker';
    const lukeSkywalker = 'Luke Skywalker';

    const obj = {
        lukeSkywalker,
        anakinSkywalker,
        episodeOne: 1,
        twoJediWalkIntoACantina: 2,
        episodeThree: 3,
        mayTheFourth: 4,
    };
    console.log(obj);
}

const task2 = () => {         //перетворення обʼєкту в строку (JSON.stringify)
    const obj = {
        age: 18,
        hobby: 'music'
    }
    console.log(JSON.stringify(obj));
}

const task3 = () => {        //перетворення JSON в обʼєкт (JSON.parse)
    const obj = {
        age: 18,
        hobby: 'music'
    }

    const json = JSON.stringify(obj);
    console.log(JSON.parse(json));
}

const task4 = () => {                 //практика
    const form = document.querySelector("form");
    const userNameInput = document.querySelector("#user-name");
    const tbody = document.querySelector("tbody");
    const editNameForm = document.querySelector("#edit-user");
    const editNameInput = document.querySelector("#edit-user input");
    const editNameButton = document.querySelector("#edit-user button");

    function buildTd(textButton, textAttribute) {
        const td = document.createElement("td");
        const button = document.createElement("button");
        button.setAttribute("data-name", textAttribute);

        button.textContent = textButton;
        td.append(button);

        return td;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const value = userNameInput.value;
        const uuid = +new Date();

        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.textContent = value;

        tr.setAttribute("data-uuid", uuid);
        tr.append(td,
            buildTd("View", "view"),
            buildTd("Edit", "edit"),
            buildTd("Delete", "delete"));

        tbody.append(tr);
        userNameInput.value = "";
    }
    );

    tbody.addEventListener("click", (event) => {
        const targetButton = event.target.getAttribute("data-name");
        const targetRow = event.target.closest("tr");
        const deletedUsers = JSON.parse(localStorage.getItem("deletedUsers")) || [];

        switch (targetButton) {
            case "view":
                console.log("User:", targetRow.querySelector("td").textContent);
                break;
            case "edit":
                editNameInput.removeAttribute("disabled");
                editNameButton.removeAttribute("disabled");
                editNameInput.focus();

                editNameInput.value = targetRow.querySelector("td").textContent;
                localStorage.setItem("uuid", targetRow.getAttribute("data-uuid"));
                break;
            case "delete":
                deletedUsers.push(targetRow.querySelector("td").textContent);
                localStorage.setItem("deletedUsers", JSON.stringify(deletedUsers));
                targetRow.remove();
                break;
            default: break;
        }
    }
    );

    editNameForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const value = editNameInput.value;
        const uuid = localStorage.getItem("uuid");

        document.querySelector(`tr[data-uuid="${uuid}"] td`).textContent = value;
        editNameInput.setAttribute("disabled", "");
        editNameButton.setAttribute("disabled", "");
        editNameInput.value = "";
        localStorage.removeItem("uuid");
    }
    );
}



// task1();
// task2();
// task3();
task4();
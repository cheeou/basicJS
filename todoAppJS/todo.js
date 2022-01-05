const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos")); // array

if (todos) {
    todos.forEach(  => {
        add(todo);
    })
}

// list add
form.addEventListener("submit", function (event) {
    event.preventDefault(); // 새로고침 막아줌
    //console.log(input.value);
    add();
});

function add(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo;
        console.log(todoText);
    }

    if (todoText) { //True
        const li = document.createElement("li"); // Create Tag

        li.innerText = todoText; // add text value
        li.classList.add("list-group-item"); // add attribute of class 

        ul.appendChild(li); // add ul's child tag
        input.value = ""; // init input value
        saveData();
    }
}

function saveData() {
    const lists = document.querySelectorAll("li"); // Get to all 'li' 
    let todos = [];

    lists.forEach(list => {
        todos.push(list.innerText); // 배열로 value matome
    });

    localStorage.setItem("todos", JSON.stringify(todos)); //String To Json data
}
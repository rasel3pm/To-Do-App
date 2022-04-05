const container = document.querySelector(".container");
const form = document.querySelector(".todo-form");
const input = document.getElementById("input");
const button = document.getElementById("button");
const items = document.querySelector("#items")

const createToDo = (toDoId, toDoValue) => {
    const toAddElement = document.createElement("li")
    toAddElement.id = toDoId;
    toAddElement.classList.add("list-style")
    toAddElement.innerHTML = `
    <span>${toDoValue}</span>
    <span><button class="btn" id="deletebutton"><i class="fa-solid fa-trash-can"></i></button></span>
    `;
    items.appendChild(toAddElement);

    const deletebutton = toAddElement.querySelector("#deletebutton");
    deletebutton.addEventListener('click', deleteTodo);
}

const deleteTodo = (event) => {
    const selectTodo = event.target.parentElement.parentElement.parentElement;
    items.removeChild(selectTodo)
}


//add event
const addTo = (event) => {
    event.preventDefault();
    const toDoValue = input.value;

    //ids
    const toDoId = Date.now().toString();
    createToDo(toDoId, toDoValue);
    showMessage("Todo is added")
}
form.addEventListener("submit", addTo);
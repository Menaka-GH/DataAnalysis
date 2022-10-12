"use strict";
// function printDouble(msg: string){
//     console.log(msg);
// }
const todos = [];
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
function handleSubmit(e) {
    e.preventDefault();
    //console.log("Submitted the form");
    const newToDo = {
        text: input.value,
        completed: false,
    };
    createTodo(newToDo);
    todos.push(newToDo);
    localStorage.setItem("todos",JSON.stringify(todos));
    input.value = "";
}
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(todo.text);
    newLI.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLI);
}
form.addEventListener("submit", handleSubmit);

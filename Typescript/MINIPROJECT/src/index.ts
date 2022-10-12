// function printDouble(msg: string){
//     console.log(msg);
// }

// printDouble("hello i am here") ;
//creating an interface
interface Todo{
    text: string;
    completed: boolean;
}
const todos: Todo[] = [];

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input= document.getElementById("todoinput")! as HTMLInputElement;
const form= document.querySelector("form")! ;
const list= document.getElementById("todolist");
function handleSubmit(e: SubmitEvent)
    {
        e.preventDefault();
        //console.log("Submitted the form");
        const newToDo:Todo={
            text: input.value,
            completed: false,
        };
        createTodo(newToDo);
        todos.push(newToDo);
        
        localStorage.setItem("todos",JSON.stringify(todos));
        input.value="";
      }
      function createTodo(todo: Todo){
        
        const newLI = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        newLI.append(todo.text);
        newLI.append(checkbox);
        list?.append(newLI);
      }
      

form.addEventListener("submit",handleSubmit);

window.addEventListener('load', () => {
    //Selectors
    const todoInput = document.querySelector('.todo-input');
    const todoButton = document.querySelector('.todo-button');
    const todoList = document.querySelector('.todo-list');
    const filterOption = document.querySelector('.filter-todo');


    // Delearing Event Listeners
    todoButton.addEventListener('click', addTodo);
    todoList.addEventListener('click', deleteCheck);
    filterOption.addEventListener('click', filterTodo);

    // Declearing Functions
    function addTodo(event) {
        //prevent form from submitting
        event.preventDefault();
        //Todo DIV
        const todoDiv = document.createElement("li");
        todoDiv.classList.add("todo");
        //create LI
        const newTodo = document.createElement('div');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        //Add todos to local storage
        // saveLocalTodos(todoInput.value);
        //Create Mark Button
        const CompletedButton = document.createElement('button');
        CompletedButton.innerHTML = '<i class="fas fa-check"></i>';
        CompletedButton.classList.add('complete-btn');
        todoDiv.appendChild(CompletedButton);
        //Create trash Button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
        //Append to list
        todoList.appendChild(todoDiv);
        //Clear Todo Value
        todoInput.value = "";
    }  

    function deleteCheck(event) {
        const item = event.target;
        //Delete todo
        if (item.classList[0] === "trash-btn") {
            const todo = item.parentElement;
            //Animation
            todo.classList.add('fall');
            todo.addEventListener('transitionend', function() {
                todo.remove();
            });
            
        }

        //Check mark
        if (item.classList[0] === "complete-btn") {
            const todo = item.parentElement;
            todo.classList.toggle("completed");
        }
    }
        //Todo options (all, completed, uncompleted)
    function filterTodo(event) {
        const todos = todoList.childNodes;
        todos.forEach(function(todo) {
            switch(event.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                    } else {
                    todo.style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (!todo.classList.contains('completed')) {
                        todo.style.display ="flex";
                    } else {
                        todo.style.display= "none";
                    }
                    break;
            }
        });
    }
})

// saving to LOCALstorage 
// function saveLocalTodos(Todo) {
//     //check if i all ready have things in there in the local storage
//     let todos;
//     if(localStorage.getItem('todos') === null) {
//         todos = [];
//     }else{
//         todos.push(todo);
//         localStorage.setItem('todos', JSON.stringify(todos));
//     }

//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(tods));
// }




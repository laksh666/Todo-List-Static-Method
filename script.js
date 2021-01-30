//Selectors...

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions

function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();
  //Todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //Create Li
  const newTodo = document.createElement('li');
  if (todoInput.value) {
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Completed button
    const completedButton = document.createElement('button');
    completedButton.innerText = '✔️';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //Trash button
    const trashButton = document.createElement('button');
    trashButton.innerText = '🗑️';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear value of input
    todoInput.value = '';
  } else {
    alert('Please enter your todo text');
  }
}

function deleteCheck(e) {
  const item = e.target;
  //Delete the todo
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }
  //Complete
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

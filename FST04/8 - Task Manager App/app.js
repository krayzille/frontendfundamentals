//Step 1: Select DOM elements
const tofoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector('.todo-button');
const filter = document.querySelector('.filter-todo');
const todoList = document.querySelector('.todo-list');
//Step 2: Add Event Listeners 
//Using gloabl declaration can be helpful for many function
todoButton.addEventListener('click', addToDo());
todoList.addEventListener('click', deleteOrCompleteTodo());
filterTodos.addEventListener('change', filterTodos());


//Step 3: Function to add new task
function addToDo(){

};

//Step 4: Function to delete or complete task
function deleteOrCompleteTodo(){

};

//Step 5: Function to filter task based on completion status 
function filterTodos(){

};
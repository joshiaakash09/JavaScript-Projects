// Define UI Variables

const form = document.querySelector('#task-form');
const taskInput = document.querySelector('task');
const taskList = document.querySelector('collection');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-tasks');

// load all event listners

function loadEventListners(){
    // DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add task event
    form.addEventListener('click', addTask);
    // Remove task event
    taskList.querySelector('click', removeTask);
    //Clear task event
    clearBtn.querySelector('click', clearTasks);
    // Filter tassk events
    filter.querySelector('click', filterTasks);
}

//Get tasks from LS

function getTasks (){
   let tasks;

   if(localStorage.getItem('tasks') === null){
       tasks =[];
   }else{

   }
}
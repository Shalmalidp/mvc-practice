import $ from 'jquery';
import _ from 'lodash';


//get our classes

import{ TodoList } from './classes/todo';
import { Task } from './classes/task';

//console.log(TodoList);//import check;
//getting HTML Elements --JQUERY
let todoForm  = $('.todoForm'); //<form>
let todoInput = $('.todoInput'); // <input>
let todos     = $('.todos'); // <ul>


//we need to model our todo list

let groceryList = new TodoList('Grocery List');
//console.log('grocery list',groceryList);


//Control how we add tasks

todoForm.on('submit', function(event){
  event.preventDefault(); 
//get the text thats typed in the input field
  let taskDesc = todoInput.val();
  todoInput.val('');
  //console.log(taskDesc);
  
  //update grocery list model to contain this item
  let task = new Task(taskDesc);
  groceryList.tasks.push(task);
  console.log(groceryList);
  
  //visually show element on page
  let taskHTML = taskTemplate(taskDesc);
  todos.append(taskHTML);

});


//template
function taskTemplate(taskDesc){
  return `
    <li>${ taskDesc } </li>
  `;
}


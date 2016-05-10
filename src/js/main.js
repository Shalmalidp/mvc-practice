import $ from 'jquery';
import _ from 'lodash';


//get our classes

import{ TodoList } from './models/todo';
import { Task } from './models/task';
import { AppController } from './controllers/appController';

//console.log(TodoList);//import check;
//getting HTML Elements --JQUERY
let todoForm  = $('.todoForm'); //<form>
let todos     = $('.todos'); // <ul>
// let todoInput = $('.todoInput'); // <input> moved to controller


//we need to model our todo list

let groceryList = new TodoList('Grocery List');
//console.log('grocery list',groceryList);


let app = new AppController(todoForm, todos, groceryList);
app.init();





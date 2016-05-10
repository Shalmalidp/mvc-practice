import {Task} from '../models/task';

export class AppController{
 
  constructor(formElement, taskElem, instance){
    this.form = formElement;
    this.taskArea= taskElem;
    this.todoListInstance = instance;
  }
  
  init(){
    this.form.on('submit',(event)=>{
      event.preventDefault();
      // console.log(this);
      
      let input =this.form.find('input');
      this.addTaskToCollection(input.val());
      input.val('');
      
    });
  }

  addTaskToCollection(taskDesc){
    let t = new Task(taskDesc);
    console.log('t', t);
    this.todoListInstance.tasks.push(t);
    console.log(this.todoListInstance);
    this.addTaskToView(t);
  }

  addTaskToView(taskObj){
    let taskHTML = this.taskTemplate(taskObj.desc);
    this.taskArea.append(taskHTML);

  }


  taskTemplate(taskDesc){
    return `<li>${ taskDesc }</li>`;
  }

} 
 
import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo-service/todo-service.service';
import {Task} from '../model/task';
//import {User} from '../model/user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class TodoListComponent implements OnInit {
  tasks:Task[]=[];
  //users:User[]=[]
  constructor( private todoService:TodoService,  private router:Router) { }

  ngOnInit() {
    this.todoService.getTasks().subscribe(
      res => {
        console.log(res);
        console.log('Got all tasks');
        this.tasks = res;
      },
      err => {
        alert('An error has occured');
      }
    );
  }
  /*userOnInit() {
    this.todoService.getUsers().subscribe(
      res => {
        console.log(res);
        console.log('Got all users');
        this.users = res;
      },
      err => {
        alert('An error has occured');
      }
    );
  }

   */

  updateListByStatus()
  {
    let element = document.getElementById('searchStatus') as HTMLSelectElement;
    this.todoService.getTasksByStatus(element.value).subscribe(
      res => {
        console.log(res);
        console.log('Got all tasks');
        this.tasks = res;
      },
      err => {
        alert('An error has occured');
      }
    );
  }

  updateListByTitle()
  {
    let element = document.getElementById('searchTitle') as HTMLInputElement;
    this.todoService.getTasksByTitle(element.value).subscribe(
      res => {
        console.log(res);
        console.log('Got all tasks');
        this.tasks = res;
      },
      err => {
        alert('An error has occured');
      }
    );
  }

  newTask() {
    let task = new Task();
    this.todoService.setTask(task);
    this.router.navigate(['/op']);
  }

  /*newUser() {
    let user = new User();
    this.todoService.setUser(user);
    this.router.navigate(['/opi']);
  }

   */

  updateTask(task) {
    this.todoService.getTask();
    this.router.navigate(['/op/' + task.id]);
  }

  /*updateUser(user) {
    this.todoService.getUser();
    this.router.navigate(['/opi/' + user.id]);
  }

   */

  deleteTask(task) {
    this.todoService.deleteTask(task.id).subscribe(
      res => {
        console.log('Delete a task :successful');
        this.tasks.splice(this.tasks.indexOf(task), 1);
      },
      error => {
        console.log('Delete a task :unsuccessful');
      }
    );
  }

  /*deleteUser(user) {
    this.todoService.deleteUser(user.id).subscribe(
      res => {
        console.log('Delete a user :successful');
        this.users.splice(this.users.indexOf(user), 1);
      },
      error => {
        console.log('Delete a user :unsuccessful');
      }
    );
  }

   */

}

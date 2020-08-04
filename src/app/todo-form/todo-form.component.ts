import { Component, OnInit } from '@angular/core';
import {Task} from '../model/Task';
//import {User} from '../model/User';
import {TodoService} from "../todo-service/todo-service.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class TodoFormComponent implements OnInit {

  private task: Task;
  //private user: User;
  taskId: number;
  //userId: number;
  constructor(private todoService: TodoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.todoService.getTasks();
    this.task = this.todoService.getTask();
    this.taskId = this.activatedRoute.snapshot.params.id;
    console.log(this.taskId);
    this.getTaskById();
  }
  /*userOnInit() {
    this.todoService.getUsers();
    this.user = this.todoService.getUser();
    this.userId = this.activatedRoute.snapshot.params.id;
    console.log(this.userId);
    this.getUserById();
  }

   */


  processForm() {
    if (!this.taskId) {
      this.todoService.createTask(this.task).subscribe((task) => {
        console.log(task);
        this.router.navigate(['']);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.todoService.updateTask(this.task).subscribe((task) => {
        console.log(task);
        this.router.navigate(['']);
      }, (error) => {
        console.log(error);
      });
    }
  }
 /* UserprocessForm() {
    if (!this.userId) {
      this.todoService.createUser(this.user).subscribe((user) => {
        console.log(user);
        this.router.navigate(['']);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.todoService.updateUser(this.user).subscribe((user) => {
        console.log(user);
        this.router.navigate(['']);
      }, (error) => {
        console.log(error);
      });
    }
  }

  */



  getTaskById() {
    if (!this.taskId) {
      return;
    }
    this.todoService.getTaskById(this.taskId).subscribe(
      res => {
        this.task = res;
      }, error => {
        console.log(error);
      }
    );
  }

  /*getUserById() {
    if (!this.userId) {
      return;
    }
    this.todoService.getUserById(this.userId).subscribe(
      res => {
        this.user = res;
      }, error => {
        console.log(error);
      }
    );
  }

   */
}

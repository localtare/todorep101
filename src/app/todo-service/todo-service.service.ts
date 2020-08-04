import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from '../model/Task';
//import {User} from '../model/User';



@Injectable()
export class TodoService {
  private baseUrl = 'http://localhost:8080/api';
  private task: Task;
  //private user: User;
  constructor(private _httpClient:HttpClient) {
  }

  getTasks() {
    return this._httpClient.get<Task[]>(this.baseUrl +'/tasks');
  }
  /*getUsers() {
    return this._httpClient.get<User[]>(this.baseUrl +'/users');
  }*/

  getTasksByTitle(title: string) {
    return this._httpClient.get<Task[]>(this.baseUrl + '/tasks?title=' + title);
  }

  getTasksByStatus(status: string) {
    return this._httpClient.get<Task[]>(this.baseUrl + '/tasks?status=' + status);
  }

  getTaskById(id: number) {
    return this._httpClient.get<Task>(this.baseUrl + '/tasks/' +id);
  }

  /*getUserById(id: number) {
    return this._httpClient.get<User>(this.baseUrl + '/users/' +id);
  }

   */


  createTask(task: Task) {

    return this._httpClient.post(this.baseUrl +'/tasks',task);
  }

  /*createUser(user: User) {
    return this._httpClient.post(this.baseUrl +'/users',user);
  }

   */

  updateTask(task: Task) {
    return this._httpClient.put(this.baseUrl + '/tasks/'+ task.id, task);
  }

  /*updateUser(user: User) {
    return this._httpClient.put(this.baseUrl + '/users/'+ user.id, user);
  }

   */

  deleteTask(id: number){
    return this._httpClient.delete(this.baseUrl +'/tasks/'+id);
  }

  /*deleteUser(id: number){
    return this._httpClient.delete(this.baseUrl +'/users/'+id);
  }

   */

  getTask(){
    return this.task;
  }
  /*getUser(){
    return this.user;
  }

   */
  setTask(task: Task) {
    this.task = task;
  }
 /* setUser(user: User) {
    this.user = user;
  }
  */

}


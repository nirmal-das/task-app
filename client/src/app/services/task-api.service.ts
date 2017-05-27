import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app.config';

@Injectable()
export class TaskApiService {

  private baseUrl: string;

  constructor(private http: Http, appConfig: AppConfig) {
    this.baseUrl = appConfig.taskApiBaseURL;  
  }

  getAllTasks() {
    var url = this.baseUrl + 'api/task/list';
    return this.http.get(url)
      .map(res => res.json());
  }

  getAllCategories() {
    var url = this.baseUrl + 'api/task/categories';
    return this.http.get(url)
      .map(res => res.json());
  }

  getCategoryTasks(category) {
    var url = this.baseUrl + 'api/task/list/' + category;
    return this.http.get(url)
      .map(res => res.json());
  }

  createTask(taskModel) {
    var url = this.baseUrl + 'api/task/';

    return this.http.post(url, taskModel)
      .map(res => res.json());
  }

  getTask(id) {
    var url = this.baseUrl + 'api/task/' + id;
    return this.http.get(url)
      .map(res => res.json());
  }

  updateTask(id, taskModel) {
    var url = this.baseUrl + 'api/task/' + id;
    return this.http.put(url, taskModel)
      .map(res => res.json());
  }

  deleteTask(id, purge) {
    var url = this.baseUrl + 'api/task/' + id;
    
    if(purge) {
      url += '?purge=true';
    }

    return this.http.delete(url)
      .map(res => res.json());
  }
}

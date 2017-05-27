import { Injectable } from '@angular/core';
import { TaskApiService } from './task-api.service'

@Injectable()
export class TaskDataService {

  constructor(private taskApi: TaskApiService) { }

  getCategories() {
    // this.taskApi.getAllTasks()
    //   .subscribe(categories => resolve(categories));
  }

  getCategoryTasks() {

  }
}

import { Component, OnInit, AfterViewChecked, ViewChildren, QueryList} from '@angular/core';
import { TaskApiService } from '../services/task-api.service';
import { EditControlComponent } from '../shared/components/edit-control.component';

@Component({
  selector: 'ta-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, AfterViewChecked {
  
  categories = [];
  activeCategory;
  taskList = [];

  status = {
    icon: '',
    msg: ''
  };
  STATUS_TYPE = {
    CLEAR: 0,
    LOADING: 1,
    ERROR: 2,
    WARNING: 3
  };
  icons = {
    '1': 'assets/loading.gif'
  };

  category = {
    BACKLOG: 'Backlog',
    COMPLETED: 'Completed',
    THRASH: 'Thrash'
  };

  @ViewChildren(EditControlComponent) taskEditControls: QueryList<EditControlComponent>;

  addedTaskId;

  constructor(private taskApi: TaskApiService) {
  }

  ngOnInit() {

    //retrieve categories
    this.taskApi.getAllCategories()
      .subscribe(categories => {
        console.log(categories);
        this.categories = categories;
        this.activeCategory = this.categories[0]; // && this.categories[0].name || '';

        this.updateTaskList(this.activeCategory);
      });
  }

  ngAfterViewChecked() {

    if(this.addedTaskId) {  //if a task is newly added then focus it
      this.focusTask(this.addedTaskId);
      delete this.addedTaskId;
    }
  }

  // LOGIC FUNCTIONS
  //update list of task for active category
  updateTaskList(category = this.activeCategory) {
    
    var categoryName = category.name;
    return new Promise((resolve, reject) => {

      this.updateStatus(this.STATUS_TYPE.LOADING);

      this.taskApi.getCategoryTasks(categoryName)
        .subscribe(tasks => {
          this.taskList = tasks;
          this.clearStatus();
          resolve();
        },
        err => {
          reject(err);
        })
    });
    
  }

  // STATUS UI
  updateStatus(type = this.STATUS_TYPE.CLEAR, msg='') {
    this.status.icon = this.icons[type];
    this.status.msg = msg;
  }
  clearStatus() {
    this.updateStatus(this.STATUS_TYPE.CLEAR, '');
  }

  focusTask(taskId) {
    var taskeditControl = this.taskEditControls.find(editControl => {
      return editControl.task._id === taskId;
    });

    if(taskeditControl)
      taskeditControl.focusInput();
  }
  
  // NAV Event handlers
  onCategorySelected(category) {
    this.activeCategory = category;
    this.updateTaskList(this.activeCategory);
  }

  // Tool bar handlers
  tbAddTask() {
    
    this.updateStatus(this.STATUS_TYPE.LOADING);

    this.taskApi.createTask({
        category: this.activeCategory.name
      })
      .subscribe(taskId => {
        //update view
        this.updateTaskList().then(() => {
            console.log('updated task list');
            //focus on newly added task
            this.addedTaskId = taskId;
          });
      });
  }

  // TASK Edit control handlers
  completeTask(taskId) {
    
    this.updateStatus(this.STATUS_TYPE.LOADING);
    
    var body = {
      category: this.category.COMPLETED
    };

    this.taskApi.updateTask(taskId, body)
      .subscribe(json => {
        this.updateTaskList();
      },
      err => {
        //show error status
      });
  }

  removeTask(taskId) {
    
    this.updateStatus(this.STATUS_TYPE.LOADING);

    var purge = this.activeCategory.name === this.category.THRASH;

    this.taskApi.deleteTask(taskId, purge)
      .subscribe(json => {
        this.updateTaskList();
      },
      err => {
        console.log(err);
        //show error status
      });
  }

  onTaskUpdate(task) {
    this.updateStatus(this.STATUS_TYPE.LOADING);
    this.taskApi.updateTask(task._id, task)
      .subscribe(res => {
        this.clearStatus();
      });
  }

}

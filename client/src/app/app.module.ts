import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header.component';
import { CategoryNavComponent } from './category-nav/category-nav.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EditControlComponent } from './shared/components/edit-control.component';

import { TaskApiService } from './services/task-api.service';
import { TaskDataService } from './services/task-data.service';
import { AppConfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNavComponent,
    TaskListComponent,
    EditControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TaskApiService, TaskDataService, AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from "./task/task.component";
import { NgFor } from '@angular/common';
import { NewTaskComponent } from "./new-task/new-task.component";
import { type Task } from './task/task.model';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.services';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NgFor, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required :true}) name!: string;
  @Input({required :true}) userId!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    console.log('TasksComponent onStartAddTask called');
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    console.log('TasksComponent onCancelAddTask called');
    this.isAddingTask = false;
  }

}

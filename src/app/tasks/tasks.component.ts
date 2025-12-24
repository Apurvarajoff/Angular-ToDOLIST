import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from "./task/task.component";
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required :true}) name!: string;
  @Input({required :true}) userId!: string;
  tasks = [
    {id:'t1',
      userId:'u1',
      title: "Master Angular",
      Summary:"Complete the Angular course on Udemy",
      dueDate: new Date('2025-12-31'),
    },
    {id:'t2',
      userId:'u2',
      title: "Build a Portfolio",
      Summary:"Create a personal portfolio website to showcase projects",
      dueDate: new Date('2025-11-30'),
    },
    {id:'t3',
      userId:'u3',
      title: "Contribute to Open Source",
      Summary:"Find an open-source project on GitHub and contribute",
      dueDate: new Date('2025-10-15'), 
    },
    {id:'t4',
      userId:'u1',
      title: "Learn TypeScript",
      Summary:"Master TypeScript fundamentals and advanced features",
      dueDate: new Date('2025-09-30'),
    },
    {id:'t5',
      userId:'u2',
      title: "Read Tech Blogs",
      Summary:"Stay updated with the latest tech news and trends",
      dueDate: new Date('2025-08-31'),
    }
  ]
  
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}

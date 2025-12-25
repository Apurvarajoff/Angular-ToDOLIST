import { Injectable } from "@angular/core";
import { NewTaskData, Task } from "./task/task.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
    private tasks = [
        {id:'t1',
          userId:'u1',
          title: "Master Angular",
          summary:"Complete the Angular course on Udemy",
          dueDate: new Date('2025-12-31'),
        },
        {id:'t2',
          userId:'u2',
          title: "Build a Portfolio",
          summary:"Create a personal portfolio website to showcase projects",
          dueDate: new Date('2025-11-30'),
        },
        {id:'t3',
          userId:'u3',
          title: "Contribute to Open Source",
          summary:"Find an open-source project on GitHub and contribute",
          dueDate: new Date('2025-10-15'), 
        },
        {id:'t4',
          userId:'u1',
          title: "Learn TypeScript",
          summary:"Master TypeScript fundamentals and advanced features",
          dueDate: new Date('2025-09-30'),
        },
        {id:'t5',
          userId:'u2',
          title: "Read Tech Blogs",
          summary:"Stay updated with the latest tech news and trends",
          dueDate: new Date('2025-08-31'),
        }
      ];

      constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
          this.tasks = JSON.parse(tasks);
        }
      }

      getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
      }

      addTask(taskData: NewTaskData, userId: string) {
        const newTask: Task = {
          id: 't' + (this.tasks.length + 1),
          userId: userId,
          title: taskData.title,
          summary: taskData.summary,
          dueDate: new Date(taskData.dueDate)
        }
        this.tasks.unshift(newTask);
        this.saveTasks();
      }

      removeTask(taskId: string) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        this.saveTasks();
      }

      private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks));
      }

   
}
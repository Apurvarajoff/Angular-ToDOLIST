import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  users = DUMMY_USERS;
  selectedUserId: string | undefined ='' ;

  get selectedUser() {
    console.log(this.users.find((user)=> user.id === this.selectedUserId));
    return this.users.find((user)=> user.id === this.selectedUserId)!;
  }
  
  onSelectUser(id:string) {
    this.selectedUserId =id;
    console.log('selected user id: ',id);
  }

}

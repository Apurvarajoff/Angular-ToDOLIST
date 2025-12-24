import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import {type User } from './user.model';


// type User = {
//     id:string;
//     avatar:string,
//     name:string
//   }

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // @Input({required:true}) id!: string;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;

  @Input({required:true}) user!: User

  @Output() select = new EventEmitter<string>();
  // select =output<string>();

  get imagePath() {
    return `assets/users/users/${this.user.avatar}`;
  }

  get altName() {
    return this.user.name;
  }

  onSelectUser(event: Event) {
    console.log('UserComponent onSelectUser called',event);
    this.select.emit(this.user.id);
  }
}

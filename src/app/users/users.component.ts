import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  // mark as readonly, remove exclamation mark
  // readonly selectedUser$ = new BehaviorSubject();
  selectedUser$!: Observable<User>;

  // constructor should always be below fields
  constructor(private userService: UserService) {}

  // readonly users 
  users$ = this.userService.getUsers();

  // lowerCase
  OnSelect(userId: number): void {
    // this is bad, you should not assign value to observable. 
    // instead use behaviorSubject and run next()
    this.selectedUser$ = this.userService.getUserById(userId);
  }
}

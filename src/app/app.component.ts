import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './dummy-usser';
import { TasksComponent } from './components/tasks/tasks.component';
import { User } from './components/interfaces/user.interface';
/** @Component is a decorator, used to add some metadata and basic configuration to the class */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser!: User;

  onSelectUser(user: User) {
    this.selectedUser = user;
  }
}

import {
  Component,
  computed,
  signal,
  Input,
  input,
  Output,
  EventEmitter,
} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-usser';
import { User } from '../interfaces/user.interface';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // A signal is an object that stores a value (any type of value, including nested objects)
  // angular manages subscriptions to the signal to get notified about value changes
  // Signals make more efficient the angular´s change detection mechanisim, because it only has to check the signals
  // and not everywhere in the component
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // When using "computed" the value is only re-calculated whent the signals it depends on change
  // imagePath = computed(() => {
  //   return `assets/users/${this.selectedUser().avatar}`;
  // });
  // get imagePath() {
  //   return `assets/users/${this.selectedUser().avatar}`;
  // }
  // onSelectedUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
  // @Input({ required: true }) id!: string;
  // @Input({ required: true })
  // avatar!: string;
  // @Input({ required: true })
  // name!: string;
  // @Output() select = new EventEmitter<User>();

  @Input({ required: true }) user!: User;
  @Input() selected?: boolean;
  // avatar = input.required<string>(); // They are read-only input signals
  // name = input.required<string>(); // They are read-only properties

  // imagePath = computed(() => {
  //   return `assets/users/${this.avatar()}`;
  // });

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }
}

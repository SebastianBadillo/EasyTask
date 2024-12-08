import { Component, inject, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { TaskComponent } from './components/task/task.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { newTask } from '../../interfaces/newTask.interface';
import { TasksService } from './services/tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  isAddingTask = false;
  dummyTasks = [{}];
  private taskService = inject(TasksService);
  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.user.id);
  }

  onCompleteTask(id: string) {
    return this.taskService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: newTask) {
    this.taskService.addTask(taskData, this.user.id);

    this.isAddingTask = false;
  }
}

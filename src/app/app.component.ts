import { Component } from '@angular/core';
import { Task } from './models/task.model';
import { TaskService } from './task/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  task: Task = {}; // Initialise l'objet Task

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.task.titre && this.task.description) {
      this.taskService.addTask(this.task).then(() => {
        console.log('Task added successfully');
        this.task = new Task(); // Réinitialiser le formulaire
      });
    }
  }
}

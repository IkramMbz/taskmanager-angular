import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Task } from '../../models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
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

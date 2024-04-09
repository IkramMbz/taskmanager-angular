import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private firestore: AngularFirestore) {}

  addTask(task: Task) {
    return this.firestore.collection('tasks').add(task);
  }
}

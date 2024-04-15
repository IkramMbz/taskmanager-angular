import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { v4 as uuidv4 } from 'uuid';

import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksCollection: AngularFirestoreCollection<Task>;

  constructor(private firestore: AngularFirestore) {
    this.tasksCollection = this.firestore.collection<Task>('tasks');
  }

  addTask(task: Task, userId: string) {
    const taskId = task.id || uuidv4();

    const taskWithDetails = {
      ...task,
      id: taskId,
      userId: userId,
      updatedAt: new Date()
    };

    return this.firestore.collection('tasks').add(taskWithDetails);
  }

  getTasks() {
    return this.tasksCollection.get();
  }

  updateTask(task: Task): Promise<void> {
    // return this.tasksCollection.doc().update(task);
    return this.tasksCollection.doc(task.id).update(task);
  }

  deleteTask(taskId: string): Promise<void> {
    return this.tasksCollection.doc(taskId).delete();
  }
}

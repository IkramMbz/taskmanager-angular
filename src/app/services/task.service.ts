import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksCollection: AngularFirestoreCollection<Task>;

  constructor(private firestore: AngularFirestore) {
    this.tasksCollection = this.firestore.collection<Task>('tasks');

  }

  addTask(task: Task) {
    return this.tasksCollection.add(task);
  }

  getTask(tast: Task){
    return this.tasksCollection.get();
  }

    // Mettre à jour une tâche spécifique
    updateTask(taskId: string, task: Task): Promise<void> {
      return this.tasksCollection.doc().update(task);
    }
  
    // Supprimer une tâche spécifique
    deleteTask(taskId: string): Promise<void> {
      return this.tasksCollection.doc(taskId).delete();
    }
}

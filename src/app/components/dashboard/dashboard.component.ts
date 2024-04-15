import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Task } from 'src/app/models/task.model';
import { AuthService } from 'src/app/services/auth.services';
import { TaskService } from 'src/app/services/task.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    task: Task = {};
    tasks: Task[] = [];

    isAuthenticated: boolean = true;
    userEmail: string = '';
    userId: string = '';
    router: any;

    logout(): void {
        this.authService.signOut();
    }

    addTask() {
        if (this.task.titre) {
            this.taskService.addTask(this.task, this.userId).then(() => {
                this.getTasks();
            });
        }
    }

    getTasks() {
        this.taskService.getTasks().subscribe((querySnapshot: { docs: any[]; }) => {
            this.tasks = querySnapshot.docs
                .map(doc => doc.data())
                .filter((task: Task) => task.userId === this.userId);
        });
    }

    updateTask(task: Task) {
        this.taskService.updateTask(this.task).then((docRef) => {
            this.getTasks();
        });
    }

    async deleteTask(task: Task) {
        if (task.id) {
            await this.taskService.deleteTask(task.id).then(() => {
                this.getTasks();
            });
        }
    }

    constructor(
        private titleService: Title, 
        private taskService: TaskService, 
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.titleService.setTitle('TaskSama - Dashboard');

        this.authService.isAuthenticated().then(authenticated => {
            this.isAuthenticated = authenticated;

            if (!authenticated) {
                window.location.href = '/login';
            } else {
                this.isAuthenticated = true;

                this.authService.getUser().subscribe(user => {
                    this.userEmail = user?.email || '';
                    this.userId = user?.uid || '';
                });
            }
        });

        this.getTasks();
    }
}
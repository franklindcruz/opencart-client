import { Component } from '@angular/core';
import User from '../shared/types/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrl: './app.component.css',
})
export class AppComponent {
    users: User[] | null = null;

    constructor() {
        this.users = [
            {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                email: 'T9HvZ@example.com',
                avatar: 'https://reqres.in/img/faces/1-image.jpg',
                role: 'admin'
            },
            {
                id: 2,
                firstName: 'Jane',
                lastName: 'Doe',
                email: 'T9HvZ@example.com',
                avatar: 'https://reqres.in/img/faces/2-image.jpg',
                role: 'user'
            },
            {
                id: 3,
                firstName: 'Bob',
                lastName: 'Doe',
                email: 'T9HvZ@example.com',
                avatar: 'https://reqres.in/img/faces/3-image.jpg',
                role: 'user'
            }
        ]
    }
}

import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
    loggedUser: User;

    constructor() { }

    ngOnInit() {
    }

    updateLoggedUser(u: User) {
        this.loggedUser = u;
    }

    updateCartProducts(event: boolean) {
        if (event) {
            this.loggedUser = { ...this.loggedUser }
        }
    }
}
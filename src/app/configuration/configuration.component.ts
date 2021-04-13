import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResolveStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { Roles } from '../models/roles.model';
import { User } from '../models/user.model';
import { StoreService } from '../services/store.service';
import { UsersHttpService } from '../services/users-http.service';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit, OnDestroy {
  usersList: User[];
  loggedUser: User;
  userListSubscription: Subscription;
  roles = Roles;

  constructor(
    private readonly usersService: UsersHttpService,
    private readonly storeService: StoreService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  private getUser() {
    this.userListSubscription = this.usersService.getUsers().subscribe((u: User[]) => {
      this.usersList = u;
      this.loggedUser = this.calculateRandomUser(u);
      this.storeUser();
    });
  }

  generateAdmin() {
    this.loggedUser = this.calculateRandomUser(this.usersList, 'ADMIN');
    this.storeUser();

  }
  generateCustomer() {
    this.loggedUser = this.calculateRandomUser(this.usersList, 'CUSTOMER');
    this.storeUser();
  }

  private calculateRandomUser(list: User[], role?: string): User {
    if (!role) {
      role = 'ADMIN';
    }
    return list.filter(user =>
      user.role === role)[Math.floor(Math.random() * (list.length / 2))];
  }

  private storeUser() {
    this.storeService.storeLoggedUser(this.loggedUser);
  }

  ngOnDestroy() {
    if (this.userListSubscription) {
      this.userListSubscription.unsubscribe();
    }
  }
}

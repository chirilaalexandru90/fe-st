import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private loggedUserSubject = new Subject<User>();

  constructor() { }

  getLoggedUser(): Observable<User> {
    return this.loggedUserSubject.asObservable();
  }

  storeLoggedUser(user: User) {
    this.loggedUserSubject.next(user);
  }
}

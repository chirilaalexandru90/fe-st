import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersHttpService {
  private be = 'http://localhost:8080';

  constructor(private readonly http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.be}/users`, {}).pipe(map(r => r));
  }
}

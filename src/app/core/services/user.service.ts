import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://randomuser.me/api/?results=5';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
    .pipe(
      map((response: any) => response.results as User[])
    );
  }
}

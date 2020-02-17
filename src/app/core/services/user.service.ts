import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
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
      retry(3),
      catchError(this.handlerError),
      map((response: any) => response.results as User[])
    );
  }

  getFile() {
    return this.http.get('assets/files/test.txt', {responseType: 'text'});
  }

  private handlerError(error: HttpErrorResponse) {
    console.log(error);
    // Sentry.captureException(error);
    return throwError('¡Ups! Algo salió mal.');
  }

}

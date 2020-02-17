import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '@core/models/user.model';

import * as Sentry from '@sentry/browser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://randomuser.me/api/?results=5';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
    .pipe(
      catchError(this.handlerError),
      map((response: any) => response.results as User[])
    );
  }

  private handlerError(error: HttpErrorResponse) {
    console.log(error);
    // Sentry.captureException(error);
    return throwError('¡Ups! Algo salió mal.');
  }

}

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Resource } from '@core/models/resource.model';
import { MessageService } from '@core/services/message.service';

export abstract class ResourcesService<T extends Resource> {
  protected url: string;
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(
    endPoint: string,
    protected http: HttpClient,
    protected messageService: MessageService
  ) {
    this.url = `${environment.apiUrl}/${endPoint}`;
  }

  getList(): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}`, this.httpOptions)
      .pipe(
        tap(_ => console.log('Data obtained successfully.'))
      );
  }

  getObject(object: number | T): Observable<T> {
    const id = typeof object === 'number' ? object : object.id;
    return this.http.get<T>(`${this.url}/${id}`, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Data obtained successfully.`))
      );
  }

  putObject(object: Partial<T>): Observable<T> {
    return this.http.put<T>(`${this.url}/${object.id}`, object, this.httpOptions)
      .pipe(
        tap(_ => this.log(`Changes were saved successfully.`)),
      );
  }

  postObject(object: T): Observable<any> {
    return this.http.post<T>(this.url, object, this.httpOptions)
      .pipe(
        tap(_ => this.log(`Data was saved correctly.`))
      );
  }

  deleteObject(object: number | T): Observable<any> {
    const id = typeof object === 'number' ? object : object.id;
    return this.http.delete<any>(`${this.url}/${id}`, this.httpOptions)
      .pipe(
        tap(_ => this.log(`Data was deleted correctly.`))
      );
  }

  public setHttpOptions(httpOptions: any) {
    this.httpOptions = httpOptions;
  }

  public setUrl(url: string) {
    this.url = url;
  }

  log(mensaje: string): void {
    this.messageService.openSnackBar(`${mensaje}`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@core/models/category.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageService } from './message.service';
import { ResourcesService } from './resources.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends ResourcesService<Category> {

  constructor(protected http: HttpClient, protected messageService: MessageService) {
    super('', http, messageService);
    this.url = `${environment.apiUrl2}categories`;
  }

  checkAvailability<T>(name: string): Observable<T> {
    return this.http.post<T>(`${this.url}/availability`, {name});
  }
}

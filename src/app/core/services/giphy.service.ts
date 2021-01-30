import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GiphyResponse } from '@core/models/giphy-response.model';
import { Giphy } from '@core/models/giphy.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private url = `${environment.giphy.apiUrl}`;

  constructor(private http: HttpClient) { }

  searchGiphy(q: string): Observable<GiphyResponse> {
    const params = new HttpParams({fromObject: {
      limit: '25',
      offset: '0',
      lang: 'es',
      api_key: `${environment.giphy.apiKey}`,
      q
    }});
    return this.http.get<GiphyResponse>(
      `${this.url}search`, {
        params
      });
  }
}

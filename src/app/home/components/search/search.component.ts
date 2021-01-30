import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GiphyImage } from '@core/models/giphy-image.model';
import { GiphyResponse } from '@core/models/giphy-response.model';
import { Giphy } from '@core/models/giphy.model';
import { GiphyService } from '@core/services/giphy.service';
import { Observable } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl();
  data: Giphy[] = [];
  searching = false;
  notResults = false;

  constructor(
    private giphyService: GiphyService
  ) { }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      tap(() => this.searching = true),
      debounceTime(300)
    ).subscribe((value: string) => {
      this.searchValue(value).subscribe((response: Giphy[]) => {
        this.data = response;
        this.searching = false;
        this.notResults = this.data.length === 0;
      });
    });
  }

  searchValue(value: string): Observable<Giphy[]> {
    return this.giphyService.searchGiphy(value).pipe(
      map((response: GiphyResponse) => {
        return response.data.map((ele: Giphy) => ele);
      }),
      tap((response: Giphy[]) => response.forEach((ele: Giphy) => ele.url = ele.images.downsized.url))
    );
  }

}

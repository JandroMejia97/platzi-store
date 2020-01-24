import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  swiper: Swiper;

  // tslint:disable-next-line: ban-types
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.swiper = new Swiper('.swiper-container');
    }
  }

}

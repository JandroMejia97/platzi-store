import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

declare var gtag;

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Platzi Store';

  // tslint:disable-next-line: ban-types
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      this.loadGA();
    }
  }

  loadGA() {
    const navEvents$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );
    navEvents$.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-156895336-1', {
        page_path: event.urlAfterRedirects
      });
    });
  }
}

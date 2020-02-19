import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { environment } from 'src/environments/environment';

declare var gtag;

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Platzi Store';

  constructor(
    private router: Router,
    // tslint:disable-next-line: ban-types
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(platformId)) {
      this.loadGA();
    }
  }

  loadGA() {
    const navEvents$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );
    navEvents$.subscribe((event: NavigationEnd) => {
      gtag('config', environment.analytics.id, {
        page_path: event.urlAfterRedirects
      });
    });
  }
}

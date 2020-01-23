import { Component } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Platzi Store';

  constructor(private router: Router) {
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

import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { shareReplay, map } from 'rxjs/operators';
import { MatDrawer } from '@angular/material';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  @ViewChild(SidenavComponent, {static: true}) sidenavComponent: SidenavComponent;

  get drawer() {
    console.log(this.sidenavComponent);
    return this.sidenavComponent ? this.sidenavComponent.drawer : null;
  }

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {}
  
}

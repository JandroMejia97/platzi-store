import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() openedSideNav: boolean;
  @Output() toggle = new EventEmitter<boolean>();
  @ViewChild('drawer', { static: true }) drawer: MatDrawer;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.drawer.openedChange.subscribe((o: boolean) => {
      this.toggle.emit(o);
    });
  }

}

import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer', { static: true }) @Output() drawer: MatDrawer;
  @Input() isHandset$: Observable<boolean>;

  constructor() { }

  ngOnInit() { }

}

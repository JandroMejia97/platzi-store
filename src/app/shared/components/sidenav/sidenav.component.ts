import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() openedSideNav: boolean;
  @Output() toggle = new EventEmitter<boolean>();
  @ViewChild('drawer', {static: true}) drawer: MatDrawer;

  constructor() { }

  ngOnInit() {
    this.drawer.openedChange.subscribe((o: boolean) => {
      this.toggle.emit(o);
    });
  }

}

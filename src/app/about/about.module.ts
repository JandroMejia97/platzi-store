import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/list/list.component';
import { MaterialModule } from '@material/material.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [LayoutComponent, ListComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    MaterialModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }

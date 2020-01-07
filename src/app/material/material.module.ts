import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatBadgeModule,
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatBadgeModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatFormFieldModule
  ],
  exports: [
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatBadgeModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }

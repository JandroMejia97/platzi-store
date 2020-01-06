import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatBadgeModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
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
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatFormFieldModule
  ],
  exports: [
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatBadgeModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }

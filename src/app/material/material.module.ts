import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatSortModule,
  MatMenuModule,
  MatTreeModule,
  MatBadgeModule,
  MatInputModule,
  MatRadioModule,
  MatTableModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatGridListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSortModule,
    MatMenuModule,
    MatTreeModule,
    MatBadgeModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatGridListModule,
    MatFormFieldModule,
    MatPaginatorModule
  ],
  exports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSortModule,
    MatMenuModule,
    MatTreeModule,
    MatBadgeModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatGridListModule,
    MatFormFieldModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }

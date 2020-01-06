import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatToolbarModule, MatIconModule, MatBadgeModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }

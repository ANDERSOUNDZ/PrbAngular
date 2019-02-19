import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatDividerModule,
  MatCardModule,
  MatBadgeModule,
  MatChipsModule,
  MatIconModule
}

from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class MaterialModule { }

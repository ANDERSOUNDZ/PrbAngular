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
  MatIconModule,
  MatInputModule,
  MatFormFieldModule
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
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }

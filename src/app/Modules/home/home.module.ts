
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ShowDoctorsComponent } from './show-doctors/show-doctors.component';
@NgModule({
  declarations: [
    HomepageComponent,
    ShowDoctorsComponent
  ],


  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    MatDialogModule

  ],

  exports: [
    HomepageComponent
  ]
})
export class HomeModule { }

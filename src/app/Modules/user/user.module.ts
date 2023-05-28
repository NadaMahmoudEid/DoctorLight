import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { PlanComponent } from './plan/plan.component';



@NgModule({
  declarations: [
    ProfileComponent,
    PlanComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
    
  ],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,

  ]
})
export class AuthModule { }

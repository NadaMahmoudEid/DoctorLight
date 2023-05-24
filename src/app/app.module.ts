import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './Modules/home/home.module';
import { UserModule } from './Modules/user/user.module';
import { DoctorModule } from './Modules/doctor/doctor.module';
import { SharedModule } from './Modules/shared/shared.module';
import { LoginComponent } from './Modules/auth/login/login.component';
import { RegisterComponent } from './Modules/auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    
    UserModule,
    DoctorModule,
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

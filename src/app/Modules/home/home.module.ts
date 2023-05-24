
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';

import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    HomepageComponent
  ],
  
  
  imports: [
    CommonModule,
    
  ],
 
  exports:[
    HomepageComponent
  ]
})
export class HomeModule { }

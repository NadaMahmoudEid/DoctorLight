import { Component } from '@angular/core';
import { ShowDoctorsComponent } from '../show-doctors/show-doctors.component';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../../auth/register/register.component';
import { BehaviorSubject } from 'rxjs';
import { HomeServicesService } from '../home-services.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  constructor(public dialog: MatDialog, private homeService: HomeServicesService) { }
  hideFixedParagraph() {
    console.log("done")
    const fixedParagraph = document.querySelector('.fixed-paragraph');
    fixedParagraph?.classList.add('hidden');
   
  }
  ShowDoctors(){
  this.homeService.ShowDoctors();
}
  //  toggleDiv() {
  //   console.log("done")
  //   const container = document.querySelector("container");
  //   container?.classList.toggle("hidden");
  // }




}

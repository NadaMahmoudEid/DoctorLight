import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../../auth/register/register.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  constructor(public dialog: MatDialog) { }
  hideFixedParagraph() {
    console.log("done")
    const fixedParagraph = document.querySelector('.fixed-paragraph');
    fixedParagraph?.classList.add('hidden');
  }

  //  toggleDiv() {
  //   console.log("done")
  //   const container = document.querySelector("container");
  //   container?.classList.toggle("hidden");
  // }



 

}

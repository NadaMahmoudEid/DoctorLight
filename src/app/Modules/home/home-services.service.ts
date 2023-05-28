import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ShowDoctorsComponent } from './show-doctors/show-doctors.component';


@Injectable({
  providedIn: 'root'
})
export class HomeServicesService {
  dialogReferance: any = new BehaviorSubject("")
  dialogRef:any;
  constructor(public dialog: MatDialog) { }
  ShowDoctors() {
    this.dialogRef = this.dialog.open(ShowDoctorsComponent, {
      width: '1200px',
      height: '600px',
    });
    this.dialogReferance.next(this.dialogRef)
  }

  CloseDoctors() {
     this.dialogRef = this.dialog.closeAll()
  }
}

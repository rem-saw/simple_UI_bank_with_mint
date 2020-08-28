import { Component, OnInit, OnDestroy, AfterViewInit, Inject } from '@angular/core';
import { Router } from '@angular/router'
import { AppLoaderService } from '../../shared/services/app-loader/app-loader.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AppServiceService } from 'app/app-service.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ResponseDisplayComponent } from './response-display/response-display.component';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  verifyForm: FormGroup;

  constructor(
    private router: Router,
    private loader: AppLoaderService,
    private fb: FormBuilder,
    private appService: AppServiceService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {

    this.verifyForm = new FormGroup({
      cardNumber: new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(9)
      ])
    })

  }



  onSubmit() {
    this.loader.open();
    if (this.verifyForm.valid) {


      this.appService.verify(this.verifyForm.value.cardNumber).subscribe(
        data => {
         this.loader.close();
          let title = 'Successfull';
          let dialogRef = this.dialog.open(ResponseDisplayComponent,
            {
              width: '720px',
              disableClose: false,
              data: { title: title, payload: data }
            }
          );

          dialogRef.afterClosed().subscribe(result => {

            if (!result) {
              // If user press cancel
              return;
            }
          });

        }

        ,

        error => {
         
            this.loader.close();
          let title = 'Failed Response';
          let dialogRef = this.dialog.open(ResponseDisplayComponent,
            {
              width: '720px',
              disableClose: false,
              data: { title: title, payload: null }
            }
          );

          dialogRef.afterClosed().subscribe(result => {

                 if (!result) {
              // If user press cancel
              return;
            }
          });

        }
      );
    }

  }

 

}




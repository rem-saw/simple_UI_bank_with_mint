import { Component, OnInit, Inject } from '@angular/core';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AppServiceService } from 'app/app-service.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
@Component({
  selector: 'app-response-display',
  templateUrl: './response-display.component.html',
  styleUrls: ['./response-display.component.scss']
})
export class ResponseDisplayComponent implements OnInit {
  public itemForm: FormGroup;
bank  ; scheme ; type ; success ;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ResponseDisplayComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
      this.assign(this.data) ;

    }
  


    assign(data){
      console.log()
      if (data.payload === null){
        this.success = false ; 
        this.bank = 'Not Availbale';
        this.scheme = 'Not Available';
        this.type = 'Not Available'
       
        return ;
      } 

     this.success = data.payload.sucess ;
     this.scheme = data.payload.payload.scheme ;
     this.type = data.payload.payload.type ;
     this.bank = data.payload.payload.bank ;

     if (data.payload.payload.scheme ==''|| null){
      this.scheme = 'Not Available';
    } else if (data.payload.payload.type=''|| null){
      this.type = 'Not Available' ;
    } else if (this.data.payload.payload.bank ==''|| null){
      this.bank = 'Not Available' ;
    }
  }



}

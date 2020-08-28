import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

import { SharedMaterialModule } from 'app/shared/shared-material.module';
import {

  MatCardModule,
MatButtonModule,

  MatIconModule,
  MatTooltipModule
} from '@angular/material';


import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


import {HomeComponent} from './home.component';
import { HomeRoutes } from './home.routing';


@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule, 
    ReactiveFormsModule ,
    SharedMaterialModule,
    MatInputModule,
    MatTooltipModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    RouterModule.forChild(HomeRoutes)
  ],
 
  declarations: [HomeComponent]
  
})
export class HomeModule { }

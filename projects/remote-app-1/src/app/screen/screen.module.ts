import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenRoutingModule } from './screen-routing.module';
import { ScreenComponent } from './screen.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ScreenComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ScreenRoutingModule
  ]
})
export class ScreenModule { }

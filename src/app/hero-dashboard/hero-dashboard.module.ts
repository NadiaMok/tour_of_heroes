import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';



@NgModule({
  declarations: [HeroDashboardComponent],
  exports: [
    HeroDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroDashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './containers/reports.component';
import { ReportsRoutingModule } from './reports-routing.module';

export const COMPONENTS = [
  
];

export const CONTAINERS = [
  ReportsComponent
];


@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  declarations: [CONTAINERS],
})
export class ReportsModule { }

import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";
import {StockDetailComponent} from "./stock-detail.component";
import {ChartsModule} from "../../shared/components/charts/charts.component";

const routes: Routes = [
  {
    path: '',
    component: StockDetailComponent
  }
]

@NgModule({
  declarations: [
    StockDetailComponent,
  ],
  imports: [
    SharedModule,
    ChartsModule,
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class StockDetailModule { }

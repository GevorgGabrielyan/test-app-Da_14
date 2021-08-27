import { NgModule } from '@angular/core';

import { StocksListComponent } from "./stocks-list.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";
import { ListSearchComponent } from './list-search/list-search.component';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: StocksListComponent
  }
]

@NgModule({
  declarations: [
    StocksListComponent,
    ListSearchComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class StocksListModule { }

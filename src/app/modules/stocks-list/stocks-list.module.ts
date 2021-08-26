import { NgModule } from '@angular/core';

import { StocksListComponent } from "./stocks-list.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: StocksListComponent
  }
]

@NgModule({
  declarations: [
    StocksListComponent,
  ],
  imports: [RouterModule.forChild(routes)]
})
export class StocksListModule { }

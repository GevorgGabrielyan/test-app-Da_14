import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: 'stocks-list', pathMatch: 'full' },
  {
    path: 'stocks-list',
    loadChildren: () => import('./modules/stocks-list/stocks-list.module').then(m => m.StocksListModule)
  },
  {
    path: 'stocks/:id',
    loadChildren: () => import('./modules/stock-detail/stock-detail.module').then(m => m.StockDetailModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

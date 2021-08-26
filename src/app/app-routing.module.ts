import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: 'stocks-list', pathMatch: 'full' },
  {
    path: 'stocks-list',
    loadChildren: () => import('./modules/stocks-list/stocks-list.module').then(m => m.StocksListModule)
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

import { NgModule } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

const MATERIAL_MODULES = [
  MatIconModule,
  MatTableModule,
  MatInputModule,
  MatButtonModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatProgressSpinnerModule
]

@NgModule({
  imports: [
    ...MATERIAL_MODULES,
  ],
  exports: [
    ...MATERIAL_MODULES
  ]
})
export class SharedModule { }

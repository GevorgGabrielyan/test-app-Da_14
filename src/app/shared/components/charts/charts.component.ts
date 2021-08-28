import {Component, Input, NgModule} from '@angular/core';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {IChart} from "../../../core/interfaces";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {
  @Input()
  data: IChart[] = []

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
}

@NgModule({
  declarations: [ChartsComponent],
  imports: [NgxChartsModule],
  exports: [ChartsComponent]
})
export class ChartsModule {}

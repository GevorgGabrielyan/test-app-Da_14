import { Component, OnInit } from '@angular/core';
import {StockService} from "../../core/services/stock.service";
import {ActivatedRoute} from "@angular/router";
import {IChart, IStockDetail} from "../../core/interfaces";

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent implements OnInit {
  public selectedStock = '';
  public stockDetail: IStockDetail | undefined;
  public charts: IChart[] = [];
  constructor(private stockService: StockService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.selectedStock = this.route.snapshot.params.id
    this.stockService.getCharts(this.selectedStock).subscribe(res => {
      this.charts = res.results.map(item => ({ name: item.paymentDate, value: item.amount }))
      console.log(res);
    })
    this.stockService.getTickerDetails(this.selectedStock).subscribe(res => {
      this.stockDetail = res
      console.log(res);
    })
  }
}

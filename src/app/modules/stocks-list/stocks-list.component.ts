import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

import { IStock } from "../../core/interfaces";
import { StockService } from "../../core/services/stock.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss']
})
export class StocksListComponent implements OnInit {
  public displayedColumns: string[] = ['cik', 'name', 'ticker', 'type', 'active', 'last_updated_utc'];
  public dataSource: MatTableDataSource<IStock> = new MatTableDataSource<IStock>();

  @ViewChild(MatPaginator)
  public paginator: MatPaginator | undefined;

  public loading = false;

  public allStocks: IStock[] = [];

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.getStocks();
  }

  public getStocks(): void {
    this.loading = true;
    this.stockService.getStocks({ limit: 100 }).pipe(finalize(() => this.loading = false)).subscribe(res => {
      this.allStocks = res.results;
      this.setTableData(this.allStocks)
    })
  }

  public search(searchText: string = ''): void {
    const text = searchText.trim();
    if (text) {
      const stocks = this.allStocks.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
      this.setTableData(stocks)
      return;
    }
    this.setTableData(this.allStocks)
  }

  private setTableData(stocks: IStock[]): void {
    this.dataSource = new MatTableDataSource<IStock>(stocks);
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
}

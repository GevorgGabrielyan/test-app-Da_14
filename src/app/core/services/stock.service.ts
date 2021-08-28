import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IQueryParams, IResponse, IStock, IStockDetail} from "../interfaces";
import {IStockDividend} from "../interfaces/IStockDividend";

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private url = 'https://api.polygon.io';
  private apiKey = 'A4BaHfH5cpFUSHLv_mGA_Z6MgI9upesr';

  constructor(private http: HttpClient) { }

  public getStocks(option: IQueryParams): Observable<IResponse<IStock[]>> {
    const params = {
      ...option,
      apiKey: this.apiKey
    }
    return this.http.get<IResponse<IStock[]>>(`${this.url}/v3/reference/tickers`, { params })
  }

  public getCharts(ticker: string): Observable<IResponse<IStockDividend[]>> {
    const params = {
      apiKey: this.apiKey
    }
    return this.http.get<IResponse<IStockDividend[]>>(`${this.url}/v2/reference/dividends/${ticker}`, { params })
  }

  public getTickerDetails(ticker: string): Observable<IStockDetail> {
    const params = {
      apiKey: this.apiKey
    }
    return this.http.get<IStockDetail>(`${this.url}/v1/meta/symbols/${ticker}/company`, { params })
  }
}

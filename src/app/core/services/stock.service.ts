import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IQueryParams, IResponse, IStock} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private url = 'https://api.polygon.io/v2';
  private apiKey = 'A4BaHfH5cpFUSHLv_mGA_Z6MgI9upesr';

  constructor(private http: HttpClient) { }

  public getStocks(option: IQueryParams): Observable<IResponse<IStock[]>> {
    const params = {
      ...option,
      apiKey: this.apiKey
    }
    return this.http.get<IResponse<IStock[]>>(`${this.url}/reference/tickers`, { params })
  }

  public getCharts(ticker: string): Observable<IStock> {
    return this.http.get<IStock>(`${this.url}/reference/dividends/${ticker}`)
  }
}

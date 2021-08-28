export interface IStock {
  active: boolean;
  cik: string;
  composite_figi: string;
  currency_name: string;
  last_updated_utc: Date;
  locale: string;
  market: string;
  name: string;
  primary_exchange: string;
  share_class_figi: string;
  ticker: string;
}

export interface IStockDetail {
  active: boolean;
  bloomberg: string;
  ceo: string;
  cik: string;
  country: string;
  description: string;
  employees: number;
  exchange: string;
  exchangeSymbol: string;
  figi: string;
  hq_address: string;
  hq_country: string;
  hq_state: string;
  industry: string;
  lei: string;
  listdate: Date;
  logo: string;
  marketcap: number;
  name: string;
  phone: string;
  sector: string;
  sic: number;
  similar: string[];
  symbol: string;
  tags: string[];
  type: string;
  updated: Date

}

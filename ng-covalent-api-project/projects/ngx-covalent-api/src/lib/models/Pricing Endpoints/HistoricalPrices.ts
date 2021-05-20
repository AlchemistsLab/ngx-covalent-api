import { HistoricalPriceItem } from './HistoricalPriceItem';

export interface HistoricalPrices {
  contract_decimals: number;
  contract_name: String;
  contract_ticker_symbol: String;
  contract_address: String;
  supports_erc: String[];
  logo_url: String;
  update_at: String;
  quote_currency: String;
  prices: HistoricalPriceItem[];
  decimalsDivisor: String;
}

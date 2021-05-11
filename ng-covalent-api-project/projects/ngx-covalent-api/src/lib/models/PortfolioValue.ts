import { PortfolioHolding } from './PortfolioHolding';

export interface PortfolioValue {
  contract_decimals: number;
  contract_name: String;
  contract_ticker_symbol: String;
  contract_address: String;
  logo_url: String;
  holdings: PortfolioHolding[];
}

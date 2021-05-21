import { ExchangeBalances } from './ExchangeBalances';

export interface SushiswapExchangeBalanceResponse {
  address: String;
  updated_at: String;
  next_update_at: String;
  quote_currency: String;
  chain_id: number;
  sushiswap: ExchangeBalances;
}

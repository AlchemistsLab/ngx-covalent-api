import { ExchangeBalances } from './ExchangeBalances';

export interface UniswapV1ExchangeBalanceResponse {
  address: String;
  updated_at: String;
  next_update_at: String;
  quote_currency: String;
  chain_id: number;
  uniswap_v1: ExchangeBalances;
}

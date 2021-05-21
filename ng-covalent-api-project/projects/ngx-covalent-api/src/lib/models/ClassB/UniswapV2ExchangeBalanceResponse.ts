import { ExchangeBalances } from './ExchangeBalances';

export interface UniswapV2ExchangeBalanceResponse {
  address: String;
  updated_at: String;
  next_update_at: String;
  quote_currency: String;
  chain_id: number;
  uniswap_v2: ExchangeBalances;
}

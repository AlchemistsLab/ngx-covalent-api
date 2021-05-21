import { ExchangeBalancePoolToken } from './ExchangeBalancePoolToken';
import { ExchangeBalanceToken } from './ExchangeBalanceToken';

export interface LiquidityItem {
  act_act: String;
  act: String;
  description: String;
  tx_hash: String;
  token_0: ExchangeBalanceToken;
  token_1: ExchangeBalanceToken;
  pool_token: ExchangeBalancePoolToken;
}

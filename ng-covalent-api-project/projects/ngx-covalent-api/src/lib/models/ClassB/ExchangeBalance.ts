import { ExchangeBalancePoolToken } from './ExchangeBalancePoolToken';
import { ExchangeBalanceToken } from './ExchangeBalanceToken';

export interface ExchangeBalance {
  token_0: ExchangeBalanceToken;
  token_1: ExchangeBalanceToken;
  pool_token: ExchangeBalancePoolToken;
}

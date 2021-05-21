import { BalancerBalances } from './BalancerBalances';

export interface BalancerExchangeAddressBalanceResponse {
  address: String;
  updated_at: String;
  next_update: String;
  quote_currency: String;
  chain_id: number;
  balancer: BalancerBalances;
}

import { AaveBalances } from './AaveBalances';

export interface AaveAddressBalanceResponse {
  address: String;
  updated_at: String;
  next_update_at: String;
  quote_currency: String;
  chain_id: number;
  aave: AaveBalances;
}

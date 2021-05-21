import { AaveBalancesV2 } from './AaveBalancesV2';

export interface AaveAddressBalanceV2Response {
  address: String;
  updated_at: String;
  next_update_at: String;
  quote_currency: String;
  chain_id: number;
  aave: AaveBalancesV2;
}

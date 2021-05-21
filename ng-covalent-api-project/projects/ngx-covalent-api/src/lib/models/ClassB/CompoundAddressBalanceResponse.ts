import { CompoundBalances } from './CompoundBalances';

export interface CompoundAddressBalanceResponse {
  address: String;
  updated_at: String;
  next_update_at: String;
  quote_currency: String;
  chain_id: number;
  compound: CompoundBalances;
}

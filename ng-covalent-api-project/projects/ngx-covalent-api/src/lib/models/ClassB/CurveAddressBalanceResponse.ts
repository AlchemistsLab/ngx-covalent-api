import { CurveBalances } from './CurveBalances';

export interface CurveAddressBalanceResponse {
  address: String;
  updated_at: String;
  next_update_at: String;
  quote_currency: String;
  chain_id: number;
  curve: CurveBalances;
}

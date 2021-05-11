import { TokenBalanceItem } from './TokenBalanceItem';

export interface TokenBalance {
  address: String;
  updated_at: String;
  next_update_at: String;
  quote_currency: String;
  chain_id: Number;
  items: TokenBalanceItem[];
}

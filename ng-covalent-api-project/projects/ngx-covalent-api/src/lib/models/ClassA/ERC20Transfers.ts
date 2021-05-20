import { Pagination } from '../Pagination';
import { ERC20Transaction } from './ERC20Transaction';

export interface ERC20Transfers {
  address: String;
  updated_at: String;
  next_update_at: String;
  quote_currency: String;
  chain_id: number;
  items: ERC20Transaction[];
  pagination: Pagination;
}

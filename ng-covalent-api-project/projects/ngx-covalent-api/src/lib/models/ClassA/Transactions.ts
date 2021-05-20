import { Pagination } from '../Pagination';
import { TransactionItem } from './TransactionItem';

export interface Transactions {
  address: String;
  updated_at: String;
  next_update_at: String;
  quote_currency: String;
  chain_id: number;
  items: TransactionItem[];
  pagination: Pagination;
}

import { Pagination } from '../Pagination';
import { TransactionItem } from './TransactionItem';

export interface NftTransactionsResponse {
  updated_at: String;
  items: TransactionItem[];
  pagination: Pagination;
}

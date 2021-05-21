import { Pagination } from '../Pagination';
import { CompoundAddressActivityItem } from './CompoundAddressActivityItem';

export interface CompoundAddressActivityResponse {
  address: String;
  updated_at: String;
  next_update_at: String;
  quote_currency: String;
  chain_id: number;
  items: CompoundAddressActivityItem[];
  pagination: Pagination;
}

import { Pagination } from '../Pagination';
import { NftTokenIdItem } from './NftTokenIdItem';

export interface NftTokenIdsResponse {
  updated_at: String;
  items: NftTokenIdItem[];
  pagination: Pagination;
}

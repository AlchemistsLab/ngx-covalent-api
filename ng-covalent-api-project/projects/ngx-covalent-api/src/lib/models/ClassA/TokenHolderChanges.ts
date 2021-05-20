import { Pagination } from '../Pagination';
import { TokenHolderChangesItem } from './TokenHolderChangesItem';

export interface TokenHolderChanges {
  updated_at: String;
  item: TokenHolderChangesItem[];
  pagination: Pagination;
}

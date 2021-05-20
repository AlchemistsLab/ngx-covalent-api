import { Pagination } from '../Pagination';
import { TokenHolderItem } from './TokenHolderItem';

export interface TokenHolders {
  updated_at: String;
  items: TokenHolderItem[];
  pagination: Pagination;
}

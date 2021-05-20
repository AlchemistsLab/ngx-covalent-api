import { Pagination } from '../Pagination';
import { BlockItem } from './BlockItem';

export interface Block {
  updated_at: String;
  items: BlockItem[];
  pagination: Pagination;
}

import { Pagination } from '../Pagination';
import { SpotPriceItem } from './SpotPriceItem';

export interface SpotPrices {
  updated_at: String;
  items: SpotPriceItem[];
  pagination: Pagination;
}

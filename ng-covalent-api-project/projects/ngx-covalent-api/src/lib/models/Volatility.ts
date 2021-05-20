import { Pagination } from './Pagination';
import { VolatilityItem } from './VolatilityItem';

export interface Volatility {
  updated_at: String;
  items: VolatilityItem[];
  pagination: Pagination;
}

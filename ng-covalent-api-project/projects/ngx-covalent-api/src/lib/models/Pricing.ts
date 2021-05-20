import { Pagination } from './Pagination';
import { PricingItem } from './PricingItem';

export interface Pricing {
  updated_at: String;
  items: PricingItem[];
  pagination: Pagination;
}

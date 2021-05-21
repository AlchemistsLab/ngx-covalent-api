import { Pagination } from '../Pagination';
import { AugurAffiliateItem } from './AugurAffiliateItem';

export interface AugurAffiliateResponse {
  updated_at: String;
  items: AugurAffiliateItem[];
  pagination: Pagination;
}

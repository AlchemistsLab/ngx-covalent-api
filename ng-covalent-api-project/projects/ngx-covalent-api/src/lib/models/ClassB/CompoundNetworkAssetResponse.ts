import { Pagination } from '../Pagination';
import { CompoundNetworkAssetItem } from './CompoundNetworkAssetItem';

export interface CompoundNetworkAssetResponse {
  updated_at: String;
  items: CompoundNetworkAssetItem[];
  pagination: Pagination;
}

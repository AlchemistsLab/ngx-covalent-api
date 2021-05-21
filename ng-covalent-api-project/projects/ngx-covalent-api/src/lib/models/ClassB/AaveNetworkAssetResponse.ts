import { Pagination } from '../Pagination';
import { AaveNetworkAssetItem } from './AaveNetworkAssetItem';

export interface AaveNetworkAssetResponse {
  updated_at: String;
  items: AaveNetworkAssetItem[];
  pagination: Pagination;
}

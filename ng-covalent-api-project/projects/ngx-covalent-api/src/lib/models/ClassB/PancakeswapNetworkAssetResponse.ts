import { Pagination } from '../Pagination';
import { PancakeswapNetworkAssetsItem } from './PancakeswapNetworkAssetsItem';

export interface PancakeswapNetworkAssetResponse {
  updated_at: String;
  items: PancakeswapNetworkAssetsItem[];
  pagination: Pagination;
}

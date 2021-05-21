import { Pagination } from '../Pagination';
import { SushiswapNetworkAssetsItem } from './SushiswapNetworkAssetsItem';

export interface SushiswapNetworkAssetResponse {
  updated_at: String;
  items: SushiswapNetworkAssetsItem[];
  pagination: Pagination;
}

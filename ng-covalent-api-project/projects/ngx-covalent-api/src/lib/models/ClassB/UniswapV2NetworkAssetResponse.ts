import { Pagination } from '../Pagination';
import { UniswapV2NetworkAssetsItem } from './UniswapV2NetworkAssetsItem';

export interface UniswapV2NetworkAssetResponse {
  updated_at: String;
  items: UniswapV2NetworkAssetsItem[];
  pagination: Pagination;
}

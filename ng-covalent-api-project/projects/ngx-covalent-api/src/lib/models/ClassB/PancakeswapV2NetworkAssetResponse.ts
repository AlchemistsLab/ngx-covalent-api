import { Pagination } from '../Pagination';
import { PancakeswapV2NetworkAssetsItem } from './PancakeswapV2NetworkAssetsItem';

export interface PancakeswapV2NetworkAssetResponse {
  updated_at: String;
  items: PancakeswapV2NetworkAssetsItem[];
  pagination: Pagination;
}

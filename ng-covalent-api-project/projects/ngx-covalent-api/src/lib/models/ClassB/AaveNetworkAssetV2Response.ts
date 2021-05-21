import { Pagination } from '../Pagination';
import { AaveNetworkAssetItemV2 } from './AaveNetworkAssetItemV2';

export interface AaveNetworkAssetV2Response {
  updated_at: String;
  items: AaveNetworkAssetItemV2[];
  pagination: Pagination;
}

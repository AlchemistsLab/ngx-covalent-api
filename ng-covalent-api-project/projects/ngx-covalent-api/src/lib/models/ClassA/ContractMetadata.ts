import { Pagination } from '../Pagination';
import { ContractMetadataItem } from './ContractMetadataItem';

export interface ContractMetadata {
  updated_at: String;
  items: ContractMetadataItem;
  pagination: Pagination;
}

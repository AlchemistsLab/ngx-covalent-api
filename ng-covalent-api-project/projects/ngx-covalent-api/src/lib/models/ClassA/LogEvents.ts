import { Pagination } from '../Pagination';
import { LogEventItem } from './LogEventItem';

export interface LogEvents {
  updated_at: String;
  items: LogEventItem[];
  pagination: Pagination;
  updatedAt: String;
}

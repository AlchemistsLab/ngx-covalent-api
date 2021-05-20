import { HistoricalPriceMetadata } from './HistoricalPriceMetadata';

export interface HistoricalPriceItem {
  contract_metadata: HistoricalPriceMetadata;
  date: String;
  price: number;
}

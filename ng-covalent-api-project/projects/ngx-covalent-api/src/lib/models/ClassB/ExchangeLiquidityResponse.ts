import { LiquidityItem } from './LiquidityItem';

export interface ExchangeLiquidityResponse {
  address: String;
  updated_at: String;
  next_update_at: String;
  quote_currency: String;
  chain_id: number;
  items: LiquidityItem[];
}

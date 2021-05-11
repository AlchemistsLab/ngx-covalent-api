import { PortfolioValue } from './PortfolioValue';

export interface Portfolio {
  address: String;
  updated_at: String;
  next_update_at: String;
  quote_currency: String;
  chain_id: String;
  items: PortfolioValue[];
}

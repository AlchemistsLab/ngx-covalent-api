import { PortfolioDetail } from './PortfolioDetail';

export interface PortfolioHolding {
  timestamp: String;
  quote_rate: String;
  open: PortfolioDetail;
  high: PortfolioDetail;
  low: PortfolioDetail;
  close: PortfolioDetail;
}

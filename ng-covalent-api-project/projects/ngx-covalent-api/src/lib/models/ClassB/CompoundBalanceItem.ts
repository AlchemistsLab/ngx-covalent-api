import { CompoundBorrowToken } from './CompoundBorrowToken';
import { CompoundSupplyToken } from './CompoundSupplyToken';

export interface CompoundBalanceItem {
  account_address: String;
  source: String;
  supply_tokens: CompoundSupplyToken[];
  borrow_tokens: CompoundBorrowToken[];
  total_supply_eth: String;
  total_borrow_eth: String;
  total_collateral_eth: String;
  total_borrowing_power_eth: String;
  total_supply_eth_quote: number;
  total_borrow_eth_quote: number;
  total_collateral_eth_quote: number;
  total_borrowing_power_eth_quote: number;
  comp_accrued_quote: number;
  comp_balance_quote: number;
  comp_balance: String;
  comp_accrued: String;
}

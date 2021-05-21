export interface AaveBalance {
  atoken_contract_ticker_symbol: String;
  atoken_contract_name: String;
  atoken_contract_decimals: number;
  atoken_balance: number;
  borrow_balance: number;
  borrow_rate: number;
  liquidity_rate: number;
  origination_fee: number;
  peg_contract_decimals: number;
  peg_contract_address: String;
  peg_contract_ticker_symbol: String;
  logo_url: String;
  quote_rate: number;
  quote: number;
  borrow_quote: number;
}

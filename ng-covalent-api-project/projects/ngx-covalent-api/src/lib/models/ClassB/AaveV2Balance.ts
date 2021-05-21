export interface AaveV2Balance {
  atoken_contract_address: String;
  atoken_contract_ticker_symbol: String;
  atoken_contract_name: String;
  atoken_contract_decimals: number;
  atoken_balance: String;
  asset_contract_decimals: number;
  asset_contract_address: String;
  asset_contract_ticker_symbol: String;
  logo_url: String;
  liquidity_rate: number;
  quote_rate: number;
  quote: number;
  borrow_balance: String;
  borrow_rate: number;
  borrow_quote: number;
  origination_fee: String;
}

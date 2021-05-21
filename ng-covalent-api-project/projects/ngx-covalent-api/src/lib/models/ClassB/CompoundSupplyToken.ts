export interface CompoundSupplyToken {
  contract_decimals: 18;
  contract_name: String;
  contract_ticker_symbol: String;
  contract_address: String;
  supports_erc: String[];
  logo_url: String;
  balance: String;
  interest_accrued: String;
  balance_quote: number;
  interest_accrued_quote: number;
  quote_rate: number;
  apr: number;
  decimalsDivisor: String;
}

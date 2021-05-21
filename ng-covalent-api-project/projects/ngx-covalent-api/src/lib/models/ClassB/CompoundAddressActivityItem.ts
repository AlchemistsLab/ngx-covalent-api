export interface CompoundAddressActivityItem {
  act_at: String;
  tx_hash: String;
  act: String;
  description: String;
  amount: String;
  ctoken_amount: String;
  contract_address: String;
  contract_logo_url: String;
  contract_decimals: number;
  ctoken_contract_decimals: number;
  contract_ticker_symbol: String;
  ctoken_contract_ticker_symbol: String;
  quote_rate: number;
  quote: number;
  successful: boolean;
  gas_offered: number;
  gas_spent: number;
  gas_price: number;
  gas_quote: number;
}

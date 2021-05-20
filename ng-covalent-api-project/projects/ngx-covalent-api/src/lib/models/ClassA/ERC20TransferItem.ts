export interface ERC20TransferItem {
  block_signed_at: String;
  tx_hash: String;
  from_address: String;
  from_address_label: String;
  to_address: String;
  to_address_label: String;
  contract_decimals: number;
  contract_name: String;
  contract_ticker_symbol: String;
  contract_address: String;
  logo_url: String;
  transfer_type: String;
  delta: String;
  balance: number;
  quote_rate: number;
  delta_quote: number;
  balance_quote: number;
}

export interface UniswapV2NetworkAssetToken {
  contract_address: String;
  contract_name: String;
  volume_in_24h: String;
  volume_out_24h: String;
  quote_rate: number;
  reserve: String;
  logo_url: String;
  contract_ticker_symbol: String;
  contract_decimals: number;
}

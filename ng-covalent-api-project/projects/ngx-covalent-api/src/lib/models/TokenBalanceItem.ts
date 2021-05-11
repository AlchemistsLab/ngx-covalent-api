export interface TokenBalanceItem {
  contract_decimals: number;
  contract_name: string;
  contract_ticker_symbol: string;
  contract_address: string;
  supports_erc: [string];
  logo_url: string;
  type: string; // itemType
  balance: string;
  quote_rate: number;
  quote: number;
  //nft_data: [NftData]?
}

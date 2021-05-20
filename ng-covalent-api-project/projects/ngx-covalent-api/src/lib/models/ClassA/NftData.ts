import { ExternalNftData } from '../ExternalNftData';

export interface NftData {
  token_id: number;
  token_balance: number;
  token_url: String;
  supports_erc: String[];
  token_price_wei: number;
  token_quote_rate_eth: String;
  external_data: ExternalNftData;
  owner: String;
}

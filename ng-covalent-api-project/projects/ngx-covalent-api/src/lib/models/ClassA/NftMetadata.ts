import { NftData } from './NftData';

export interface NftMetadata {
  contract_decimals: number;
  contract_name: String;
  contract_ticker_symbol: String;
  contract_address: String;
  supports_erc: String[];
  logo_url: String;
  type: String;
  nft_data: NftData[];
}

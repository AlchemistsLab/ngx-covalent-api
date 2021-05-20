import { NftData } from './NftData';
import { TokenType } from './TokenType';

export interface TokenBalanceItem {
  contract_decimals: number;
  contract_name: string;
  contract_ticker_symbol: string;
  contract_address: string;
  supports_erc: [string];
  logo_url: string;
  type: TokenType;
  balance: string;
  quote_rate: number;
  quote: number;
  nft_data: [NftData];
}

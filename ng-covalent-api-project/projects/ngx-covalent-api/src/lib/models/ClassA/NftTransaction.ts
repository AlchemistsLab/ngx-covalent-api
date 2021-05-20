import { LogEventItem } from './LogEventItem';
import { TransactionItem } from './TransactionItem';

export interface NftTransaction {
  contract_decimals: number;
  contract_name: String;
  contract_ticker_symbol: String;
  contract_address: String;
  support_erc: String[];
  logo_url: String;
  type: String;
  nft_transactions: TransactionItem[];
}

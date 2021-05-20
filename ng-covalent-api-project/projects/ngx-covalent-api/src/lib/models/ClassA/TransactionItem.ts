import { TransactionLogEvent } from './TransactionLogEvent';

export interface TransactionItem {
  block_signed_at: String;
  // block_height: number; ?
  tx_hash: String;
  tx_offset: number;
  successful: boolean;
  from_address: String;
  from_address_label: String;
  to_address: String;
  to_address_label: String;
  value: String;
  value_quote: number;
  gas_offered: number;
  gas_spent: number;
  gas_price: number;
  gas_quote: number;
  gas_quote_rate: number;
  log_events: TransactionLogEvent[];
}

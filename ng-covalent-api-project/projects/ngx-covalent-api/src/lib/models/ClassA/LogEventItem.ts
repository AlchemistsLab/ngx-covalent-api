import { LogEventDecoded } from './LogEventDecoded';

export interface LogEventItem {
  block_signed_at: String;
  block_height: number;
  tx_offset: number;
  log_offset: number;
  tx_hash: String;
  _raw_log_topics_bytes: String;
  raw_log_topics: String[];
  sender_address: String;
  sender_address_label: String;
  raw_log_data: String;
  decoded: LogEventDecoded;
}

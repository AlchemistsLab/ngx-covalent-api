export interface VolatilityItem {
  contract_decimals: number;
  contract_name: String;
  contract_ticker_symbol: String;
  contract_address: String;
  supports_erc: String[];
  logo_url: String;
  stddev_1h: number;
  stddev_2h: number;
  stddev_4h: number;
  stddev_8h: number;
  stddev_16h: number;
  stddev_24h: number;
  quote_rate: number;
  decimalsDivisor: String;
}

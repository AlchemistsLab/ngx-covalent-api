import { SushiswapNetworkAssetToken } from './SushiswapNetworkAssetToken';

export interface SushiswapNetworkAssetsItem {
  exchange: String;
  swap_count_24h: number;
  total_liquidity_quote: number;
  volume_24h_quote: number;
  fee_24h_quote: number;
  total_supply: String;
  quote_rate: number;
  block_height: number;
  token_0: SushiswapNetworkAssetToken;
  token_1: SushiswapNetworkAssetToken;
}

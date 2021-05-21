import { PancakeswapNetworkAssetToken } from './PancakeswapNetworkAssetToken';

export interface PancakeswapNetworkAssetsItem {
  exchange: String;
  swap_count_24h: number;
  total_liquidity_quote: number;
  volume_24h_quote: number;
  fee_24h_quote: number;
  volume_7d_quote: number;
  annualized_fee: number;
  total_supply: String;
  quote_rate: number;
  block_height: number;
  token_0: PancakeswapNetworkAssetToken;
  token_1: PancakeswapNetworkAssetToken;
}

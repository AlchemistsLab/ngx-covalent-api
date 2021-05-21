import { PancakeswapV2NetworkAssetToken } from './PancakeswapV2NetworkAssetToken';

export interface PancakeswapV2NetworkAssetsItem {
  exchange: String;
  swap_count_24h: number;
  total_liquidity_quote: number;
  volume_24h_quote: number;
  fee_24h_quote: number;
  total_supply: String;
  quote_rate: number;
  block_height: number;
  token_0: PancakeswapV2NetworkAssetToken;
  token_1: PancakeswapV2NetworkAssetToken;
}

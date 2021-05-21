import { BalancerBalanceAsset } from './BalancerBalanceAsset';
import { BalancerBalancePool } from './BalancerBalancePool';

export interface BalancerBalanceItem {
  pool: BalancerBalancePool;
  assets: BalancerBalanceAsset[];
}

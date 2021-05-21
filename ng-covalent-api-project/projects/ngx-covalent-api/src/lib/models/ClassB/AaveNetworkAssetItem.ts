import { AaveNetworkAssetAtoken } from './AaveNetworkAssetAtoken';
import { AaveNetworkAssetUnderlying } from './AaveNetworkAssetUnderlying';

export interface AaveNetworkAssetItem {
  underlying: AaveNetworkAssetUnderlying;
  atoken: AaveNetworkAssetAtoken;
  variable_borrow_apr: number;
  stable_borrow_apr: number;
  supply_apy: number;
  lending_pool_contract: String;
  lending_pool_core_contract: String;
}

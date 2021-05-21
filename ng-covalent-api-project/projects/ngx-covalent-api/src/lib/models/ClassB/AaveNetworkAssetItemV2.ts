import { AaveNetworkAssetAtoken } from './AaveNetworkAssetAtoken';
import { AaveNetworkAssetUnderlying } from './AaveNetworkAssetUnderlying';

export interface AaveNetworkAssetItemV2 {
  underlying: AaveNetworkAssetUnderlying;
  atoken: AaveNetworkAssetAtoken;
  variable_borrow_apr: number;
  stable_borrow_apr: number;
  supply_apy: number;
  lending_pool_contract: String;
  lending_pool_addresses_provider: String;
  lending_pool_addresses_provider_registry: String;
  lending_pool_collateral_manager: String;
  lending_pool_configurator: String;
  lending_rate_oracle: String;
  price_oracle: String;
  pool_admin: String;
  emergency_admin: String;
  protocol_data_provider: String;
  weth_gateway: String;
  collector_contract: String;
}

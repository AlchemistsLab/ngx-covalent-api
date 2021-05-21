import { CompoundCtoken } from './CompoundCtoken';
import { CompoundUnderlying } from './CompoundUnderlying';

export interface CompoundNetworkAssetItem {
  ctoken: CompoundCtoken;
  underlying: CompoundUnderlying;
  borrow_apr: number;
  supply_apr: number;
}

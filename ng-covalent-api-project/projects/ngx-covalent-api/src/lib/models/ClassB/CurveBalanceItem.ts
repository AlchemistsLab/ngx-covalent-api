import { CurveBalances } from './CurveBalances';
import { CurvePool } from './CurvePool';
import { CurveUnderlying } from './CurveUnderlying';

export interface CurveBalanceItem {
  pool: CurvePool;
  underlying: CurveUnderlying[];
}

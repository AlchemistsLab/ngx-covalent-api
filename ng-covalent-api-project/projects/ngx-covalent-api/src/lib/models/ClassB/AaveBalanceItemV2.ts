import { AaveV2Balance } from './AaveV2Balance';
import { AaveV2BorrowPosition } from './AaveV2BorrowPosition';
import { AaveV2SupplyPosition } from './AaveV2SupplyPosition';

export interface AaveBalanceItemV2 {
  balance: AaveV2Balance;
  supply_position: AaveV2SupplyPosition;
  borrow_position: AaveV2BorrowPosition;
}

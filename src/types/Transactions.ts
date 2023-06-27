import { TransactionsTypes } from "../utils/TransactionsTypes.enum";

export interface Transactions {
  id: number;
  balanceId: number;
  type: TransactionsTypes;
  ammount: number;
}

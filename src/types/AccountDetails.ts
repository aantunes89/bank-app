import { Transactions } from "./Transactions";

export interface AccountDetails {
  id: number;
  name: string;
  balance: number;
  transactions?: Transactions[];
}

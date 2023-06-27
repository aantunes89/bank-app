import { AccountDetails } from "../../types/AccountDetails";
import Account from "../../components/Account/Account";
import { Grid } from "@mui/material";
import { useGetAccountsQuery } from "../../store/slices/accounts";
import { useGetTransactionsQuery } from "../../store/slices/transactions";
import { useEffect, useState } from "react";
import { Transactions } from "../../types/Transactions";

const Home = () => {
  const [accountDetails, setAccountDetails] = useState<AccountDetails[]>([]);

  const { data: accDetails } = useGetAccountsQuery<{ data: AccountDetails[] }>(
    "balances"
  );

  const { data: transactionsDetails } = useGetTransactionsQuery<{
    data: Transactions[];
  }>("transactions");

  useEffect(() => {
    const newAccountDetails = accDetails?.map(({ id, ...acc }) => {
      const transactions = transactionsDetails?.filter(
        ({ balanceId }) => balanceId === id
      );

      return transactions ? { ...acc, id, transactions } : { ...acc, id };
    });

    setAccountDetails(newAccountDetails);
  }, [accDetails, transactionsDetails]);

  const renderBalances = (accountDetails: AccountDetails[]) =>
    accountDetails?.map((details) => (
      <Account key={details.id} details={details} />
    ));

  return <Grid>{renderBalances(accountDetails)}</Grid>;
};

export default Home;

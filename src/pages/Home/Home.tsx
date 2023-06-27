import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { AccountDetails } from "../../types/AccountDetails";
import { Transactions } from "../../types/Transactions";
import Account from "../../components/Account/Account";
import { Grid } from "@mui/material";

const Home = () => {
  const [accountDetails, setAccountDetails] = useState<AccountDetails[]>([]);

  //   async function loadInfo<Type>(route: string): Promise<Type> {
  //     const { data } = await api.get(`/${route}`);
  //     return data;
  //   }

  useEffect(() => {
    // const loadAll = async (): Promise<void> => {
    //   const [accountData, transactionsData] = (await Promise.all([
    //     loadInfo<AccountDetails[]>("balances"),
    //     loadInfo<Transactions[]>("transactions"),
    //   ])) as [AccountDetails[], Transactions[]];

    //   const formattedAccountData = accountData.map(
    //     ({ id, ...account }): AccountDetails => {
    //       const transactions =
    //         transactionsData.filter(({ balanceId }) => balanceId === id) ?? [];

    //       return { id, ...account, transactions };
    //     }
    //   );

    //   setAccountDetails(formattedAccountData);
    // };

    const loadAccountDetails = async () => {
      const { data: accDetails } = await api.get("/balances");
      setAccountDetails(accDetails);
    };

    try {
      loadAccountDetails();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const renderBalances = (accountDetails: AccountDetails[]) =>
    accountDetails.map((details) => (
      <Account key={details.id} details={details} />
    ));

  /*
        - Criar o componente Accounts
        - Passar o balance como props
    */

  return <Grid>{renderBalances(accountDetails)}</Grid>;
};

export default Home;

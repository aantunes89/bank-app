import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const accountsSlice = createApi({
  reducerPath: "ACCOUNTS_BANK_API",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3333" }),
  tagTypes: ["AccountDetails", "Transactions"],
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => "balances",
      providesTags: ["AccountDetails"],
    }),
  }),
});

export const { useGetAccountsQuery } = accountsSlice;

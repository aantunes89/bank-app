import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const transactionsSlice = createApi({
  reducerPath: "TRANSACTIONS_BANK_API",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3333" }),
  tagTypes: ["Transactions"],
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: (route) => route,
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetTransactionsQuery } = transactionsSlice;

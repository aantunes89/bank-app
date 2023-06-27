import { configureStore } from "@reduxjs/toolkit";
import { accountsSlice } from "./slices/accounts";
import { transactionsSlice } from "./slices/transactions";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [accountsSlice.reducerPath]: accountsSlice.reducer,
    [transactionsSlice.reducerPath]: transactionsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      accountsSlice.middleware,
      transactionsSlice.middleware,
    ]),
});

setupListeners(store.dispatch);

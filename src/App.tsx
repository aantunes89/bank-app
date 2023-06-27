import React from "react";
import GlobalStyles from "./styles/global";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import AppRoutes from "./routes";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;

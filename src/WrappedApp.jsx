import React, { createContext } from "react";

import App from "./App";
import TrendingFeedStore from "./store/TrendingFeedStore";
import UserStore from "./store/UserStore";

export const Context = createContext(null);

const WrappedApp = function () {
  const stores = React.useMemo(
    () => ({
      user: new UserStore(),
      trendingFeed: new TrendingFeedStore(),
    }),
    []
  );

  return (
    <Context.Provider value={stores}>
      <App />
    </Context.Provider>
  );
};

export default WrappedApp;

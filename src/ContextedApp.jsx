import React, { createContext, useMemo } from "react";

import App from "./components/App";
import TrendingFeedStore from "./store/TrendingFeedStore";
import UserStore from "./store/UserStore";

export const userAndFeedDataContext = createContext(null);

const ContextedApp = function () {
  const stores = useMemo(
    () => ({
      user: new UserStore(),
      trendingFeed: new TrendingFeedStore(),
    }),
    []
  );

  return (
    <userAndFeedDataContext.Provider value={stores}>
      <App />
    </userAndFeedDataContext.Provider>
  );
};

export default ContextedApp;

import React, { createContext, useMemo, FC } from "react";

import TrendingFeedStore from "../models/TrendingFeedStore";
import UserStore from "../models/UserStore";
import App from "./App";

import * as themes from "../shared/mock-data/themes.json";
import { setToLS } from "../shared/lib/locStorageFuncs";

interface IContext {
  user: UserStore;
  trendingFeed: TrendingFeedStore;
}

export const userAndFeedDataContext = createContext<IContext | null>(null);

const ContextedApp: FC = () => {
  const stores = useMemo(
    () => ({
      user: new UserStore(),
      trendingFeed: new TrendingFeedStore(),
    }),
    []
  );

  setToLS("all-themes", themes.data);

  return (
    <userAndFeedDataContext.Provider value={stores}>
      <App />
    </userAndFeedDataContext.Provider>
  );
};

export default ContextedApp;

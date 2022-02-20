import { createContext, useMemo, FC } from "react";

import TrendingFeedStore from "../models/TrendingFeedStore";
import UserStore from "../models/UserStore";
import App from "./App";

interface IContext {
  user: UserStore;
  trendingFeed: TrendingFeedStore;
}

export const userAndFeedDataContext = createContext<IContext | null>(null);

const ContextedApp: FC = function () {
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

import React, { createContext } from "react";

import App from "./App";
import FeedStore from "./store/FeedStore";
import UserStore from "./store/UserStore";

export const Context = createContext(null);

const WrappedApp = function () {
  const stores = React.useMemo(
    () => ({
      user: new UserStore(),
      feed: new FeedStore(),
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

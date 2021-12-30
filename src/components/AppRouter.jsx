import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Switch, Route, Redirect } from "react-router-dom";

import { userAndFeedDataContext } from "../WrappedApp";
import appRoutes from "../routes";
import { PROFILE_ROUTE } from "../utils/consts";

const AppRouter = observer(() => {
  const { user } = useContext(userAndFeedDataContext);

  return (
    <Switch>
      {user.isAuth &&
        appRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}

      <Redirect to={PROFILE_ROUTE} />
    </Switch>
  );
});

export default AppRouter;

import React, { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";

import { userAndFeedDataContext } from "../app";
import appRoutes from "./routes";
import { UserProfile } from "./user-profile";

const AppRouter: FC = observer(() => {
  const user = useContext(userAndFeedDataContext)?.user;

  return (
    <Routes>
      {user?.isAuth &&
        appRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

      <Route path="*" element={<UserProfile />} />
    </Routes>
  );
});

export default AppRouter;

import { useContext, useEffect, FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { userAndFeedDataContext } from ".";
import NavBar from "../entities/navbar";
import AppRouter from "../pages";
import { getUserInfo } from "./api/getUserInfo";
import userInfo from "../shared/mock-data/user-info";

const App: FC = function () {
  const user = useContext(userAndFeedDataContext)?.user;

  useEffect(() => {
    //   getUserInfo()
    //     .then((data) => {
    //       user?.setUserInfo(data);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });

    user?.setUserInfo(userInfo);
    //using mock data
  }, [user]);

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;

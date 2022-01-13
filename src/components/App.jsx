import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";
// import axios from "axios";

import AppRouter from "./AppRouter";
import NavBar from "./NavBar/Navbar/NavBar";
import { userAndFeedDataContext } from "../ContextedApp";
// import { optionUserInfo } from "./utils/optionsForRequest";

const App = observer(() => {
  const { user } = useContext(userAndFeedDataContext);

  useEffect(() => {
    // axios
    //   .request(optionUserInfo)
    //   .then((response) => {
    //     user.setUserInfo(response.data);
    //     localStorage.setItem("UserInfo", JSON.stringify(response.data));
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, [user]);

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;

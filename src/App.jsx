import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import "./App.css";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import { userAndFeedDataContext } from "./WrappedApp";
import { optionUserInfo } from "./utils/optionsForRequest";

const App = observer(() => {
  const { user } = useContext(userAndFeedDataContext);

  useEffect(() => {
    axios
      .request(optionUserInfo)
      .then((response) => {
        user.setUserInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;

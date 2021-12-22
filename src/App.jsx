import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import { Context } from "./WrappedApp";
import "./App.css";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { optionUserFeed, optionUserInfo } from "./utils/optionsForRequest";
import ProfileSkeleton from "./components/ProfileSkeleton";

const App = observer(() => {
  const [loading, setLoading] = useState(false);

  const { user } = useContext(Context);

  useEffect(() => {
    axios
      .request(optionUserFeed)
      .then((response) => {
        user.setUserFeed(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .request(optionUserInfo)
      .then((response) => {
        user.setUserInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <ProfileSkeleton />;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;

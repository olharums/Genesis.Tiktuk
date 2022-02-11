import React, { useContext, useEffect, FC, useState } from "react";
import { HashRouter } from "react-router-dom";

import { userAndFeedDataContext } from ".";
import NavBar from "../entities/navbar";
import AppRouter from "../pages";
import { getUserInfo } from "./api/getUserInfo";
import userInfo from "../shared/mock-data/user-info";
import GlobalStyle from "./globalStyles";
import { useTheme } from "../models/useTheme";
import { ThemeProvider } from "styled-components";

const App: FC = () => {
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

  const { theme, themeLoaded, changeTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);

  return (
    <HashRouter>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyle />
          <NavBar changeTheme={changeTheme} />
          <AppRouter />
        </ThemeProvider>
      )}
    </HashRouter>
  );
};

export default App;

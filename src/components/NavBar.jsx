import React, { useContext } from "react";
import { useLocation } from "react-router";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { FEED_ROUTE, PROFILE_ROUTE } from "../utils/consts";
import { Context } from "../WrappedApp";
import ButtonLogOut from "./NavBarComponents/ButtonLogOut";
import ButtonLogIn from "./NavBarComponents/ButtonLogIn";
import AppLogo from "./NavBarComponents/AppLogo";

const NavBar = observer(() => {
  const { user } = useContext(Context);

  const location = useLocation();

  const BUTTON_LOG_BY_USER_AUTHORIZATION = {
    true: <ButtonLogOut />,
    false: <ButtonLogIn />,
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="d-flex justify-content-between px-5"
    >
      {user.isAuth && <NavLink to={FEED_ROUTE}>Новини</NavLink>}

      {location.pathname === PROFILE_ROUTE && user.isAuth ? (
        <h3 className="text-white">
          {user.userInfo.user && user.userInfo.user.nickname}
        </h3>
      ) : (
        <AppLogo />
      )}

      {location.pathname === PROFILE_ROUTE ? (
        BUTTON_LOG_BY_USER_AUTHORIZATION[user.isAuth]
      ) : (
        <NavLink to={PROFILE_ROUTE}>Профіль</NavLink>
      )}
    </Navbar>
  );
});

export default NavBar;

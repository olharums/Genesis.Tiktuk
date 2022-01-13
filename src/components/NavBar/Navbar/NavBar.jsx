import React, { useContext } from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { PROFILE_ROUTE, TRENDING_FEED_ROUTE } from "../../../utils/consts";
import { userAndFeedDataContext } from "../../../ContextedApp";
import Logo from "../Logo/Logo";
import ButtonLog from "../ButtonLog";
import "./styles.scss";

const NavBar = observer(() => {
  const { user } = useContext(userAndFeedDataContext);

  const BUTTON_LOG_BY_USER_AUTHORIZATION = {
    true: <ButtonLog text="Вийти" />,
    false: <ButtonLog text="Авторизація" />,
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="d-flex justify-content-between px-5"
    >
      {user.isAuth && <NavLink to={TRENDING_FEED_ROUTE}>Новини</NavLink>}

      {user.isAuth ? (
        <NavLink to={PROFILE_ROUTE}>
          {user.userInfo.user && user.userInfo.user.nickname}
        </NavLink>
      ) : (
        <Logo />
      )}

      {BUTTON_LOG_BY_USER_AUTHORIZATION[user.isAuth]}
    </Navbar>
  );
});

export default NavBar;

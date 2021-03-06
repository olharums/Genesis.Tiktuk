import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { TRENDING_FEED_ROUTE } from "../../../utils/consts";
import "./styles.scss";

const Logo = function () {
  return (
    <Container className="justify-content-center">
      <img
        src="https://www.freepnglogos.com/uploads/tik-tok-logo-png/tik-tok-tiktok-logo-app-trend-1.png"
        width="45"
        height="45"
        alt="App logo"
      />

      <NavLink to={TRENDING_FEED_ROUTE} className="logo">
        TikTuk
      </NavLink>
    </Container>
  );
};

export default Logo;

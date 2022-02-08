import React, { FC } from "react";

import { TRENDING_FEED_ROUTE } from "../../../shared/lib/paths";

import { ContainerStyled, LogoLinkStyled } from "./styles.js";

const Logo: FC = function () {
  return (
    <ContainerStyled>
      <img
        src="https://www.freepnglogos.com/uploads/tik-tok-logo-png/tik-tok-tiktok-logo-app-trend-1.png"
        width="45"
        height="45"
        alt="App logo"
      />

      <LogoLinkStyled to={TRENDING_FEED_ROUTE}>TikTuk</LogoLinkStyled>
    </ContainerStyled>
  );
};

export default Logo;

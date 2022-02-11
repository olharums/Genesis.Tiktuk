import React, { FC } from "react";
import { Col } from "react-bootstrap";
import { useLocation } from "react-router";

import { PROFILE_ROUTE } from "../../shared/lib/paths";
import UserStats from "../../entities/user-stats";
import SubscribeButton from "../../entities/subscribe-button";
import Signature from "../../entities/signature";
import { IUser } from "./IUser";

import { ContainerStyled, ImgStyled, RowStyled } from "./styles";

const UserInfo: FC<{ user: IUser }> = function ({ user }) {
  const defaultAvatar = "https://img.icons8.com/android/96/000000/user.png";
  return (
    <ContainerStyled>
      <RowStyled>
        <Col>
          <ImgStyled
            width="200px"
            // src={user.avatar || defaultAvatar} // user.avatar has an outdated link
            src={defaultAvatar}
            alt="user's avatar"
          />
          <h2>@{user.name}</h2>
        </Col>
      </RowStyled>

      <UserStats
        following={user.following}
        fans={user.fans}
        heart={user.heart}
      />

      <Signature signature={user.signature} bioLink={user.bioLink} />

      {useLocation().pathname !== PROFILE_ROUTE && <SubscribeButton />}
    </ContainerStyled>
  );
};

export default UserInfo;

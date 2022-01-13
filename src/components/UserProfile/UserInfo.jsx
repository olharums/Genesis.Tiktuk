import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import { PROFILE_ROUTE } from "../../utils/consts";
import Signature from "./Signature/Signature";
import UserStats from "./UserStats";
import SubscribeButton from "./SubscribeButton/SubscribeButton";
import "../../settings/globalStyles.scss";

const UserInfo = function ({ user, location }) {
  return (
    <Container className="d-flex flex-column align-items-center text-center">
      <Row className="m-3 p-2">
        <Col>
          <img
            className="border-radius-10em"
            width="25%"
            src={user.avatar}
            alt="user's avatar"
          />
          <h2>@{user.name}</h2>
        </Col>
      </Row>

      <UserStats
        following={user.following}
        fans={user.fans}
        heart={user.heart}
      />

      {!(location.pathname === PROFILE_ROUTE) && <SubscribeButton />}

      <Signature signature={user.signature} bioLink={user.bioLink} />
    </Container>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    following: PropTypes.number,
    fans: PropTypes.number,
    heart: PropTypes.number,
    signature: PropTypes.string,
    bioLink: PropTypes.shape({
      filled: PropTypes.bool,
      link: PropTypes.string,
    }),
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

UserInfo.defaultProps = {
  user: {},
  location: {},
};

export default UserInfo;

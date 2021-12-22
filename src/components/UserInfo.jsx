import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiLink } from "react-icons/bi";
import PropTypes from "prop-types";
import { useLocation } from "react-router";

import { Context } from "../WrappedApp";
import ShortenNumber from "../utils/ShortenNumber";
import { PROFILE_ROUTE } from "../utils/consts";

const UserInfo = function ({ otherUser }) {
  const { user } = useContext(Context);

  const [subsribed, setSubscribed] = useState(false);

  const location = useLocation();

  return (
    <Container className="d-flex flex-column align-items-center text-center">
      <Row className="m-3 p-2">
        <Col>
          <img
            className="border-radius-10em"
            width="25%"
            src={
              (otherUser && otherUser.avatar) || user.userInfo.user.avatarLarger
            }
            alt="user's avatar"
          />
          <h2>
            @{(otherUser && otherUser.name) || user.userInfo.user.uniqueId}
          </h2>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <h3>
            {ShortenNumber(
              (otherUser && otherUser.following) ||
                user.userInfo.stats.followingCount
            )}
          </h3>
          <h4 style={{ color: "grey" }}>Підписки</h4>
        </Col>

        <Col id="borders-x-grey" className="mx-3">
          <h3>
            {ShortenNumber(
              (otherUser && otherUser.fans) || user.userInfo.stats.followerCount
            )}
          </h3>
          <h4 className="color-grey">Підписники</h4>
        </Col>

        <Col>
          <h3>
            {ShortenNumber(
              (otherUser && otherUser.heart) || user.userInfo.stats.heartCount
            )}
          </h3>
          <h4 className="color-grey">Вподобання</h4>
        </Col>
      </Row>

      {!(location.pathname === PROFILE_ROUTE) && (
        <Row>
          <button
            type="button"
            onClick={() => setSubscribed(!subsribed)}
            id="subscribe-button-size"
            className={`m-4 ${
              subsribed ? "unsubscribe-button-color" : "subscribe-button-color"
            }`}
          >
            <h3> {subsribed ? "Відписатися" : "Підписатися"}</h3>
          </button>
        </Row>
      )}

      <Row>
        <h4>
          {(otherUser && otherUser.signature) || user.userInfo.user.signature}
        </h4>
        <div
          className="bio-link"
          hidden={!(location.pathname === PROFILE_ROUTE)}
        >
          <a
            href={`https://www.${user.userInfo.user.bioLink.link}`}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <h4>
              <BiLink size="1.5em" />
              {user.userInfo.user.bioLink.link}
            </h4>
          </a>
        </div>
      </Row>
    </Container>
  );
};

UserInfo.propTypes = {
  otherUser: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    following: PropTypes.number,
    fans: PropTypes.number,
    heart: PropTypes.number,
    signature: PropTypes.string,
  }),
};

UserInfo.defaultProps = {
  otherUser: {},
};

export default UserInfo;

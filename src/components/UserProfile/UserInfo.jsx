import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiLink } from "react-icons/bi";
import PropTypes from "prop-types";

import shortenNumber from "../../utils/shortenNumber";
import { PROFILE_ROUTE } from "../../utils/consts";

const UserInfo = function ({ user, location }) {
  const [subsribed, setSubscribed] = useState(false);

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

      <Row className="mb-3">
        <Col>
          <h3>{shortenNumber(user.following)}</h3>
          <h4 style={{ color: "grey" }}>Підписки</h4>
        </Col>

        <Col id="borders-x-grey" className="mx-3">
          <h3>{shortenNumber(user.fans)}</h3>
          <h4 className="color-grey">Підписники</h4>
        </Col>

        <Col>
          <h3>{shortenNumber(user.heart)}</h3>
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
        <h4>{user.signature}</h4>
        <div className="bio-link" hidden={!user.bioLink.filled}>
          <a
            href={`https://www.${user.bioLink.link}`}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <h4>
              <BiLink size="1.5em" />
              {user.bioLink.link}
            </h4>
          </a>
        </div>
      </Row>
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

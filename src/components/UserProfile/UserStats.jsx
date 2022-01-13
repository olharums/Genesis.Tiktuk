import React from "react";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import shortenNumber from "../../utils/shortenNumber";

const UserStats = function ({ following, fans, heart }) {
  return (
    <Row className="mb-3">
      <Col>
        <h3>{shortenNumber(following)}</h3>
        <h4 className="color-grey">Підписки</h4>
      </Col>

      <Col id="borders-x-grey" className="mx-3">
        <h3>{shortenNumber(fans)}</h3>
        <h4 className="color-grey">Підписники</h4>
      </Col>

      <Col>
        <h3>{shortenNumber(heart)}</h3>
        <h4 className="color-grey">Вподобання</h4>
      </Col>
    </Row>
  );
};

UserStats.propTypes = {
  following: PropTypes.number,
  fans: PropTypes.number,
  heart: PropTypes.number,
};

UserStats.defaultProps = {
  following: 0,
  fans: 0,
  heart: 0,
};

export default UserStats;

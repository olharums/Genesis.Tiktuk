import React, { useState } from "react";
import { Row } from "react-bootstrap";
import "./styles.scss";

const SubscribeButton = function () {
  const [subsribed, setSubscribed] = useState(false);

  return (
    <Row>
      <button
        type="button"
        onClick={() => setSubscribed(!subsribed)}
        className={`m-4 subscribe-button ${
          subsribed ? "subscribed" : "unsubscribed"
        }`}
      >
        <h3> {subsribed ? "Відписатися" : "Підписатися"}</h3>
      </button>
    </Row>
  );
};
export default SubscribeButton;

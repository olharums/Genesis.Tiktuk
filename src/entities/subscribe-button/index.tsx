import { useState, FC } from "react";
import { Row } from "react-bootstrap";

import { SubscribeButtonStyled } from "./styles.js";

const SubscribeButton: FC = function () {
  const [subsribed, setSubscribed] = useState<boolean>(false);

  return (
    <Row>
      <SubscribeButtonStyled
        type="button"
        onClick={() => setSubscribed(!subsribed)}
        className={subsribed ? "subscribed" : "unsubscribed"}
      >
        <h3> {subsribed ? "Відписатися" : "Підписатися"}</h3>
      </SubscribeButtonStyled>
    </Row>
  );
};
export default SubscribeButton;

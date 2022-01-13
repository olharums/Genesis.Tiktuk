import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";

import { userAndFeedDataContext } from "../../ContextedApp";

const ButtonLog = observer(({ text }) => {
  const { user } = useContext(userAndFeedDataContext);

  return (
    <Button
      size="lg"
      variant="outline-light"
      onClick={() => user.setIsAuth(!user.isAuth)}
    >
      {text}
    </Button>
  );
});

export default ButtonLog;

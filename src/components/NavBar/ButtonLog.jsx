import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";

import { Context } from "../../WrappedApp";

const ButtonLog = observer(({ text }) => {
  const { user } = useContext(Context);

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

import React, { useContext } from "react";
import { Button } from "bootstrap";
import { observer } from "mobx-react-lite";

import { Context } from "../../WrappedApp";

const ButtonLogOut = observer(() => {
  const { user } = useContext(Context);

  return (
    <Button
      size="lg"
      variant="outline-light"
      onClick={() => user.setIsAuth(false)}
    >
      Вийти
    </Button>
  );
});

export default ButtonLogOut;

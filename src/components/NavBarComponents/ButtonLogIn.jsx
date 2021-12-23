import React, { useContext } from "react";
import { Button } from "bootstrap";
import { observer } from "mobx-react-lite";

import { Context } from "../../WrappedApp";

const ButtonLogIn = observer(() => {
  const { user } = useContext(Context);

  return (
    <Button
      size="lg"
      variant="outline-light"
      onClick={() => user.setIsAuth(true)}
    >
      Авторизація
    </Button>
  );
});

export default ButtonLogIn;

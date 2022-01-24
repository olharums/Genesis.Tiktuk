import { FC, useContext } from "react";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";

import { userAndFeedDataContext } from "../../../app";

export enum ButtonLogText {
  logout = "Вийти",
  login = "Авторизація",
}

const ButtonLog: FC<{ text: ButtonLogText }> = observer(({ text }) => {
  const user = useContext(userAndFeedDataContext)?.user;

  return (
    <Button
      size="lg"
      variant="outline-light"
      onClick={() => user?.setIsAuth(!user?.isAuth)}
    >
      {text}
    </Button>
  );
});

export default ButtonLog;

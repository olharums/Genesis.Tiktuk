import { FC, useContext } from "react";
import { observer } from "mobx-react-lite";

import { PROFILE_ROUTE, TRENDING_FEED_ROUTE } from "../../shared/lib/paths";
import { userAndFeedDataContext } from "../../app";
import Logo from "./Logo";
import ButtonLog, { ButtonLogText } from "./ButtonLog";

import { NavbarLinkStyled, NavbarStyled } from "./styles.js";

interface IButtonEnum {
  [ButtonLogText.logout]: JSX.Element;
  [ButtonLogText.login]: JSX.Element;
}

const NavBar: FC = observer(() => {
  const user = useContext(userAndFeedDataContext)?.user;

  const BUTTON_LOG_BY_USER_AUTHORIZATION: IButtonEnum = {
    [ButtonLogText.logout]: <ButtonLog text={ButtonLogText.logout} />,
    [ButtonLogText.login]: <ButtonLog text={ButtonLogText.login} />,
  };

  return (
    <NavbarStyled>
      {user?.isAuth && (
        <NavbarLinkStyled to={TRENDING_FEED_ROUTE}>Новини</NavbarLinkStyled>
      )}

      {user?.isAuth ? (
        <NavbarLinkStyled to={PROFILE_ROUTE}>
          {user.userInfo?.user.nickname}
        </NavbarLinkStyled>
      ) : (
        <Logo />
      )}

      {user &&
        BUTTON_LOG_BY_USER_AUTHORIZATION[
          user.isAuth ? ButtonLogText.logout : ButtonLogText.login
        ]}
    </NavbarStyled>
  );
});

export default NavBar;

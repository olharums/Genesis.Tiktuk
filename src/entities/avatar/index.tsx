import { FC } from "react";

import { IAuthorMeta } from "../../shared/types/trending-feed";

import { DivStyled, UserIconStyled } from "./styles.js";

interface AvatarProps {
  authorMeta: IAuthorMeta;
  refToOtherUser: () => void;
}

const Avatar: FC<AvatarProps> = function ({ authorMeta, refToOtherUser }) {
  const defaultAvatar =
    "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png";

  return (
    <DivStyled role="button" tabIndex={0} onClick={refToOtherUser}>
      <UserIconStyled
        width="55px"
        height="55px"
        alt="user icon"
        src={(authorMeta && authorMeta.avatar) || defaultAvatar}
      />
    </DivStyled>
  );
};

export default Avatar;

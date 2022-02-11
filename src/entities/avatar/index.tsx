import React, { FC } from "react";

import { IAuthorMeta } from "../../shared/types/trending-feed";

import { Container, UserAvatar } from "./styles.js";

interface AvatarProps {
  authorMeta: IAuthorMeta;
  refToOtherUser: () => void;
}

const Avatar: FC<AvatarProps> = function ({ authorMeta, refToOtherUser }) {
  const defaultAvatar =
    "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png";

  return (
    <Container role="button" tabIndex={0} onClick={refToOtherUser}>
      <UserAvatar
        width="55px"
        height="55px"
        alt="user icon"
        // src={(authorMeta && authorMeta.avatar) || defaultAvatar} // meta has outdated links
        src={defaultAvatar}
      />
    </Container>
  );
};

export default Avatar;

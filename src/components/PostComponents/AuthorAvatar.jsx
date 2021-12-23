import React from "react";

const AuthorAvatar = ({ authorMeta, RefToOtherUser }) => {
  <div
    role="button"
    tabIndex="0"
    href="#"
    className="mb-5"
    onClick={RefToOtherUser}
    onKeyPress={() => {}}
  >
    <img
      width="55px"
      height="55px"
      className="user-icon"
      alt="user icon"
      src={
        (authorMeta && authorMeta.avatar) ||
        "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png"
      }
    />
  </div>;
};

export default AuthorAvatar;

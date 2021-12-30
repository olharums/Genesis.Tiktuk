import React from "react";
import PropTypes from "prop-types";

const AuthorAvatar = function ({ authorMeta, refToOtherUser }) {
  const defaultAvatar =
    "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png";

  return (
    <div
      role="button"
      tabIndex="0"
      href="#"
      className="mb-5"
      onClick={refToOtherUser}
      onKeyPress={() => {}}
    >
      <img
        width="55px"
        height="55px"
        className="user-icon"
        alt="user icon"
        src={(authorMeta && authorMeta.avatar) || defaultAvatar}
      />
    </div>
  );
};

AuthorAvatar.propTypes = {
  authorMeta: PropTypes.shape({
    avatar: PropTypes.string,
  }),
  refToOtherUser: PropTypes.func,
};

AuthorAvatar.defaultProps = {
  authorMeta: {},
  refToOtherUser: () => {},
};

export default AuthorAvatar;

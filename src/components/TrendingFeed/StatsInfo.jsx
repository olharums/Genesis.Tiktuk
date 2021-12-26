import React, { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

import shortenNumber from "../../utils/shortenNumber";
import AuthorAvatar from "./AuthorAvatar";

const PostStats = function ({ stats, authorMeta, RefToOtherUser }) {
  const [liked, setLiked] = useState(false);
  const [diggCount, setDiggCount] = useState(stats.diggCount || 0);

  const handleLike = (e) => {
    e.stopPropagation();
    if (liked) {
      setDiggCount(diggCount - 1);
    } else {
      setDiggCount(diggCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <Container className="d-flex flex-column width-fit-content">
      <AuthorAvatar authorMeta={authorMeta} RefToOtherUser={RefToOtherUser} />

      <BsHeartFill
        size="3em"
        className="cursor-pointer"
        style={{
          color: liked ? "red" : "white",
        }}
        onClick={handleLike}
      />

      <h5 className="mb-5 color-white">{shortenNumber(stats.diggCount)}</h5>

      <AiOutlineComment size="3em" className="cursor-pointer color-white" />

      <h5 className="mb-5 color-white">{shortenNumber(stats.commentCount)}</h5>

      <FaShare size="3em" className="cursor-pointer color-white" />

      <h5 className="mb-5 color-white">{shortenNumber(stats.shareCount)}</h5>
    </Container>
  );
};

PostStats.propTypes = {
  stats: PropTypes.shape({
    diggCount: PropTypes.number,
    shareCount: PropTypes.number,
    commentCount: PropTypes.number,
  }),
  authorMeta: PropTypes.shape({
    avatar: PropTypes.string,
  }),
  RefToOtherUser: PropTypes.func,
};

PostStats.defaultProps = {
  stats: {},
  authorMeta: {},
  RefToOtherUser: () => {},
};

export default PostStats;

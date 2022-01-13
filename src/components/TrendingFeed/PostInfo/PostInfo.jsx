import React from "react";
import { Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { TRENDING_FEED_ROUTE } from "../../../utils/consts";
import Stats from "../Stats";
import MusicInfo from "../MusicInfo/MusicInfo";
import "./styles.scss";

const PostInfo = function ({ post }) {
  const history = useHistory();

  const date = new Date(post.createTime);

  const refToOtherUser = () => {
    history.push(`${TRENDING_FEED_ROUTE}/${post.authorMeta.id}`);
  };

  const getLiftingOfDescription = (text) => {
    if (text && text.length) {
      if (text.length === 0) return 30;
      if (text.length <= 40) return 80;
      if (text.length <= 70) return 80;
      return 130;
    }
    return 30;
  };

  const stats = {
    diggCount: post.diggCount,
    commentCount: post.commentCount,
    shareCount: post.shareCount,
  };

  return (
    <Row
      id="row-post-info"
      style={{
        top: `${-getLiftingOfDescription - 70}px`,
      }}
    >
      <h5>
        <div
          role="button"
          tabIndex="0"
          className="user-name"
          onClick={refToOtherUser}
          onKeyPress={() => {}}
        >
          @{post.authorMeta && post.authorMeta.name}
        </div>{" "}
        &nbsp;&bull; {date.toLocaleDateString()}
      </h5>

      <h5
        style={{
          width: `${post.videoMeta ? post.videoMeta.width - 30 : 930}px`,
        }}
      >
        {post.text}
      </h5>

      <MusicInfo musicMeta={post.musicMeta} />

      <Container className="position-relative" id="container-post-stats">
        <Stats
          stats={stats}
          authorMeta={post.authorMeta}
          refToOtherUser={refToOtherUser}
        />
      </Container>
    </Row>
  );
};

PostInfo.propTypes = {
  post: PropTypes.shape({
    createTime: PropTypes.number,
    text: PropTypes.string,
    authorMeta: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    videoMeta: PropTypes.shape({
      width: PropTypes.number,
    }),
    musicMeta: PropTypes.shape({
      musicName: PropTypes.string,
      musicAuthor: PropTypes.string,
      coverThumb: PropTypes.string,
    }),
    diggCount: PropTypes.number,
    commentCount: PropTypes.number,
    shareCount: PropTypes.number,
  }),
};

PostInfo.defaultProps = {
  post: {},
};

export default PostInfo;

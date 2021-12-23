import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

import PostInfo from "./PostComponents/PostInfo";

const Post = function ({ post }) {
  const [toPlay, setToPlay] = useState(false);
  const [display, setDisplay] = useState("");

  return (
    <Row
      className={`d-flex flex-column justify-content-center d-${display}`}
      onMouseEnter={() => {
        setToPlay(true);
      }}
      onMouseLeave={() => {
        setToPlay(false);
      }}
      onClick={() => {
        setToPlay(!toPlay);
      }}
    >
      <Col className="align-items-center" id="post-col">
        <Row className="d-flex flex-column justify-content-center align-items-center">
          <ReactPlayer
            id={`player${post.id}`}
            name="media"
            height="45em"
            playing={toPlay}
            onEnded={() => {
              window.scrollBy(0, window.innerHeight + 40);
            }}
            onError={() => {
              setDisplay("none");
            }}
            url={post.videoUrl}
            poster={
              post.covers
                ? post.covers.dynamic ||
                  post.covers.origin ||
                  post.covers.default
                : ""
            }
          />
        </Row>
        <PostInfo post={post} />
      </Col>
    </Row>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    videoUrl: PropTypes.string,
    covers: PropTypes.shape({
      dynamic: PropTypes.string,
      origin: PropTypes.string,
      default: PropTypes.string,
    }),
  }),
};

Post.defaultProps = {
  post: {},
};

export default Post;

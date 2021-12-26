import React from "react";
import { observer } from "mobx-react-lite";
import { Col, Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import { FiPlay } from "react-icons/fi";

import shortenNumber from "../../utils/shortenNumber";

const Post = observer(({ post }) => (
  <Col md={4} key={post.id}>
    <Container className="bg-dark">
      <ReactPlayer
        width="100%"
        name="media"
        url={post.video.playAddr}
        poster={
          post.video.dynamicCover || post.video.originCover || post.video.cover
        }
      />
    </Container>

    <Container className="d-flex flex-row justify-content-center position-relative bottom-50 color-white">
      <FiPlay size="2em" />
      <h3>{shortenNumber(post.stats.playCount)}</h3>
    </Container>
  </Col>
));

export default Post;

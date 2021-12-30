import React from "react";
import { Container } from "react-bootstrap";
import { BsMusicNoteBeamed } from "react-icons/bs";
import Marquee from "react-double-marquee";
import PropTypes from "prop-types";

const PostMusicInfo = function ({ musicMeta }) {
  const defaultMusicIcon =
    "https://img.icons8.com/color/48/000000/music-record--v1.png";

  return (
    <Container className="d-flex flex-row align-items-center">
      <BsMusicNoteBeamed size="1em" className="color-white" />

      <div id="music-meta-marquee">
        <Marquee direction="left">
          {`${musicMeta && musicMeta.musicName} - ${
            musicMeta && musicMeta.musicAuthor
          }`}
        </Marquee>
      </div>

      <img
        className="music-icon"
        alt="music icon"
        src={(musicMeta && musicMeta.coverThumb) || defaultMusicIcon}
      />
    </Container>
  );
};

PostMusicInfo.propTypes = {
  musicMeta: PropTypes.shape({
    musicName: PropTypes.string,
    musicAuthor: PropTypes.string,
    coverThumb: PropTypes.string,
  }),
};

PostMusicInfo.defaultProps = {
  musicMeta: {},
};

export default PostMusicInfo;

import { useState, FC } from "react";
import ReactPlayer from "react-player";

import PostInfo from "../../entities/post-info";
import { IPost } from "../../shared/types/trending-feed/IPost";

import { ColStyled, RowStyled } from "./styles.js";

const Post: FC<{ post: IPost }> = function ({ post }) {
  const [toPlay, setToPlay] = useState<boolean>(false);

  return (
    <RowStyled
      onMouseEnter={() => {
        setToPlay(true);
      }}
      onMouseLeave={() => {
        setToPlay(false);
      }}
      onClick={() => {
        setToPlay(!toPlay);
      }}
      data-testid={"video-container"}
    >
      <ColStyled>
        <RowStyled>
          <ReactPlayer
            id={`player${post.id}`}
            name="media"
            height="45em"
            playing={toPlay}
            onEnded={() => {
              window.scrollBy(0, window.innerHeight + 40);
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
        </RowStyled>

        <PostInfo post={post} />
      </ColStyled>
    </RowStyled>
  );
};

export default Post;
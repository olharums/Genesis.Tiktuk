import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Row } from "react-bootstrap";
import styled from "styled-components";

import { TRENDING_FEED_ROUTE } from "../../shared/lib/paths";
import VideoStats from "../video-stats";
import MusicInfo from "../music-info";
import { IPost } from "../../shared/types/trending-feed/IPost";
import { getLiftingOfDescription } from "./lib/getLiftingOfDescription";
import { formStats } from "./lib/formStats";

import { ContainerStyled, RowStyled, UserNameStyled } from "./styles.js";

const PostInfo: FC<{ post: IPost }> = function ({ post }) {
  const TextStyled = styled.h5`
    width: ${post.videoMeta ? post.videoMeta.width - 30 : 930};
  `;

  const navigate = useNavigate();

  const refToOtherUser = () => {
    navigate(`${TRENDING_FEED_ROUTE}/${post.authorMeta.id}`);
  };

  return (
    <RowStyled top={-getLiftingOfDescription(post.text) - 70}>
      <h5>
        <UserNameStyled role="button" tabIndex={0} onClick={refToOtherUser}>
          @{post.authorMeta && post.authorMeta.name}
        </UserNameStyled>{" "}
        &nbsp;&bull; {new Date(post.createTime).toLocaleDateString()}
      </h5>

      <TextStyled>{post.text}</TextStyled>

      <MusicInfo musicMeta={post.musicMeta} />

      <ContainerStyled>
        <VideoStats
          stats={formStats(post)}
          authorMeta={post.authorMeta}
          refToOtherUser={refToOtherUser}
        />
      </ContainerStyled>
    </RowStyled>
  );
};

export default PostInfo;

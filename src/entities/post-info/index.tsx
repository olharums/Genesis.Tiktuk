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

import { ContainerStyled, UserNameStyled } from "./styles.js";

const PostInfo: FC<{ post: IPost }> = function ({ post }) {
  const RowPostInfo = styled(Row)`
    width: 420px;
    position: relative;
    left: 7rem;
    color: white;
    font-family: sans-serif;
    top: ${-getLiftingOfDescription(post.text) - 70}px;
  `;

  const PostText = styled.h5`
    width: ${post.videoMeta ? post.videoMeta.width - 30 : 930}px;
  `;

  const navigate = useNavigate();

  const refToOtherUser = () => {
    navigate(`${TRENDING_FEED_ROUTE}/${post.authorMeta.id}`);
  };

  return (
    <RowPostInfo>
      <h5>
        <UserNameStyled role="button" tabIndex={0} onClick={refToOtherUser}>
          @{post.authorMeta && post.authorMeta.name}
        </UserNameStyled>{" "}
        &nbsp;&bull; {new Date(post.createTime).toLocaleDateString()}
      </h5>

      <PostText>{post.text}</PostText>

      <MusicInfo musicMeta={post.musicMeta} />

      <ContainerStyled>
        <VideoStats
          stats={formStats(post)}
          authorMeta={post.authorMeta}
          refToOtherUser={refToOtherUser}
        />
      </ContainerStyled>
    </RowPostInfo>
  );
};

export default PostInfo;

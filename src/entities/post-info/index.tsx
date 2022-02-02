import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { TRENDING_FEED_ROUTE } from "../../shared/lib/paths";
import VideoStats from "../video-stats";
import MusicInfo from "../music-info";
import { IPost } from "../../shared/types/trending-feed/IPost";
import { getLiftingOfDescription } from "./lib/getLiftingOfDescription";
import { formStats } from "./lib/formStats";

import {
  ContainerStyled,
  PostText,
  RowPostInfo,
  UserNameStyled,
} from "./styles.js";

const PostInfo: FC<{ post: IPost }> = function ({ post }) {
  const navigate = useNavigate();

  const refToOtherUser = () => {
    navigate(`${TRENDING_FEED_ROUTE}/${post.authorMeta.id}`);
  };

  return (
    <RowPostInfo data={{ width: -getLiftingOfDescription(post.text) - 70 }}>
      <h5>
        <UserNameStyled role="button" tabIndex={0} onClick={refToOtherUser}>
          @{post.authorMeta && post.authorMeta.name}
        </UserNameStyled>{" "}
        &nbsp;&bull; {new Date(post.createTime).toLocaleDateString()}
      </h5>

      <PostText
        style={{
          width: `${post.videoMeta ? post.videoMeta.width - 30 : 930}px`,
        }}
      >
        {post.text}
      </PostText>

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

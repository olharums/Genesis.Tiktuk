import React, { MouseEvent, useState, FC } from "react";

import shortenNumber from "../../shared/lib/shortenNumber";
import Avatar from "../avatar";
import { IAuthorMeta } from "../../shared/types/trending-feed";

import {
  AiOutlineCommentStyled,
  BsHeartFillStyled,
  ContainerStyled,
  FaShareStyled,
  TextStyled,
} from "./styles";

interface VideoStatsProps {
  stats: {
    diggCount: number;
    shareCount: number;
    commentCount: number;
  };
  authorMeta: IAuthorMeta;
  refToOtherUser: () => void;
}

const VideoStats: FC<VideoStatsProps> = function ({
  stats,
  authorMeta,
  refToOtherUser,
}) {
  const [liked, setLiked] = useState<boolean>(false);
  const [diggCount, setDiggCount] = useState<number>(stats.diggCount || 0);

  const handleLike = (e: MouseEvent<SVGElement>) => {
    e.stopPropagation();

    if (liked) {
      setDiggCount(diggCount - 1);
    } else {
      setDiggCount(diggCount + 1);
    }

    setLiked(!liked);
  };

  return (
    <ContainerStyled>
      <Avatar authorMeta={authorMeta} refToOtherUser={refToOtherUser} />

      <BsHeartFillStyled
        size="3em"
        className={liked ? "liked" : "notLiked"}
        onClick={handleLike}
        data-testid="BsHeartFillStyled"
      />

      <TextStyled>{shortenNumber(diggCount)}</TextStyled>

      <AiOutlineCommentStyled size="3em" data-testid="AiOutlineCommentStyled" />

      <TextStyled>{shortenNumber(stats.commentCount)}</TextStyled>

      <FaShareStyled size="3em" data-testid="FaShareStyled" />

      <TextStyled>{shortenNumber(stats.shareCount)}</TextStyled>
    </ContainerStyled>
  );
};

export default VideoStats;

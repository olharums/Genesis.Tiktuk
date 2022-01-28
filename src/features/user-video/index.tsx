import { FC } from "react";
import { observer } from "mobx-react-lite";
import { Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import { FiPlay } from "react-icons/fi";

import shortenNumber from "../../shared/lib/shortenNumber";
import { IPost } from "../../shared/types/user-profile";

import { ContainerStyled, PlayerContainerStyled } from "./styles";

const UserVideo: FC<{ post: IPost }> = observer(({ post }) => (
  <Col md={4} key={post.id}>
    <PlayerContainerStyled>
      <ReactPlayer
        data-testid="user-video-player"
        width="100%"
        name="media"
        url={post.video.playAddr}
        poster={
          post.video.dynamicCover || post.video.originCover || post.video.cover
        }
      />
    </PlayerContainerStyled>

    <ContainerStyled>
      <FiPlay size="2em" data-testid="fiplay" />
      <h3>{shortenNumber(post.stats.playCount)}</h3>
    </ContainerStyled>
  </Col>
));

export default UserVideo;

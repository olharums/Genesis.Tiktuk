import { useContext, FC } from "react";
import { observer } from "mobx-react-lite";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { userAndFeedDataContext } from "../../app";
import UserInfo from "../../features/user-info";
import { IPost } from "../../shared/types/trending-feed";
import { formUserInfo } from "./formUserInfo";

import { ContainerStyled } from "./styles";

const OtherUserProfile: FC = observer(() => {
  const userId = useParams<{ userId?: string }>()?.userId;

  const trendingFeed = useContext(userAndFeedDataContext)?.trendingFeed;

  const otherUser = trendingFeed?.posts.find(
    (post: IPost) => post.authorMeta.id === userId
  )?.authorMeta;

  if (!otherUser) {
    return <Container data-testid="error-container">Error{userId}m</Container>;
  }

  return (
    <ContainerStyled>
      <UserInfo user={formUserInfo(otherUser)} />
    </ContainerStyled>
  );
});

export default OtherUserProfile;

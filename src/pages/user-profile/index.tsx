import { FC, useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Container } from "react-bootstrap";

import { userAndFeedDataContext } from "../../app";
import UserInfo from "../../features/user-info";
import ProfileSkeleton from "../../shared/ui/ProfileSkeleton";
import UserVideo from "../../features/user-video";
import { getUserFeed } from "../api/getUserFeed";
import userFeed from "../../shared/mock-data/user-feed";
import { IPost } from "../../shared/types/user-profile";
import { formUserInfo } from "./formUserInfo";

import { ContainerStyled, RowStyled } from "./styles";

export const UserProfile: FC = observer(() => {
  const user = useContext(userAndFeedDataContext)?.user;

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);

    // getUserFeed()
    //   .then((data) => {
    //     user?.setUserFeed(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
    //   .finally(() => setLoading(false));

    user?.setUserFeed(userFeed.itemList);
    //mock data
  }, [user]);

  if (loading) {
    return <ProfileSkeleton />;
  }

  if (!user?.userInfo) {
    return (
      <Container data-testid="error-container">
        <h2>Error</h2>
      </Container>
    );
  }

  return (
    <ContainerStyled>
      <UserInfo user={formUserInfo(user)} />

      <RowStyled>
        {user.userFeed.map((post: IPost) => (
          <UserVideo post={post} key={post.id} />
        ))}
      </RowStyled>
    </ContainerStyled>
  );
});

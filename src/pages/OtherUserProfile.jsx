import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

import { Context } from "../WrappedApp";
import UserInfo from "../components/UserProfile/UserInfo";

const OtherUserProfile = observer(() => {
  const { userId } = useParams();

  const { trendingFeed } = useContext(Context);

  const otherUser = trendingFeed.posts.find(
    (post) => post.authorMeta.id === userId
  ).authorMeta;

  const user = {
    avatar: otherUser.avatar,
    name: otherUser.name,
    following: otherUser.following,
    fans: otherUser.fans,
    heart: otherUser.heart,
    signature: otherUser.signature,
    bioLink: {
      filled: false,
      link: "",
    },
  };

  return (
    <Container className="d-flex flex-column align-items-center text-center">
      <UserInfo user={user} />
    </Container>
  );
});

export default OtherUserProfile;

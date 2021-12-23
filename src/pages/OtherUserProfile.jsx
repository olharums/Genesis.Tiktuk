import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

import { Context } from "../WrappedApp";
import UserInfo from "../components/UserInfo";

const OtherUserProfile = observer(() => {
  const { id } = useParams();

  const { feed } = useContext(Context);

  const otherUser = feed.posts.find(
    (post) => post.authorMeta.id === id
  ).authorMeta;

  if (!id) {
    return (
      <Container>
        <h2>Error</h2>
      </Container>
    );
  }

  return (
    <Container className="d-flex flex-column align-items-center text-center">
      <UserInfo otherUser={otherUser} />
    </Container>
  );
});

export default OtherUserProfile;

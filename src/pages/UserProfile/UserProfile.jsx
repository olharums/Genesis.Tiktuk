import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Container, Row } from "react-bootstrap";
// import axios from "axios";

import { userAndFeedDataContext } from "../../ContextedApp";
import UserInfo from "../../components/UserProfile/UserInfo";
import ProfileSkeleton from "../../components/UserProfile/ProfileSkeleton";
// import { optionUserFeed } from "../utils/optionsForRequest";
import UserVideo from "../../components/UserProfile/UserVideo";
import "./styles.scss";

const UserProfile = observer((props) => {
  const { user } = useContext(userAndFeedDataContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    // axios
    //   .request(optionUserFeed)
    //   .then((response) => {
    //     user.setUserFeed(response.data);
    //     localStorage.setItem("UserFeed", JSON.stringify(response.data));
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
    //   .finally(() => setLoading(false));
  }, [user]);

  if (loading) {
    return <ProfileSkeleton />;
  }

  if (!user.userInfo.user) {
    return (
      <Container>
        <h2>Error</h2>
      </Container>
    );
  }

  const userInfo = {
    avatar: user.userInfo.user.avatarLarger,
    name: user.userInfo.user.uniqueId,
    following: user.userInfo.stats.followingCount,
    fans: user.userInfo.stats.followerCount,
    heart: user.userInfo.stats.heartCount,
    signature: user.userInfo.user.signature,
    bioLink: {
      filled: true,
      link: user.userInfo.user.bioLink.link,
    },
  };

  return (
    <Container className="d-flex flex-column align-items-center text-center">
      <UserInfo user={userInfo} location={props.location} />

      <Row id="border-top-grey" className="p-5">
        {user.userFeed.map((post) => (
          <UserVideo post={post} />
        ))}
      </Row>
    </Container>
  );
});

export default UserProfile;

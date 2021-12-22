import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import { FiPlay } from "react-icons/fi";

import { Context } from "../WrappedApp";
import ShortenNumber from "../utils/ShortenNumber";
import UserInfo from "../components/UserInfo";

const UserProfile = observer(() => {
  const { user } = useContext(Context);

  if (!user.userInfo.user) {
    return (
      <Container>
        <h2>Error</h2>
      </Container>
    );
  }

  return (
    <Container className="d-flex flex-column align-items-center text-center">
      <UserInfo />
      <Row id="border-top-grey" className="p-5">
        {user.userFeed.map((post) => (
          <Col md={4} key={post.id}>
            <Container className="bg-dark">
              <ReactPlayer
                width="100%"
                name="media"
                url={post.video.playAddr}
                poster={
                  post.video.dynamicCover ||
                  post.video.originCover ||
                  post.video.cover
                }
              />
            </Container>

            <Container className="d-flex flex-row justify-content-center position-relative bottom-50 color-white">
              <FiPlay size="2em" />
              <h3>{ShortenNumber(post.stats.playCount)}</h3>
            </Container>
          </Col>
        ))}
      </Row>
    </Container>
  );
});

export default UserProfile;

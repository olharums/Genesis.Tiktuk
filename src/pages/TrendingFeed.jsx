import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Container } from "react-bootstrap";
import { Skeleton } from "@mui/material";
import axios from "axios";

import { optionTrendingFeed } from "../utils/optionsForRequest";
import { userAndFeedDataContext } from "../WrappedApp";
import Post from "../components/TrendingFeed/Post";

const TrendingFeed = observer(() => {
  const { trendingFeed } = useContext(userAndFeedDataContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .request(optionTrendingFeed)
      .then((response) => {
        trendingFeed.setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, [trendingFeed]);

  if (loading) {
    return (
      <Skeleton
        className="m-auto"
        variant="rectangular"
        width="30em"
        height="45em"
      />
    );
  }

  if (!trendingFeed.posts && !trendingFeed.posts.length) {
    return (
      <Container>
        <h2>Error</h2>
      </Container>
    );
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      {trendingFeed.posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Container>
  );
});

export default TrendingFeed;

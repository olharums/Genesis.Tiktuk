import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Container } from "react-bootstrap";
import { Skeleton } from "@mui/material";
import axios from "axios";

import optionTrendingFeed from "../utils/optionsForRequest";
import { Context } from "../WrappedApp";
import Post from "../components/Post";

const Feed = observer(() => {
  const { feed } = useContext(Context);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .request(optionTrendingFeed)
      .then((response) => {
        feed.setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  });

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

  if (!feed.posts.length) {
    return (
      <Container>
        <h2>Error</h2>
      </Container>
    );
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      {feed.posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Container>
  );
});

export default Feed;

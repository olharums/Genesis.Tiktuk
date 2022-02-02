import { FC, useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Container } from "react-bootstrap";
import { Skeleton } from "@mui/material";

import { userAndFeedDataContext } from "../../app";
import Post from "../../features/post";
import trending_Feed from "../../shared/mock-data/trending-feed";
import { IPost } from "../../shared/types/trending-feed";
import { getTrendingFeed } from "../api/getTrendingFeed";

import { ContainerStyled } from "./styles";

const TrendingFeed: FC = observer(() => {
  const trendingFeed = useContext(userAndFeedDataContext)?.trendingFeed;

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // getTrendingFeed()
    //   .then((data) => {
    //     trendingFeed?.setPosts(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
    //   .finally(() => setLoading(false));
    setLoading(false);
    trendingFeed?.setPosts(trending_Feed); //mock data
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

  if (!trendingFeed?.posts && !trendingFeed?.posts.length) {
    return (
      <Container data-testid={"trending-feed-without-data"}>
        <h2>Error</h2>
      </Container>
    );
  }

  return (
    <ContainerStyled>
      {trendingFeed.posts.map((post: IPost) => (
        <Post post={post} key={post.id} />
      ))}
    </ContainerStyled>
  );
});

export default TrendingFeed;

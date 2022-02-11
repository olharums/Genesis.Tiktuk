import { IPost } from "../../../shared/types/trending-feed/IPost";

export const formStats = (post: IPost) => {
  return {
    diggCount: post.diggCount,
    commentCount: post.commentCount,
    shareCount: post.shareCount,
  };
};

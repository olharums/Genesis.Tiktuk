import { IAuthorMeta } from "../../shared/types/trending-feed";

export const formUserInfo = (user: IAuthorMeta) => {
  return {
    avatar: user.avatar,
    name: user.name,
    following: user.following,
    fans: user.fans,
    heart: user.heart,
    signature: user.signature,
    bioLink: {
      filled: false,
      link: "",
    },
  };
};

import UserStore from "../../models/UserStore";

export const formUserInfo = (user: UserStore) => {
  if (!user?.userInfo) throw Error;

  return {
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
};

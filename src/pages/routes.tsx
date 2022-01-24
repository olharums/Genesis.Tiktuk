import TrendingFeed from "./trending-feed";
import OtherUserProfile from "./other-user-profile";
import { UserProfile } from "./user-profile/index";
import { PROFILE_ROUTE, TRENDING_FEED_ROUTE } from "../shared/lib/paths";

const appRoutes = [
  {
    path: TRENDING_FEED_ROUTE,
    Component: TrendingFeed,
  },
  {
    path: PROFILE_ROUTE,
    Component: UserProfile,
  },
  {
    path: `${TRENDING_FEED_ROUTE}/:id`,
    Component: OtherUserProfile,
  },
];

export default appRoutes;

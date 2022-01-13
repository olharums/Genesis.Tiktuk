import TrendingFeed from "./pages/TrendingFeed";
import OtherUserProfile from "./pages/OtherUserProfile";
import UserProfile from "./pages/UserProfile/UserProfile";
import { PROFILE_ROUTE, TRENDING_FEED_ROUTE } from "./utils/consts";

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

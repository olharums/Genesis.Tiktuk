import axios from "axios";
import { IPost } from "shared/types/trending-feed";

const rapidapiKey = "b5686cec39msh3836917bb9e97b8p1f83b9jsn7a36a435dd53";

export async function getTrendingFeed(): Promise<IPost[]> {
  try {
    const response = await axios.request<IPost[]>({
      method: "GET",
      url: "https://tiktok33.p.rapidapi.com/trending/feed",
      headers: {
        "x-rapidapi-host": "tiktok33.p.rapidapi.com",
        "x-rapidapi-key": rapidapiKey,
      },
    });

    return response.data;
  } catch (error) {
    throw error as Error;
  }
}

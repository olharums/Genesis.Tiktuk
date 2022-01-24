import axios from "axios";
import { IPost } from "shared/types/user-profile";

const rapidapiKey = "b5686cec39msh3836917bb9e97b8p1f83b9jsn7a36a435dd53";

interface IResponse {
  statusCode: number;
  itemList: IPost[];
  cursor: string;
  hasMore: boolean;
}

export async function getUserFeed(): Promise<IPost[]> {
  const response = await axios.request<IResponse>({
    method: "GET",
    url: "https://tiktok33.p.rapidapi.com/user/feed/dave.xp",
    headers: {
      "x-rapidapi-host": "tiktok33.p.rapidapi.com",
      "x-rapidapi-key": rapidapiKey,
    },
  });

  if (response.data.statusCode !== 200) {
    throw Error("Something went wrong!");
  }

  return response.data.itemList;
}

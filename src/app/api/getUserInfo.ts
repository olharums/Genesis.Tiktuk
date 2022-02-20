import axios from "axios";
import { IUserInfo } from "shared/types/api-data";

const rapidapiKey = "b5686cec39msh3836917bb9e97b8p1f83b9jsn7a36a435dd53";

export async function getUserInfo(): Promise<IUserInfo> {
  try {
    const response = await axios.request<IUserInfo>({
      method: "GET",
      url: "https://tiktok33.p.rapidapi.com/user/info/dave.xp",
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

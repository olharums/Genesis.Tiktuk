import { IStats } from "./IStats";
import { IUser } from "./IUser";

export type IUserInfo = {
  user: IUser;
  stats: IStats;
  itemList: never[] | [];
};

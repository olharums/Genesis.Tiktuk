import { makeAutoObservable } from "mobx";

import { IPost } from "shared/types/user-profile";
import { IUserInfo } from "shared/types/api-data";

export default class UserStore {
  _userInfo: IUserInfo | null = null;
  _userFeed: IPost[] = [];
  _isAuth: boolean = true; // must be false but we haven't a login page

  constructor() {
    makeAutoObservable(this);
  }

  setUserInfo(userInfo: IUserInfo) {
    this._userInfo = userInfo;
  }

  get userInfo() {
    return this._userInfo;
  }

  setUserFeed(userFeed: IPost[]) {
    this._userFeed = userFeed;
  }

  get userFeed() {
    return this._userFeed;
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }

  get isAuth() {
    return this._isAuth;
  }
}

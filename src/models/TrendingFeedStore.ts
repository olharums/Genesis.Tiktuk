import { makeAutoObservable } from "mobx";

import { IPost } from "shared/types/trending-feed";

export default class TrendingFeedStore {
  _posts: IPost[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setPosts(posts: IPost[]) {
    this._posts = posts;
  }

  get posts() {
    return this._posts;
  }
}

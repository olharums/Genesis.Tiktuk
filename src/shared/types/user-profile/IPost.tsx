import { IEffectStickers } from "../trending-feed";
import { IAuthor } from "./IAuthor";
import { IAuthorStats } from "./IAuthorStats";
import { IChallenge } from "./IChallenge";
import { IMusic } from "./IMusic";
import { IStats } from "./IStats";
import { ITextExtra } from "./ITextExtra";
import { IVideo } from "./IVideo";

export interface IPost {
  id: string;
  desc: string;
  createTime: number;
  video: IVideo;
  author: IAuthor;
  music: IMusic;
  challenges: IChallenge[];
  stats: IStats;
  duetInfo: {
    duetFromId: string;
  };
  originalItem: boolean;
  officalItem: boolean;
  textExtra: ITextExtra[];
  secret: boolean;
  forFriend: boolean;
  digged: boolean;
  itemCommentStatus: number;
  showNotPass: boolean;
  vl1: boolean;
  itemMute: boolean;
  effectStickers?: IEffectStickers | IEffectStickers[];
  authorStats: IAuthorStats;
  privateItem: boolean;
  duetEnabled: boolean;
  stitchEnabled: boolean;
  shareEnabled: boolean;
  isAd: boolean;
  duetDisplay: number;
  stitchDisplay: number;
}

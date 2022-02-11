import { IAuthorMeta } from "./IAuthorMeta";
import { ICovers } from "./ICovers";
import { IEffectStickers } from "./IEffectStickers";
import { IHashtags } from "./IHashtags";
import { IMusicMeta } from "./IMusicMeta";
import { IVideoMeta } from "./IVideoMeta";

export interface IPost {
  id: string;
  secretID: string;
  text: string;
  createTime: number;
  authorMeta: IAuthorMeta;
  musicMeta: IMusicMeta;
  covers: ICovers;
  webVideoUrl: string;
  videoUrl: string;
  videoUrlNoWaterMark: string;
  videoApiUrlNoWaterMark: string;
  videoMeta: IVideoMeta;
  diggCount: number;
  shareCount: number;
  playCount: number;
  commentCount: number;
  downloaded: boolean;
  mentions: string[];
  hashtags: IHashtags[];

  effectStickers: IEffectStickers[];
}

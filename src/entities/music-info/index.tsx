import React, { FC } from "react";
import Marquee from "react-fast-marquee";

import { IMusicMeta } from "../../shared/types/trending-feed";

import {
  BsMusicNoteBeamedStyled,
  ContainerStyled,
  MusicIcon,
  MusicMetaMarqueeStyled,
} from "./styles.js";

const MusicInfo: FC<{ musicMeta: IMusicMeta }> = function ({ musicMeta }) {
  const defaultMusicIcon =
    "https://img.icons8.com/color/48/000000/music-record--v1.png";
  return (
    <ContainerStyled>
      <BsMusicNoteBeamedStyled size="1em" data-testid={"music-sign"} />

      <MusicMetaMarqueeStyled>
        <Marquee gradient={false}>
          {`${musicMeta && musicMeta.musicName} - ${
            musicMeta && musicMeta.musicAuthor
          }`}
        </Marquee>
      </MusicMetaMarqueeStyled>

      <MusicIcon
        alt="music icon"
        src={(musicMeta && musicMeta.coverThumb) || defaultMusicIcon}
      />
    </ContainerStyled>
  );
};

export default MusicInfo;

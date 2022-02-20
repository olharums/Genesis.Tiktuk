import { FC } from "react";
// import Marquee from "react-double-marquee";
// some problems have occured with the Marquee element, it will be replaced when API works
import { IMusicMeta } from "../../shared/types/trending-feed";

import {
  BsMusicNoteBeamedStyled,
  ContainerStyled,
  MusicIconStyled,
  MusicMetaMarqueeStyled,
} from "./styles.js";

const MusicInfo: FC<{ musicMeta: IMusicMeta }> = function ({ musicMeta }) {
  const defaultMusicIcon =
    "https://img.icons8.com/color/48/000000/music-record--v1.png";
  return (
    <ContainerStyled>
      <BsMusicNoteBeamedStyled size="1em" data-testid={"music-sign"} />

      <MusicMetaMarqueeStyled>
        {/* <Marquee direction="left"> */}
        {`${musicMeta && musicMeta.musicName} - ${
          musicMeta && musicMeta.musicAuthor
        }`}
        {/* </Marquee> */}
      </MusicMetaMarqueeStyled>

      <MusicIconStyled
        alt="music icon"
        src={(musicMeta && musicMeta.coverThumb) || defaultMusicIcon}
      />
    </ContainerStyled>
  );
};

export default MusicInfo;

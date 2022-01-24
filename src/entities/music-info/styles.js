import { Container } from "react-bootstrap";
import { BsMusicNoteBeamed } from "react-icons/bs";
import styled from "styled-components";

export const MusicIconStyled = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 30px;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;


  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
`;

export const MusicMetaMarqueeStyled = styled.div`
  width: 50%;
  white-space: nowrap;
  margin-left: 1em;
  margin-right: 6em;
`;

export const BsMusicNoteBeamedStyled = styled(BsMusicNoteBeamed)`
  color: white;
`;

export const ContainerStyled = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

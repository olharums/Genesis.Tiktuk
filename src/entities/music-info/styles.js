import { Container } from "react-bootstrap";
import { BsMusicNoteBeamed } from "react-icons/bs";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
 from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }`;

export const MusicIcon = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 30px;
  animation: ${spin} 4s linear infinite;
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

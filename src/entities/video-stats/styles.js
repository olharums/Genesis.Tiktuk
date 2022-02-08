import { Container } from "react-bootstrap";
import { AiOutlineComment } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import styled from "styled-components";

export const ContainerStyled = styled(Container)`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const BsHeartFillStyled = styled(BsHeartFill)`
  cursor: pointer;

  &.liked {
    color: red;
  }

  &.notLiked {
    color: white;
  }
`;

export const TextStyled = styled.h5`
  margin-bottom: 3rem;
  color: white;
`;

export const AiOutlineCommentStyled = styled(AiOutlineComment)`
  cursor: pointer;
  color: white;
`;

export const FaShareStyled = styled(FaShare)`
  cursor: pointer;
  color: white;
`;

import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

export const UserNameStyled = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

export const ContainerStyled = styled(Container)`
  top: -40em;
  left: 10em;
  position: relative;
`;

export const RowPostInfo = styled(Row)`
  width: 420px;
  position: relative;
  left: 7rem;
  color: white;
  font-family: sans-serif;
  top: ${(props) => props.data.width}px;
`;

export const PostText = styled.h5`
  width: ${(props) => props.style?.width}px;
`;

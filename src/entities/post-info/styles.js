import styled from "styled-components";
import { Container } from "react-bootstrap";

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

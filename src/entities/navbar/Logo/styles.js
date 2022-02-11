import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

export const LogoLinkStyled = styled(NavLink)`
  font-size: 22pt;
  font-weight: 700;
  color: white;
  text-decoration: none;

  &:hover {
    color: grey;
  }
`;

export const ContainerStyled = styled(Container)`
  justify-content: center !important;
  margin-left: 15rem !important;

  @media (max-width: 577px) {
    margin-left: 0rem !important;
  }
`;

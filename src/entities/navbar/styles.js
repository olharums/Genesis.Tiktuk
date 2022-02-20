import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export const NavbarLinkStyled = styled(NavLink)`
  font-size: 18pt;
  color: white;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    color: rgb(134, 134, 138);
  }
`;

export const NavbarStyled = styled(Navbar)`
  display: flex !important;
  justify-content: space-between !important;
  padding-left: 3rem;
  padding-right: 3rem;
  background-color: #212529;
`;

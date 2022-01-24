import styled from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
`;

export const LinkStyled = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    color: rgba(0, 0, 0, 0.705);
    text-decoration: none;
  }
`;
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const ContainerStyled = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const RowStyled = styled(Row)`
  border-top: 1px solid grey;
  padding: 3rem;

  @media (max-width: 577px) {
    padding: 0.5rem;
  }
`;

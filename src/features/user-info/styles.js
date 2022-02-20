import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const ContainerStyled = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const RowStyled = styled(Row)`
  margin: 1rem;
  padding: 0.5rem;
`;

export const ImgStyled = styled.img`
  border-radius: 10em;
`;

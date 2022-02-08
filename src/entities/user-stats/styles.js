import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

export const GreyTextStyled = styled.h4`
  color: ${({ theme }) => theme.colors.text};
`;

export const ColStyled = styled(Col)`
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const RowStyled = styled(Row)`
  margin-bottom: 1rem;
`;

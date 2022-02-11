import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

export const GreyTextStyled = styled.h4`
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 577px) {
    h4 {
      font-size: 14pt !important;
    }
  }

  @media (max-width: 377px) {
    h4 {
      font-size: 12pt !important;
    }
  }
`;

export const SimpleCol = styled(Col)`
  @media (max-width: 577px) {
    padding: 5px;
    width: fit-content;
  }

  @media (max-width: 377px) {
    width: fit-content;
  }
`;

export const ColStyled = styled(SimpleCol)`
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  margin-left: 1rem;
  margin-right: 1rem;

  @media (max-width: 577px) {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }

  /* @media (max-width: 377px) {
    margin-left: 0rem;
    margin-right: 0rem;
  } */
`;

export const RowStyled = styled(Row)`
  margin-bottom: 1rem;

  @media (max-width: 577px) {
    h4 {
      font-size: 14pt !important;
    }
  }

  @media (max-width: 377px) {
    h4 {
      font-size: 12pt !important;
    }
  }
`;

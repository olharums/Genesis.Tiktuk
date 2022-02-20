import React, { FC } from "react";
import { Row } from "react-bootstrap";

// import BeautifulLink from "@olharums/beautiful-link";
import BeautifulLink from "beautiful-link";

import { IBioLink } from "./IBioLink";

import { DivStyled } from "./styles.js";

interface SignatureProps {
  signature: string;
  bioLink: IBioLink;
}

const Signature: FC<SignatureProps> = function ({ signature, bioLink }) {
  return (
    <Row>
      <h4>{signature}</h4>
      {bioLink.filled && (
        <DivStyled data-testid={"bioLink"}>
          <BeautifulLink link={bioLink.link} />
        </DivStyled>
      )}{" "}
    </Row>
  );
};
export default Signature;

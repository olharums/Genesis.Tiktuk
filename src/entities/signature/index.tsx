import { FC } from "react";
import { Row } from "react-bootstrap";
import { BiLink } from "react-icons/bi";

import { IBioLink } from "./IBioLink";

import { LinkStyled, DivStyled } from "./styles.js";

interface SignatureProps {
  signature: string;
  bioLink: IBioLink;
}

const Signature: FC<SignatureProps> = function ({ signature, bioLink }) {
  return (
    <Row>
      <h4>{signature}</h4>
      <DivStyled data-testid={"bioLink"} hidden={!bioLink.filled}>
        <LinkStyled
          href={`https://www.${bioLink.link}`}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <h4>
            <BiLink size="1.5em" />
            {bioLink.link}
          </h4>
        </LinkStyled>
      </DivStyled>
    </Row>
  );
};
export default Signature;

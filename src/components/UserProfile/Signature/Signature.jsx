import { React } from "react";
import { Row } from "react-bootstrap";
import { BiLink } from "react-icons/bi";
import PropTypes from "prop-types";
import "./styles.scss";

const Signature = function ({ signature, bioLink }) {
  return (
    <Row>
      <h4>{signature}</h4>
      <div className="bio-link" hidden={!bioLink.filled}>
        <a
          href={`https://www.${bioLink.link}`}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <h4>
            <BiLink size="1.5em" />
            {bioLink.link}
          </h4>
        </a>
      </div>
    </Row>
  );
};
export default Signature;

Signature.propTypes = {
  signature: PropTypes.string,
  bioLink: PropTypes.shape({
    filled: PropTypes.bool,
    link: PropTypes.string,
  }),
};

Signature.defaultProps = {
  signature: "",
  bioLink: PropTypes.shape({
    filled: false,
    link: "",
  }),
};

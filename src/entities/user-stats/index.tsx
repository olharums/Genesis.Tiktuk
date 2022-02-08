import React, { FC } from "react";
import { Col } from "react-bootstrap";

import shortenNumber from "../../shared/lib/shortenNumber";

import { ColStyled, GreyTextStyled, RowStyled } from "./styles";

interface UserStatsProps {
  following: number;
  fans: number;
  heart: number;
}

const UserStats: FC<UserStatsProps> = function ({ following, fans, heart }) {
  return (
    <RowStyled>
      <Col>
        <h3>{shortenNumber(following)}</h3>
        <GreyTextStyled>Підписки</GreyTextStyled>
      </Col>

      <ColStyled>
        <h3>{shortenNumber(fans)}</h3>
        <GreyTextStyled>Підписники</GreyTextStyled>
      </ColStyled>

      <Col>
        <h3>{shortenNumber(heart)}</h3>
        <GreyTextStyled>Вподобання</GreyTextStyled>
      </Col>
    </RowStyled>
  );
};

export default UserStats;

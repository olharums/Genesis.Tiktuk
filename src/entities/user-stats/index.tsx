import React, { FC } from "react";
import { Col } from "react-bootstrap";

import shortenNumber from "../../shared/lib/shortenNumber";

import { ColStyled, GreyTextStyled, RowStyled, SimpleCol } from "./styles";

interface UserStatsProps {
  following: number;
  fans: number;
  heart: number;
}

const UserStats: FC<UserStatsProps> = function ({ following, fans, heart }) {
  return (
    <RowStyled>
      <SimpleCol>
        <h3>{shortenNumber(following)}</h3>
        <GreyTextStyled>Підписки</GreyTextStyled>
      </SimpleCol>

      <ColStyled>
        <h3>{shortenNumber(fans)}</h3>
        <GreyTextStyled>Підписники</GreyTextStyled>
      </ColStyled>

      <SimpleCol>
        <h3>{shortenNumber(heart)}</h3>
        <GreyTextStyled>Вподобання</GreyTextStyled>
      </SimpleCol>
    </RowStyled>
  );
};

export default UserStats;

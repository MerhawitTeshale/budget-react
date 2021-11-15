import React from "react";
import { Statistic } from "semantic-ui-react";
function DisplayBalance(props) {
  const { size = "tiny", color, pstyle, pvalue, plabel } = props;
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ textAlign: "left" }}>{plabel}</Statistic.Label>
      <Statistic.Value>{pvalue}</Statistic.Value>
    </Statistic>
  );
}

export default DisplayBalance;

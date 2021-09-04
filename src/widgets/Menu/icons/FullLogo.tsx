import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const FullLogo: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1802 398" {...props}>
      <text
      stroke="null"
      xmlSpace="preserve"
      fontFamily="'Nunito SemiBold'"
      fontSize={300}
      strokeWidth={0}
      y={220}
      x={0}
      fill="#002d74"
    >
      {"swap.org"}
    </text>
    </Svg>
  );
};

export default FullLogo;

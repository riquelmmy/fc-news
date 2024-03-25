import React from "react";

interface DivisorProps {
  color?: string;
  thickness?: number;
  marginVertical?: number;
}

const Divisor: React.FC<DivisorProps> = ({
  color = "#000000",
  thickness = 1,
  marginVertical = 10,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: thickness,
        backgroundColor: color,
        margin: `${marginVertical}px 0`,
      }}
    />
  );
};

export default Divisor;

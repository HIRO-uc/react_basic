import React from "react";

const ColorfulMessage = (props) => {
  // 分割代入
  const { color, children } = props;
  const contentStyle = {
    // ↓略さずかくと→　color: color,
    color,
    // reactでcssを書く場合はキャメルケースで書く　×font-size
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;

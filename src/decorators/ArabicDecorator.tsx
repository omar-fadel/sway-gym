import React from "react";
import { Decorator } from "@storybook/react";

const ArabicDecorator: Decorator = (Story) => {
  return (
    <div style={{ direction: "rtl" }}>
      <Story />
    </div>
  );
};
export default ArabicDecorator;

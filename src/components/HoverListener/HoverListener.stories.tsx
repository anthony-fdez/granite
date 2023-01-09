import React, { useState } from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";
import HoverListener from "./HoverListener";
import Button from "../Button";
import ThemeProvider from "../ThemeProvider";

export default {
  title: "Components/HoverListener",
  component: HoverListener,
};

export const Example: ComponentStory<typeof HoverListener> = () => {
  const [hover, setHover] = useState(false);
  return (
    <ThemeProvider>
      <div>
        <HoverListener onHover={(isHover) => setHover(isHover)}>
          <Button>Hover over me</Button>
        </HoverListener>
        {hover && <p>Mouse is over!</p>}
      </div>
    </ThemeProvider>
  );
};

const Template: ComponentStory<typeof HoverListener> = (args) => <HoverListener {...args} />;

export const Default = Template.bind({});

Default.args = {};

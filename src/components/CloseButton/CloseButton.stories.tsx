import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import Button from "../Button";
import CloseButton from "./CloseButton";

export default {
  title: "Components/CloseButton",
  component: CloseButton,
};

const Template: ComponentStory<typeof CloseButton> = (args) => (
  <CloseButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </>
  ),
};

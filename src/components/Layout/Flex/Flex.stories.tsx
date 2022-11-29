import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import Flex from "./Flex";
import Button from "../../Buttons/Button";

export default {
  title: "Components/Layout/Flex",
  component: Flex,
};

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>7</Button>
    </>
  ),
};
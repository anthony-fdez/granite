import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import Button from "./Button";
import Flex from "../Flex";
import ThemeProvider from "../ThemeProvider";

export default {
  title: "Components/Button",
  component: Button,
};

export const Examples: ComponentStory<typeof Button> = () => {
  return (
    <ThemeProvider theme="light">
      <>
        <Flex>
          <Button>Default</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="subtle">Subtle</Button>
          <Button loading>Loading</Button>
        </Flex>
        <Flex>
          <Button color="red">Default</Button>
          <Button color="red" variant="outlined">
            Outlined
          </Button>
          <Button color="red" variant="subtle">
            Subtle
          </Button>
          <Button color="red" loading>
            Loading
          </Button>
        </Flex>
        <Flex>
          <Button borderRadius="sm" color="red">
            sm border
          </Button>
          <Button borderRadius="md" color="red" variant="outlined">
            md border
          </Button>
          <Button borderRadius="lg" color="red" variant="subtle">
            lg border
          </Button>
          <Button borderRadius="xl" color="red">
            xl border
          </Button>
        </Flex>
        <Button fullWidth>Full width</Button>
      </>
    </ThemeProvider>
  );
};

const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider>
    <Button {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  children: "Button",
};

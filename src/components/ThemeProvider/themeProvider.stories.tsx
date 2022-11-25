import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";
import ThemeProvider from "./ThemeProvider";
import Button from "../Button";

export default {
  title: "Components/ThemeProvider",
  component: ThemeProvider,
};

const Template: ComponentStory<typeof ThemeProvider> = (args) => {
  return (
    <ThemeProvider {...args}>
      <Button>Button</Button>
      <h1>Example text</h1>
      <p>
        Excepteur sunt voluptate labore mollit in ea eiusmod et aliquip do.
        Culpa ex veniam velit laborum eu consequat velit id. Proident do in
        pariatur sit deserunt officia do esse mollit irure non. Aliqua in elit
        adipisicing est veniam tempor ea exercitation deserunt exercitation eu
        ullamco magna. Aute ad tempor culpa quis nisi pariatur. In irure ut
        ullamco consectetur ea proident amet eu. Magna ad commodo duis deserunt
        exercitation sint. Ut dolore pariatur aliqua laboris enim ullamco
        laboris adipisicing. Proident est amet dolore culpa minim eu fugiat.
        Pariatur cillum nisi ad id reprehenderit ex consequat Lorem ipsum
        consectetur do in culpa. Cupidatat do elit deserunt elit fugiat
        voluptate sint laboris cillum minim veniam proident cupidatat. Nisi elit
        magna laboris et duis voluptate. Et eu anim qui consequat mollit culpa
        esse in qui incididunt nostrud. In do ipsum laborum pariatur amet. Nisi
        qui aliqua dolore nisi pariatur voluptate tempor sint commodo. Fugiat
        voluptate amet mollit consectetur officia qui quis nulla minim. Irure
        deserunt pariatur tempor sint ea. Aliqua cillum eu minim quis est sunt.
        Amet in dolor nostrud consequat est ullamco dolore velit. Irure fugiat
        sint pariatur ipsum consequat velit minim consectetur exercitation
        aliquip sit dolore.
      </p>
    </ThemeProvider>
  );
};

export const Dark = Template.bind({});

Dark.args = { theme: "dark" };

export const Light = Template.bind({});

Light.args = { theme: "light" };

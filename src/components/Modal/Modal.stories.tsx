import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import Modal from "./Modal";
import ThemeProvider from "../ThemeProvider";

export default {
  title: "Components/Modal",
  component: Modal,
};

const isOpen = false;

const Template: ComponentStory<typeof Modal> = (args) => (
  <ThemeProvider>
    <Modal {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <div>
      <h1>modal baby</h1>
    </div>
  ),
  closeButton: true,
  title: "This is the modal title",
  isOpen,
};

import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import Modal from "./Modal";
import Button from "../Button";

export default {
  title: "Components/Overlays/Modal",
  component: Modal,
};

let isOpen = false;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

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

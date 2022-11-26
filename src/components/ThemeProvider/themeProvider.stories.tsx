import React, { useState } from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";
import ThemeProvider from "./ThemeProvider";
import Button from "../Button";
import Spinner from "../Spinner";
import Box from "../Center";
import Modal from "../Modal";

export default {
  title: "Components/ThemeProvider",
  component: ThemeProvider,
};

const Template: ComponentStory<typeof ThemeProvider> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ThemeProvider {...args}>
      <h2>Buttons</h2>
      <Box>
        <Button>Button</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="subtle">Subtle</Button>
        <Button loading={true}>Loading</Button>
        <Button disabled>Disabled</Button>
        <Button disabled variant="outlined">
          Disabled Outlined
        </Button>
        <Button disabled variant="subtle">
          Disabled Subtle
        </Button>
      </Box>
      <Button onClick={() => setIsModalOpen(true)} fullWidth>
        Full Width (open modal)
      </Button>
      <Modal
        zIndex={1000}
        title="My Modal"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        closeButton={<span>Close</span>}
      >
        <h2>This is the modal</h2>
      </Modal>
      <h2>Spinners</h2>
      <Box>
        <Spinner />
      </Box>

      <h2>Text</h2>
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

export const Default = Template.bind({});

Default.args = {};

export const PrimaryRed = Template.bind({});

PrimaryRed.args = { primaryColor: "red" };

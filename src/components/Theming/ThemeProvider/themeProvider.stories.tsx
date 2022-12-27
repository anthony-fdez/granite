/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from "@emotion/react";

import React, { useState } from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";
import ThemeProvider from "./ThemeProvider";
import Button from "../../Buttons/Button";
import Spinner from "../../Feedback/Spinner";
import Center from "../../Layout/Center";
import Modal from "../../Overlays/Modal";
import Flex from "../../Layout/Flex";
import Divider from "../../Extra/Divider";
import Accordion from "../../DataDisplay/Accordion";
import Dialog from "../../Overlays/Dialog";
import TextInput from "../../Inputs/TextInput";

export default {
  title: "Components/Theming/ThemeProvider",
  component: ThemeProvider,
};

const Template: ComponentStory<typeof ThemeProvider> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <ThemeProvider css={{ maxWidth: 1000, margin: "auto" }} {...args}>
      <h2>Buttons</h2>
      <Flex wrap="wrap">
        <Button>Button</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="subtle">Subtle</Button>
        <Button loading>Loading</Button>
        <Button disabled>Disabled</Button>
        <Button disabled variant="outlined">
          Disabled Outlined
        </Button>
        <Button disabled variant="subtle">
          Disabled Subtle
        </Button>
      </Flex>
      <Button onClick={() => setIsModalOpen(true)} fullWidth>
        Full Width (open modal)
      </Button>
      <Modal zIndex={1000} title="My Modal" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>This is the modal</h2>
        <p>
          Deserunt excepteur aliquip velit consectetur. Ea voluptate enim laboris nulla incididunt reprehenderit sit
          nisi culpa non tempor commodo dolor. In id enim irure ea dolore anim qui. Aute laborum nulla anim nisi amet ea
          dolor duis adipisicing exercitation excepteur fugiat commodo et. Minim amet culpa est ex officia. Irure
          cupidatat laborum dolore non anim. Sunt est dolor pariatur do incididunt sunt labore est nostrud exercitation
          eiusmod aute duis non. Veniam commodo anim consequat exercitation est incididunt commodo est. Occaecat
          deserunt nostrud id mollit commodo laborum. Ut id mollit irure quis.
        </p>
        <Divider label="This is the footer" labelPosition="left" marginTop={50} marginBottom={10} />
        <Flex justifyContent="flex-end">
          <Button onClick={() => setIsModalOpen(false)} variant="outlined">
            Close
          </Button>
          <Button onClick={() => setIsModalOpen(false)}>This is a nice modal</Button>
        </Flex>
      </Modal>
      <h2>Layout</h2>

      <>
        <h3>Center</h3>

        <Center>
          <p>CENTER</p>
        </Center>
        <h3>Flex</h3>
        <Flex justifyContent="space-between">
          <Button>1</Button>
          <Button onClick={() => setIsDialogOpen(true)}>2 (open dialog)</Button>
          <Button>3</Button>
        </Flex>
      </>
      <Dialog
        closeOnClickOutside={false}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Newsletter"
      >
        <p>Would you like to get your inbox filled with spam? If yes click no</p>
        <Flex justifyContent="flex-end">
          <Button onClick={() => setIsDialogOpen(false)} variant="outlined">
            No
          </Button>
          <Button onClick={() => setIsDialogOpen(false)}>Yes</Button>
        </Flex>
      </Dialog>
      <h2>Spinners</h2>
      <Center>
        <Spinner />
      </Center>
      <Divider />
      <Divider label="Divider with a label" />
      <Divider labelPosition="left" label="Label to the left" />
      <Divider labelPosition="right" label="Label to the right" />
      <h2>Accordion</h2>
      <Accordion>
        <Accordion.Item label="Accordion 1">
          <div>Hello</div>
        </Accordion.Item>
        <Accordion.Item label="Accordion 2">
          <div>Hello</div>
          <h1>some more</h1>
          <p>
            Tempor voluptate mollit sunt adipisicing elit irure ea sunt. Ea non adipisicing sit ex. Ex in non ex
            excepteur amet occaecat tempor ex consectetur ex nisi. Proident ad enim id non elit minim irure sit pariatur
            incididunt. Officia proident ea tempor enim aliqua culpa ullamco. Enim occaecat ea enim Lorem Lorem cillum
            aliquip ex deserunt ullamco proident ex labore. Aute sit sit esse deserunt velit magna consequat ad ipsum
            excepteur fugiat sunt voluptate. Minim nostrud aute nisi nostrud velit deserunt duis ipsum. Deserunt esse
            aliquip aliqua et amet culpa labore non dolor eu consectetur aliquip. Tempor veniam ut eu culpa aliquip sit
            officia ad pariatur labore proident. Est enim sint magna ullamco id excepteur voluptate quis irure sint
            aliqua
          </p>
        </Accordion.Item>
        <Accordion.Item label="Accordion 3">
          <div>Hello</div>
          <p>
            Tempor voluptate mollit sunt adipisicing elit irure ea sunt. Ea non adipisicing sit ex. Ex in non ex
            excepteur amet occaecat tempor ex consectetur ex nisi. Proident ad enim id non elit minim irure sit pariatur
            incididunt. Officia proident ea tempor enim aliqua culpa ullamco. Enim occaecat ea enim Lorem Lorem cillum
            aliquip ex deserunt ullamco proident ex labore. Aute sit sit esse deserunt velit magna consequat ad ipsum
            excepteur fugiat sunt voluptate. Minim nostrud aute nisi nostrud velit deserunt duis ipsum. Deserunt esse
            aliquip aliqua et amet culpa labore non dolor eu consectetur aliquip. Tempor veniam ut eu culpa aliquip sit
            officia ad pariatur labore proident. Est enim sint magna ullamco id excepteur voluptate quis irure sint
            aliqua
          </p>
        </Accordion.Item>
        <Accordion.Item label="Accordion 4">
          <div>Hello</div>
          <p>
            Tempor voluptate mollit sunt adipisicing elit irure ea sunt. Ea non adipisicing sit ex. Ex in non ex
            excepteur amet occaecat tempor ex consectetur ex nisi. Proident ad enim id non elit minim irure sit pariatur
            incididunt. Officia proident ea tempor enim aliqua culpa ullamco. Enim occaecat ea enim Lorem Lorem cillum
            aliquip ex deserunt ullamco proident ex labore. Aute sit sit esse deserunt velit magna consequat ad ipsum
            excepteur fugiat sunt voluptate. Minim nostrud aute nisi nostrud velit deserunt duis ipsum. Deserunt esse
            aliquip aliqua et amet culpa labore non dolor eu consectetur aliquip. Tempor veniam ut eu culpa aliquip sit
            officia ad pariatur labore proident. Est enim sint magna ullamco id excepteur voluptate quis irure sint
            aliqua
            <h1>helo</h1>
          </p>
        </Accordion.Item>
      </Accordion>
      <Divider label="Inputs" labelPosition="left" />
      <Flex alignItems="flex-end">
        <TextInput label="Default" helperText="This is the default input" placeholder="Enter some text" />
        <TextInput label="Filled Variant" variant="filled" placeholder="Enter some text" />
        <TextInput label="Subtle Variant" variant="subtle" placeholder="Enter some text" loading />
      </Flex>
    </ThemeProvider>
  );
};

export const Dark = Template.bind({});

Dark.args = {
  theme: "dark",
};

export const Light = Template.bind({});

Light.args = {
  theme: "light",
  defaultStyles: {
    global: {
      borderRadius: "sm",
    },
  },
};

export const Default = Template.bind({});

Default.args = {};

export const PrimaryRed = Template.bind({});

PrimaryRed.args = {
  defaultStyles: {
    global: {
      color: "red",
    },
  },
};

export const CustomStyles = Template.bind({});

CustomStyles.args = {
  theme: "dark",
  defaultStyles: {
    global: {
      color: "grape",
      borderRadius: "xs",
    },
    colors: {
      grape: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
    },
    components: {
      Button: {
        borderRadius: "lg",
      },
      Modal: {},
      Dialog: {
        width: 500,
      },
      Divider: {
        dividerVariant: "dashed",
      },
    },
  },
};

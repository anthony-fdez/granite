/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from "@emotion/react";

import React, { useState } from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";
import ThemeProvider from "./ThemeProvider";
import Button from "../Button";
import Spinner from "../Spinner";
import Center from "../Center";
import Modal from "../Modal";
import Flex from "../Flex";
import Divider from "../Divider";
import Accordion from "../Accordion";
import Dialog from "../Dialog";
import TextInput from "../TextInput";
import Drawer from "../Drawer/Drawer";
import Tooltip from "../Tooltip";
import HoverCard from "../HoverCard";
import Skeleton from "../Skeleton";

export default {
  component: ThemeProvider,
  title: "Components/ThemeProvider",
};

const Template: ComponentStory<typeof ThemeProvider> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const hoverCardElement = (): JSX.Element => (
    <div>
      <h1>Did you know?</h1>
      <Skeleton count={3} />
      <br />
      <Flex justifyContent="flex-end">
        <Button variant="outlined">No</Button>
        <Button>Yes</Button>
      </Flex>
    </div>
  );

  return (
    <ThemeProvider
      css={{
        margin: "auto",
        maxWidth: 1000,
      }}
      {...args}
    >
      <h2>Buttons</h2>
      <Flex wrap="wrap">
        <Button>Button</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="subtle">Subtle</Button>
        <Button loading>Loading</Button>
        <Tooltip tooltip="You cant click disabled buttons :)">
          <Button disabled>Disabled</Button>
        </Tooltip>
        <Button disabled variant="outlined">
          Disabled Outlined
        </Button>
        <Button disabled variant="subtle">
          Disabled Subtle
        </Button>
      </Flex>
      <Button fullWidth onClick={() => setIsModalOpen(true)}>
        Full Width (open modal)
      </Button>
      <Button fullWidth onClick={() => setIsDrawerOpen(true)} variant="outlined">
        Full Width (open drawer)
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="My Modal" zIndex={1000}>
        <h2>This is the modal</h2>
        <p>
          Deserunt excepteur aliquip velit consectetur. Ea voluptate enim laboris nulla incididunt reprehenderit sit
          nisi culpa non tempor commodo dolor. In id enim irure ea dolore anim qui. Aute laborum nulla anim nisi amet ea
          dolor duis adipisicing exercitation excepteur fugiat commodo et. Minim amet culpa est ex officia. Irure
          cupidatat laborum dolore non anim. Sunt est dolor pariatur do incididunt sunt labore est nostrud exercitation
          eiusmod aute duis non. Veniam commodo anim consequat exercitation est incididunt commodo est. Occaecat
          deserunt nostrud id mollit commodo laborum. Ut id mollit irure quis.
        </p>
        <Divider label="This is the footer" labelPosition="left" marginBottom={10} marginTop={50} />
        <Flex justifyContent="flex-end">
          <Button onClick={() => setIsModalOpen(false)} variant="outlined">
            Close
          </Button>
          <Button onClick={() => setIsModalOpen(false)}>This is a nice modal</Button>
        </Flex>
      </Modal>
      <Drawer backdropBlur={5} closeButton isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title="Drawer">
        <p>This is the very simple drawer</p>
        <Skeleton count={5} />
        <Skeleton height={100} />
        <Skeleton count={5} />
        <p>Keep waiting, it will load... eventually</p>
      </Drawer>
      <h2>Layout</h2>

      <>
        <h3>Center</h3>

        <Center>
          <p>CENTER</p>
        </Center>
        <h3>Flex</h3>
        <Flex justifyContent="space-between">
          <Button>1</Button>
          <HoverCard card={hoverCardElement()}>
            <Button onClick={() => setIsDialogOpen(true)}>2 (open dialog)</Button>
          </HoverCard>
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
      <Divider label="Label to the left" labelPosition="left" />
      <Divider label="Label to the right" labelPosition="right" />
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
        <TextInput helperText="This is the default input" label="Default" placeholder="Enter some text" />
        <TextInput error label="Filled Variant" placeholder="Enter some text" variant="filled" />
        <TextInput label="Subtle Variant" loading placeholder="Enter some text" variant="subtle" />
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
  defaultStyles: {
    global: {
      borderRadius: "sm",
    },
  },
  theme: "light",
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
  defaultStyles: {
    colors: {
      red: [
        "#f3f0ff",
        "#e5dbff",
        "#d0bfff",
        "#b197fc",
        "#9775fa",
        "#845ef7",
        "#7950f2",
        "#7048e8",
        "#6741d9",
        "#5f3dc4",
      ],
    },
    components: {
      Dialog: {
        width: 500,
      },
      Divider: {
        dividerVariant: "dashed",
      },
      Modal: {
        backdropBlur: 10,
        unmount: false,
      },
    },
    global: {
      borderRadius: "lg",
      color: "grape",
    },
  },
  theme: "dark",
};

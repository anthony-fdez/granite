/** @jsxImportSource @emotion/react */
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
import AccordionItem from "../../DataDisplay/Accordion/AccordionItem";
import useTheme from "../../hooks/useTheme";

export default {
  title: "Components/Theming/ThemeProvider",
  component: ThemeProvider,
};

const Template: ComponentStory<typeof ThemeProvider> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = useTheme();

  console.log(theme);

  return (
    <ThemeProvider css={{ maxWidth: 1000, margin: "auto" }} {...args}>
      <h2>Buttons</h2>
      <Flex wrap="wrap">
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
      </Flex>
      <Button onClick={() => setIsModalOpen(true)} fullWidth>
        Full Width (open modal)
      </Button>
      <Modal
        zIndex={1000}
        title="My Modal"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <h2>This is the modal</h2>
        <p>
          Deserunt excepteur aliquip velit consectetur. Ea voluptate enim
          laboris nulla incididunt reprehenderit sit nisi culpa non tempor
          commodo dolor. In id enim irure ea dolore anim qui. Aute laborum nulla
          anim nisi amet ea dolor duis adipisicing exercitation excepteur fugiat
          commodo et. Minim amet culpa est ex officia. Irure cupidatat laborum
          dolore non anim. Sunt est dolor pariatur do incididunt sunt labore est
          nostrud exercitation eiusmod aute duis non. Veniam commodo anim
          consequat exercitation est incididunt commodo est. Occaecat deserunt
          nostrud id mollit commodo laborum. Ut id mollit irure quis.
        </p>
        <Divider
          label="This is the footer"
          labelPosition="left"
          marginTop={50}
          marginBottom={10}
        />
        <Flex justifyContent="flex-end">
          <Button onClick={() => setIsModalOpen(false)} variant="outlined">
            Close
          </Button>
          <Button onClick={() => setIsModalOpen(false)}>
            This is a nice modal
          </Button>
        </Flex>
      </Modal>
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
        <AccordionItem label="Accordion 1">
          <div>Hello</div>
        </AccordionItem>
        <AccordionItem label="Accordion 2">
          <div>Hello</div>
          <h1>some more</h1>
          <p>
            Tempor voluptate mollit sunt adipisicing elit irure ea sunt. Ea non
            adipisicing sit ex. Ex in non ex excepteur amet occaecat tempor ex
            consectetur ex nisi. Proident ad enim id non elit minim irure sit
            pariatur incididunt. Officia proident ea tempor enim aliqua culpa
            ullamco. Enim occaecat ea enim Lorem Lorem cillum aliquip ex
            deserunt ullamco proident ex labore. Aute sit sit esse deserunt
            velit magna consequat ad ipsum excepteur fugiat sunt voluptate.
            Minim nostrud aute nisi nostrud velit deserunt duis ipsum. Deserunt
            esse aliquip aliqua et amet culpa labore non dolor eu consectetur
            aliquip. Tempor veniam ut eu culpa aliquip sit officia ad pariatur
            labore proident. Est enim sint magna ullamco id excepteur voluptate
            quis irure sint aliqua
          </p>
        </AccordionItem>
        <AccordionItem label="Accordion 3">
          <div>Hello</div>
          <p>
            Tempor voluptate mollit sunt adipisicing elit irure ea sunt. Ea non
            adipisicing sit ex. Ex in non ex excepteur amet occaecat tempor ex
            consectetur ex nisi. Proident ad enim id non elit minim irure sit
            pariatur incididunt. Officia proident ea tempor enim aliqua culpa
            ullamco. Enim occaecat ea enim Lorem Lorem cillum aliquip ex
            deserunt ullamco proident ex labore. Aute sit sit esse deserunt
            velit magna consequat ad ipsum excepteur fugiat sunt voluptate.
            Minim nostrud aute nisi nostrud velit deserunt duis ipsum. Deserunt
            esse aliquip aliqua et amet culpa labore non dolor eu consectetur
            aliquip. Tempor veniam ut eu culpa aliquip sit officia ad pariatur
            labore proident. Est enim sint magna ullamco id excepteur voluptate
            quis irure sint aliqua
          </p>
        </AccordionItem>
        <AccordionItem label="Accordion 4">
          <div>Hello</div>
          <p>
            Tempor voluptate mollit sunt adipisicing elit irure ea sunt. Ea non
            adipisicing sit ex. Ex in non ex excepteur amet occaecat tempor ex
            consectetur ex nisi. Proident ad enim id non elit minim irure sit
            pariatur incididunt. Officia proident ea tempor enim aliqua culpa
            ullamco. Enim occaecat ea enim Lorem Lorem cillum aliquip ex
            deserunt ullamco proident ex labore. Aute sit sit esse deserunt
            velit magna consequat ad ipsum excepteur fugiat sunt voluptate.
            Minim nostrud aute nisi nostrud velit deserunt duis ipsum. Deserunt
            esse aliquip aliqua et amet culpa labore non dolor eu consectetur
            aliquip. Tempor veniam ut eu culpa aliquip sit officia ad pariatur
            labore proident. Est enim sint magna ullamco id excepteur voluptate
            quis irure sint aliqua
            <h1>helo</h1>
          </p>
        </AccordionItem>
      </Accordion>
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

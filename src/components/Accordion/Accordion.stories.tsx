import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";

export default {
  title: "Components/Accordion",
  component: Accordion,
};

const Template: ComponentStory<typeof Accordion> = (args) => (
  <div>
    <Accordion {...args}>
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
          ullamco. Enim occaecat ea enim Lorem Lorem cillum aliquip ex deserunt
          ullamco proident ex labore. Aute sit sit esse deserunt velit magna
          consequat ad ipsum excepteur fugiat sunt voluptate. Minim nostrud aute
          nisi nostrud velit deserunt duis ipsum. Deserunt esse aliquip aliqua
          et amet culpa labore non dolor eu consectetur aliquip. Tempor veniam
          ut eu culpa aliquip sit officia ad pariatur labore proident. Est enim
          sint magna ullamco id excepteur voluptate quis irure sint aliqua
        </p>
      </AccordionItem>
      <AccordionItem label="Accordion 3">
        <div>Hello</div>
        <p>
          Tempor voluptate mollit sunt adipisicing elit irure ea sunt. Ea non
          adipisicing sit ex. Ex in non ex excepteur amet occaecat tempor ex
          consectetur ex nisi. Proident ad enim id non elit minim irure sit
          pariatur incididunt. Officia proident ea tempor enim aliqua culpa
          ullamco. Enim occaecat ea enim Lorem Lorem cillum aliquip ex deserunt
          ullamco proident ex labore. Aute sit sit esse deserunt velit magna
          consequat ad ipsum excepteur fugiat sunt voluptate. Minim nostrud aute
          nisi nostrud velit deserunt duis ipsum. Deserunt esse aliquip aliqua
          et amet culpa labore non dolor eu consectetur aliquip. Tempor veniam
          ut eu culpa aliquip sit officia ad pariatur labore proident. Est enim
          sint magna ullamco id excepteur voluptate quis irure sint aliqua
        </p>
      </AccordionItem>
      <AccordionItem label="Accordion 4">
        <div>Hello</div>
        <p>
          Tempor voluptate mollit sunt adipisicing elit irure ea sunt. Ea non
          adipisicing sit ex. Ex in non ex excepteur amet occaecat tempor ex
          consectetur ex nisi. Proident ad enim id non elit minim irure sit
          pariatur incididunt. Officia proident ea tempor enim aliqua culpa
          ullamco. Enim occaecat ea enim Lorem Lorem cillum aliquip ex deserunt
          ullamco proident ex labore. Aute sit sit esse deserunt velit magna
          consequat ad ipsum excepteur fugiat sunt voluptate. Minim nostrud aute
          nisi nostrud velit deserunt duis ipsum. Deserunt esse aliquip aliqua
          et amet culpa labore non dolor eu consectetur aliquip. Tempor veniam
          ut eu culpa aliquip sit officia ad pariatur labore proident. Est enim
          sint magna ullamco id excepteur voluptate quis irure sint aliqua
        </p>
      </AccordionItem>
    </Accordion>
  </div>
);

export const Default = Template.bind({});

Default.args = {};

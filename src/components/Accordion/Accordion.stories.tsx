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
      </AccordionItem>
      <AccordionItem label="Accordion 3">
        <div>Hello</div>
      </AccordionItem>
      <AccordionItem label="Accordion 4">
        <div>Hello</div>
      </AccordionItem>
    </Accordion>
  </div>
);

export const Default = Template.bind({});

Default.args = {};

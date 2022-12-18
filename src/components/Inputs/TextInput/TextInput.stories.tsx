import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import TextInput from "./TextInput";
import Flex from "../../Layout/Flex";
import Button from "../../Buttons/Button";

export default {
  title: "Components/Inputs/TextInput",
  component: TextInput,
};

export const Form: ComponentStory<typeof TextInput> = (args) => (
  <>
    <form
      onSubmit={(e) => {
        e.preventDefault();

        alert("Submitted");
      }}
    >
      <Flex>
        <TextInput required={true} />
        <TextInput />
      </Flex>
      <Button type="submit">Submit</Button>
    </form>
  </>
);

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});

Default.args = {
  placeholder: "Text input",
};

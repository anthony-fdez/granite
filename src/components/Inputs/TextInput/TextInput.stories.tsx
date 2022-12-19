import React, { useState } from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import TextInput from "./TextInput";
import Flex from "../../Layout/Flex";
import Button from "../../Buttons/Button";

export default {
  title: "Components/Inputs/TextInput",
  component: TextInput,
};

export const Form: ComponentStory<typeof TextInput> = (args) => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          alert("Submitted");
        }}
      >
        <Flex alignItems="flex-end">
          <TextInput
            label="Input 1"
            placeholder="Text 1"
            helperText="With autofocus"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            required={true}
            autofocus={true}
          />
          <TextInput
            label="Input 2"
            helperText="Default value = 'Banana'"
            placeholder="Text 2"
            defaultValue="Banana"
            onChange={(e) => setText2(e.target.value)}
          />
        </Flex>
        <Flex>
          <TextInput placeholder="Outlined Variant" />
          <TextInput variant="filled" placeholder="Filled Variant" />
          <TextInput variant="subtle" placeholder="Subtle Variant" />
        </Flex>
        <Flex>
          <TextInput disabled placeholder="Outlined Variant" />
          <TextInput disabled variant="filled" placeholder="Filled Variant" />
          <TextInput disabled variant="subtle" placeholder="Subtle Variant" />
        </Flex>
        <Flex>
          <TextInput
            errorText="With an error text"
            title="Full Width"
            fullWidth
            placeholder="Long..."
          />
        </Flex>
        <Button type="submit">Submit</Button>
      </form>
      <p>Value 1: {text1}</p>
      <p>Value 2: {text2}</p>
      <TextInput
        placeholder="Controls input 1"
        onChange={(e) => setText1(e.target.value)}
        required={true}
      />
    </>
  );
};

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});

Default.args = {
  placeholder: "Text input",
};

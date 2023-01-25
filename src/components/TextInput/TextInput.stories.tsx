import React, { useState } from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import { AlertCircle } from "react-feather";
import TextInput from "./TextInput";
import Flex from "../Flex";
import Button from "../Button";
import ThemeProvider from "../ThemeProvider";

export default {
  title: "Components/TextInput",
  component: TextInput,
};

export const Form: ComponentStory<typeof TextInput> = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  return (
    <ThemeProvider>
      <>
        <form
          onSubmit={(e): void => {
            e.preventDefault();

            // eslint-disable-next-line no-alert
            alert("Submitted");
          }}
        >
          <Flex alignItems="flex-end">
            <TextInput
              autofocus
              helperText="With autofocus"
              iconLeft={<AlertCircle size={15} />}
              label="Input 1"
              loading={text1 !== ""}
              onChange={(e): void => setText1(e.target.value)}
              placeholder="Text 1"
              required
              value={text1}
            />
            <TextInput
              defaultValue="Banana"
              helperText="Default value = 'Banana'"
              label="Input 2"
              loading
              onChange={(e): void => setText2(e.target.value)}
              placeholder="Text 2"
            />
          </Flex>
          <Flex>
            <TextInput placeholder="Outlined Variant" />
            <TextInput placeholder="Filled Variant" variant="filled" />
            <TextInput placeholder="Subtle Variant" variant="subtle" />
          </Flex>
          <Flex>
            <TextInput disabled placeholder="Outlined Variant" />
            <TextInput disabled placeholder="Filled Variant" variant="filled" />
            <TextInput disabled placeholder="Subtle Variant" variant="subtle" />
          </Flex>
          <Flex>
            <TextInput error errorText="With an error text" fullWidth placeholder="Long..." title="Full Width" />
          </Flex>
          <Button type="submit">Submit</Button>
        </form>
        <p>{`Value 1: ${text1}`}</p>
        <p>{`Value 2: ${text2}`}</p>
        <TextInput onChange={(e): void => setText1(e.target.value)} placeholder="Controls input 1" required />
      </>
    </ThemeProvider>
  );
};

const Template: ComponentStory<typeof TextInput> = (args) => (
  <ThemeProvider>
    <TextInput {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  placeholder: "Text input",
};

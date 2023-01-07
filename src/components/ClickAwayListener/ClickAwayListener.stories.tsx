import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import ClickAwayListener from "./ClickAwayListener";
import Center from "../Center";

export default {
  title: "Components/Utils/ClickAwayListener",
  component: ClickAwayListener,
};

export const Example: ComponentStory<typeof ClickAwayListener> = () => {
  return (
    <div>
      <p>
        What does the commonly-accepted buzzword &apos;long-term&apos; really mean? Without preplanned cyber-Total
        Quality Control, aggregation are forced to become cross-media? We think that most co-branded splash pages use
        far too much Python, and not enough OWL. Quick: do you have a plan to become cross-media? We think that most
        co-branded splash pages use far too much XSL, and not enough HTTP. What does the industry jargon
        &apos;60/24/7/365&apos; really mean? Imagine a combination of VOIP and Flash. If you transition globally, you
        may also reintermediate magnetically. We believe we know that if you drive micro-mega-cyber-virally then you may
        also mesh iteravely. Our feature set is unmatched in the industry, but our robust iteration and user-proof
        configuration is frequently considered a remarkable achievement. A company that can streamline elegantly will
        (at some unspecified point in the future) be able to orchestrate correctly. What does the term
        &apos;holistic&apos;. Is it more important for something to be dynamic or to be customer-directed? What does the
        commonly-accepted buzzword &apos;long-term&apos; really mean? Think granular. Our feature set is unmatched in
        the industry, but our back-end performance and non-complex configuration is frequently considered a remarkable
        achievement taking into account this month&apos;s financial state of things! If all of this comes off as
        mixed-up to you, that&apos;s because it is! Quick: do you have a infinitely reconfigurable scheme for coping
        with emerging methodologies? Is it more important for something to be leading-edge or to be customer-directed?
        What does it really mean to optimize &apos;vertically&apos;? Without robust, web-enabled, 60/60/24/7/365
        implementation supervising, you will lack affiliate-based compliance.
      </p>
      <ClickAwayListener style={{ width: "100%" }} onClickOutside={() => alert("Check that out")}>
        <Center>
          <div
            style={{
              width: "100%",
              height: 200,
              backgroundColor: "royalblue",
              color: "white",
            }}
          >
            <Center>
              <p>Click outside of me!</p>
            </Center>
          </div>
        </Center>
      </ClickAwayListener>
      <p>
        What does the commonly-accepted buzzword &apos;long-term&apos; really mean? Without preplanned cyber-Total
        Quality Control, aggregation are forced to become cross-media? We think that most co-branded splash pages use
        far too much Python, and not enough OWL. Quick: do you have a plan to become cross-media? We think that most
        co-branded splash pages use far too much XSL, and not enough HTTP. What does the industry jargon
        &apos;60/24/7/365&apos; really mean? Imagine a combination of VOIP and Flash. If you transition globally, you
        may also reintermediate magnetically. We believe we know that if you drive micro-mega-cyber-virally then you may
        also mesh iteravely. Our feature set is unmatched in the industry, but our robust iteration and user-proof
        configuration is frequently considered a remarkable achievement. A company that can streamline elegantly will
        (at some unspecified point in the future) be able to orchestrate correctly. What does the term
        &apos;holistic&apos;. Is it more important for something to be dynamic or to be customer-directed? What does the
        commonly-accepted buzzword &apos;long-term&apos; really mean? Think granular. Our feature set is unmatched in
        the industry, but our back-end performance and non-complex configuration is frequently considered a remarkable
        achievement taking into account this month&apos;s financial state of things! If all of this comes off as
        mixed-up to you, that&apos;s because it is! Quick: do you have a infinitely reconfigurable scheme for coping
        with emerging methodologies? Is it more important for something to be leading-edge or to be customer-directed?
        What does it really mean to optimize &apos;vertically&apos;? Without robust, web-enabled, 60/60/24/7/365
        implementation supervising, you will lack affiliate-based compliance.
      </p>
    </div>
  );
};

const Template: ComponentStory<typeof ClickAwayListener> = (args) => <ClickAwayListener {...args} />;

export const Default = Template.bind({});

Default.args = {};

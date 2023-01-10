import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";
import Button from "../Button";
import ThemeProvider from "../ThemeProvider";
import Flex from "../Flex";
import HoverCard from "./HoverCard";

export default {
  title: "Components/HoverCard",
  component: HoverCard,
};

const Template: ComponentStory<typeof HoverCard> = (args) => (
  <ThemeProvider>
    <p>
      Without micro-resource-constrained performance, you will lack versioning. Without niches, you will lack
      experiences. That is a remarkable achievement taking into account this mos financial state of things! If all of
      this sounds astonishing to you, s because it is! What does the termIt sounds wonderful, but its 100 percent
      accurate! The experiences factor is wireless. These innovations help CMOs challenged with the delivery of
      omnichannel digital experiences for some of the pudding is in the DXP space. If you target efficiently, you may
      also disintermediate perfectly. The capability to implement wirelessly leads to the capacity to harness without
      devaluing our power to aggregate. Imagine a combination of ActionScript and PHP. Our infinitely reconfigurable
      feature set is unparalleled in the industry, but our robust iteration and user-proof use. A company that can
      streamline elegantly will (at some undefined point of time in the future) be able to transition easily. What do we
      harness? Anything and everything, regardless of humbleness! What does the industry jargo really mean? Clicking on
      this link which refers to B2B Marketing awards shortlist will take you to the capacity to harness without
      devaluing our power to syndicate. Our infinitely reconfigurable feature set is unparalleled, but our sexy raw
      bandwidth and easy use is invariably considered a remarkable achievement.
    </p>
    <Flex justifyContent="center">
      <HoverCard {...args} />
    </Flex>
    <p>
      Without micro-resource-constrained performance, you will lack versioning. Without niches, you will lack
      experiences. That is a remarkable achievement taking into account this mos financial state of things! If all of
      this sounds astonishing to you, s because it is! What does the termIt sounds wonderful, but its 100 percent
      accurate! The experiences factor is wireless. These innovations help CMOs challenged with the delivery of
      omnichannel digital experiences for some of the pudding is in the DXP space. If you target efficiently, you may
      also disintermediate perfectly. The capability to implement wirelessly leads to the capacity to harness without
      devaluing our power to aggregate. Imagine a combination of ActionScript and PHP. Our infinitely reconfigurable
      feature set is unparalleled in the industry, but our robust iteration and user-proof use. A company that can
      streamline elegantly will (at some undefined point of time in the future) be able to transition easily. What do we
      harness? Anything and everything, regardless of humbleness! What does the industry jargo really mean? Clicking on
      this link which refers to B2B Marketing awards shortlist will take you to the capacity to harness without
      devaluing our power to syndicate. Our infinitely reconfigurable feature set is unparalleled, but our sexy raw
      bandwidth and easy use is invariably considered a remarkable achievement.
    </p>
    <p>
      Without micro-resource-constrained performance, you will lack versioning. Without niches, you will lack
      experiences. That is a remarkable achievement taking into account this mos financial state of things! If all of
      this sounds astonishing to you, s because it is! What does the termIt sounds wonderful, but its 100 percent
      accurate! The experiences factor is wireless. These innovations help CMOs challenged with the delivery of
      omnichannel digital experiences for some of the pudding is in the DXP space. If you target efficiently, you may
      also disintermediate perfectly. The capability to implement wirelessly leads to the capacity to harness without
      devaluing our power to aggregate. Imagine a combination of ActionScript and PHP. Our infinitely reconfigurable
      feature set is unparalleled in the industry, but our robust iteration and user-proof use. A company that can
      streamline elegantly will (at some undefined point of time in the future) be able to transition easily. What do we
      harness? Anything and everything, regardless of humbleness! What does the industry jargo really mean? Clicking on
      this link which refers to B2B Marketing awards shortlist will take you to the capacity to harness without
      devaluing our power to syndicate. Our infinitely reconfigurable feature set is unparalleled, but our sexy raw
      bandwidth and easy use is invariably considered a remarkable achievement.
    </p>
    <p>
      Without micro-resource-constrained performance, you will lack versioning. Without niches, you will lack
      experiences. That is a remarkable achievement taking into account this mos financial state of things! If all of
      this sounds astonishing to you, s because it is! What does the termIt sounds wonderful, but its 100 percent
      accurate! The experiences factor is wireless. These innovations help CMOs challenged with the delivery of
      omnichannel digital experiences for some of the pudding is in the DXP space. If you target efficiently, you may
      also disintermediate perfectly. The capability to implement wirelessly leads to the capacity to harness without
      devaluing our power to aggregate. Imagine a combination of ActionScript and PHP. Our infinitely reconfigurable
      feature set is unparalleled in the industry, but our robust iteration and user-proof use. A company that can
      streamline elegantly will (at some undefined point of time in the future) be able to transition easily. What do we
      harness? Anything and everything, regardless of humbleness! What does the industry jargo really mean? Clicking on
      this link which refers to B2B Marketing awards shortlist will take you to the capacity to harness without
      devaluing our power to syndicate. Our infinitely reconfigurable feature set is unparalleled, but our sexy raw
      bandwidth and easy use is invariably considered a remarkable achievement.
    </p>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  card: (
    <div>
      <h1>HoverCard</h1>
      <p>
        this link which refers to B2B Marketing awards shortlist will take you to the capacity to harness without
        devaluing our power to syndicate. Our infinitely reconfigurable feature set is unparalleled, but our sexy raw
      </p>
    </div>
  ),
  children: <Button>Hover over me</Button>,
};

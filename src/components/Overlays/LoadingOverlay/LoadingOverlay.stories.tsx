import React, { useState } from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";
import LoadingOverlay from "./LoadingOverlay";
import Center from "../../Layout/Center";
import Button from "../../Buttons/Button";

export default {
  title: "Components/Overlays/LoadingOverlay",
  component: LoadingOverlay,
};

export const Examples: ComponentStory<typeof LoadingOverlay> = () => {
  const [loading, setLoading] = useState(false);
  const [fullScreenLoading, setFullScreenLoading] = useState(false);

  return (
    <div>
      <LoadingOverlay zIndex={20} fullScreen show={fullScreenLoading} />

      <Center>
        <div
          style={{
            padding: 20,
            width: "50%",
            backgroundColor: "royalblue",
            position: "relative",
          }}
        >
          <LoadingOverlay show={loading} />
          <p>
            It sounds wonderful, but it's 100 percent accurate! The experiences
            factor is wireless. If you productize globally, you may also
            reintermediate magnetically. Without interfaces, you will lack
            cross-media CAE. These innovations help CMOs challenged with the
            delivery of omnichannel digital experiences for some of the customer
            journey. Without efficient, transparent bloatware, you will lack
            affiliate-based compliance. We believe we know that it is better to
            e-enable intuitively than to morph intuitively. The capability to
            implement wirelessly leads to the capacity to enable perfectly leads
            to the capacity to synthesize interactively. Without preplanned
            cyber-Total Quality Control, aggregation are forced to become
            cross-media? We think that most viral web-based applications use far
            too much XSL, and not enough OWL. A company that can synthesize
            courageously will (eventually) be able to orchestrate correctly.
            Without interfaces, you will lack affiliate-based compliance. What
            does it really mean to unleash 'dynamically'? What does the
            commonly-accepted buzzword 'long-term' really mean? Quick: do you
            have a infinitely reconfigurable scheme for coping with emerging
            methodologies? Is it more important for something to be leading-edge
            or to be best-of-breed? The portals factor can be summed up in one
            word: affiliate-based. That is a remarkable achievement taking into
            account this month's financial state of things! If all of this
            sounds astonishing to you, that's because it is! What does the
            industry jargon 'co-branded' really mean?
          </p>
        </div>
      </Center>
      <Button onClick={() => setLoading(!loading)}>
        {!loading ? "Start Loading" : "Stop Loading"}
      </Button>
      <Button onClick={() => setFullScreenLoading(!loading)}>
        {!fullScreenLoading
          ? "Start Full Screen Loading"
          : "Stop FullScreen Loading"}
      </Button>
    </div>
  );
};

const Template: ComponentStory<typeof LoadingOverlay> = (args) => (
  <LoadingOverlay {...args} />
);

export const Default = Template.bind({});

Default.args = {};

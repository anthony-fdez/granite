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
        <p>
          Eiusmod voluptate consequat labore quis proident esse magna veniam
          incididunt esse Lorem ea aliquip. Aute irure reprehenderit anim nulla
          amet elit mollit officia consectetur consectetur ut non magna quis.
          Cillum cillum magna velit laboris deserunt velit est exercitation
          deserunt est est velit velit. Minim irure ea labore elit nostrud id
          aliqua. Nulla incididunt anim tempor elit do fugiat Lorem duis magna
          et irure tempor laboris. Consequat eiusmod culpa id irure tempor.
          Nulla incididunt ullamco elit dolore eiusmod nulla consequat
          reprehenderit enim reprehenderit incididunt quis anim proident. Do
          reprehenderit in aliqua deserunt Lorem labore do ea mollit nostrud in
          ea. Sint sint ea proident irure. Non culpa laborum ad nulla excepteur
          elit enim dolore non cillum voluptate. Ullamco reprehenderit dolor
          commodo esse et culpa dolor do. Nostrud voluptate cupidatat officia
          irure eiusmod anim. Ea nostrud aliquip amet aute duis commodo
          incididunt magna eiusmod enim aliqua. Aliqua nostrud consequat
          voluptate voluptate sit ad officia id adipisicing tempor nisi. Labore
          veniam eiusmod do mollit enim ea enim occaecat culpa sit labore in.
          Nostrud magna nulla exercitation officia minim ex ut anim ex consequat
          dolor do qui. Non amet occaecat culpa deserunt voluptate nulla aute.
          Sint esse mollit cillum in occaecat nostrud proident ut veniam
          proident. Ad in aute sunt nostrud fugiat. Eu occaecat elit
          exercitation culpa esse velit. Reprehenderit duis sunt reprehenderit
          ut cupidatat minim voluptate dolor proident sit nisi. Quis pariatur
          duis nisi dolore proident incididunt Lorem laborum aliquip ipsum
          voluptate. Fugiat do nostrud eiusmod ullamco minim mollit proident
          eiusmod sunt. Incididunt laboris ut sint magna sint in magna. Laborum
          aliquip officia sunt adipisicing adipisicing anim est ullamco amet.
          Est consectetur ullamco culpa aute labore elit quis in irure
          consectetur minim minim cillum culpa. Et id laborum quis aliqua eu id
          velit voluptate qui id. Et mollit excepteur duis voluptate consequat
          excepteur incididunt sint incididunt ipsum. Tempor amet amet nostrud
          excepteur proident. Ad id amet voluptate pariatur aliqua est cillum.
          Cupidatat id laborum excepteur tempor quis veniam nulla nulla labore
          aliquip. Id incididunt nisi adipisicing ea ullamco mollit laborum
          deserunt. Lorem ex aliqua velit nisi adipisicing proident. Aute
          occaecat officia eu eiusmod magna. Elit consequat commodo Lorem ipsum
          fugiat exercitation sint proident id anim commodo anim. Excepteur
          voluptate cillum id eiusmod laborum sunt cupidatat veniam ea
          exercitation labore duis culpa. Magna id velit consectetur velit ad
          officia laborum. Excepteur ea ullamco aliqua et ad aliquip amet Lorem
          sunt. Nisi reprehenderit id non ullamco aute magna commodo cillum
          nulla duis. Aute culpa sit ad esse ut labore incididunt eu anim
          aliquip enim reprehenderit. Voluptate ut nisi culpa dolor. Anim mollit
          nulla eiusmod culpa velit non ullamco. Mollit proident incididunt
          adipisicing adipisicing reprehenderit ea sunt est veniam cillum
          ullamco officia ipsum ex. Incididunt ex ullamco nostrud veniam. Culpa
          amet fugiat non ea commodo minim non Lorem. Aliquip consectetur Lorem
          anim magna eu commodo non veniam cupidatat minim anim. Sint dolor
          magna fugiat pariatur sit tempor. Officia duis laborum minim officia
          do ex dolore dolor commodo deserunt.
        </p>
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

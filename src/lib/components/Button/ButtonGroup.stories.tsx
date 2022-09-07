import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from ".";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'General/Button',
  component: Button.Group,
} as ComponentMeta<typeof Button.Group>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ButtonGroupProps> = (args) => (
  <Button.Group {...args}>
    <Button variant="outline">Button</Button>
    <Button variant="outline">Button</Button>
    <Button variant="outline">Button</Button>
  </Button.Group>
);

//👇 Each story then reuses that template
export const ButtonGroup = Template.bind({});
ButtonGroup.storyName = 'Button Group';
ButtonGroup.args = {};

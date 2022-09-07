import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge } from ".";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Badge',
  component: Badge,
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'info', 'warning', 'success', 'danger'],
    },
    leftIcon: {
      table: {
        disable: true,
      },
    },
    rightIcon: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Badge>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  children: 'Badge',
};

// export const WithLeftIcon = Template.bind({});
// WithLeftIcon.args = {
//   leftIcon: <BadgeCheckIcon />,
//   children: 'Badge with icon left',
// };

// export const WithRightIcon = Template.bind({});
// WithRightIcon.args = {
//   rightIcon: <ArrowRightIcon />,
//   children: 'Badge with icon right',
// };
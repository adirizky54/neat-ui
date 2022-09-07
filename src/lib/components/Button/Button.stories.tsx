import type { ComponentStory, ComponentMeta } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { Button } from ".";

function CheckIcon(props: ComponentPropsWithoutRef<'svg'>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'General/Button',
  component: Button,
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['button', 'submit', 'reset'],
    },
    variant: {
      control: 'inline-radio',
      options: ['filled', 'outline', 'light'],
    },
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    radius: {
      control: 'inline-radio',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'full'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'info', 'warning', 'success', 'danger'],
    },
    uppercase: { control: 'boolean' },
    disabled: { control: 'boolean' },
    block: { control: 'boolean' },
    loading: { control: 'boolean' },
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
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  variant: 'filled',
  color: 'success',
  leftIcon: <CheckIcon />,
  children: 'Submit',
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  variant: 'filled',
  color: 'success',
  rightIcon: <CheckIcon />,
  children: 'Submit',
};
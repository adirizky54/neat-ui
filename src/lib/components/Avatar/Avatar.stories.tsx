import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar } from ".";

function UserIcon(props: ComponentPropsWithoutRef<'svg'>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
    </svg>
  );
}

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    radius: {
      control: 'inline-radio',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'full'],
    },
    variant: {
      control: 'inline-radio',
      options: ['filled', 'light'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'info', 'warning', 'success', 'danger'],
    },
    src: { control: 'text' },
    icon: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Avatar>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  children: 'AR',
};

export const WithIcon = Template.bind({});
WithIcon.argTypes = {
  src: {
    table: {
      disable: true,
    },
  },
};
WithIcon.args = {
  icon: <UserIcon />,
};
import { Meta, StoryFn } from '@Storybook/react';
import { Button, ButtonProps } from './button';

const meta: Meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// Stories
export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
};

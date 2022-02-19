import { Story } from '@storybook/react';

import Button from '.';
import { ButtonT, StyledButtonT } from './button.type';

const Template: Story<ButtonT & Partial<StyledButtonT>> = ({ ...args }) => {
  const onClick = () => alert('Clicked!');
  return <Button {...args} onClick={onClick} />;
};

export const Default = Template.bind({});
Default.args = {
  text: 'Click me!',
  loading: false,
  disabled: false,
  icon: '',
};

export default {
  title: 'Button',
  component: Default,
  argTypes: {},
};

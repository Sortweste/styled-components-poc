import { Story } from '@storybook/react';

import Icon from '.';
import { IconT, StlyedIconT } from './Icon.type';

const Template: Story<IconT & Partial<StlyedIconT>> = ({ ...args }) => {
  const onClick = () => alert('Clicked!');
  return <Icon {...args} onClick={onClick} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'add',
};

export default {
  title: 'Icon',
  component: Default,
  argTypes: {},
};

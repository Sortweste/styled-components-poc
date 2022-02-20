import { Story } from '@storybook/react';

import Icon from '.';
import { IconT, StlyedIconT } from './Icon.type';

const Template: Story<IconT & Partial<StlyedIconT>> = ({ ...args }) => {
  return <Icon {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'add',
  withBg: false,
  onClick: undefined,
};

export default {
  title: 'Icon',
  component: Default,
  argTypes: {},
};

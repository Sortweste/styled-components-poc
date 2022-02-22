import { Story } from '@storybook/react';

import Icon from '.';
import { IconT, StyledIconT } from './Icon.type';

const Template: Story<IconT & Partial<StyledIconT>> = ({ ...args }) => {
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
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    variant: {
      options: ['default', 'primary', 'secondary'],
      control: { type: 'select' },
    },
  },
};

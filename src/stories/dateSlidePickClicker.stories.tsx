import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DateSlidePickClikerComponent } from '../components/dateSlidePickClicker';

export default {
  title: 'layout/DateSlidePickCliker',
  component: DateSlidePickClikerComponent,
  argTypes: {
    getDay: {
      control: false,
    },
  },
} as ComponentMeta<typeof DateSlidePickClikerComponent>;

const Template: ComponentStory<typeof DateSlidePickClikerComponent> = (args) => {
  return <DateSlidePickClikerComponent {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  contentDate: new Date(),
};

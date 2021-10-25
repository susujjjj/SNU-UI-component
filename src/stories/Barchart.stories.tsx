import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BarchartComponent } from '../components/barchart';

export default {
  title: 'Chart/Barchart',
  component: BarchartComponent,
} as ComponentMeta<typeof BarchartComponent>;

const Template: ComponentStory<typeof BarchartComponent> = (args) => {
  return <BarchartComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  xAxisLabel: {
    value: '날짜',
    offset: -35,
    x: 365,
    y: 340,
  },
  yAxisLabel: {
    value: '복약횟수',
    angle: -90,
    x: -160,
    y: 10,
  },
  data: [
    {
      date: '09.06\n(월)',
      takeMedicineCount: 0,
    },
    {
      date: '09.07\n(화)',
      takeMedicineCount: 1,
    },
    {
      date: '09.08\n(수)',
      takeMedicineCount: 1.5,
    },
    {
      date: '09.09\n(목)',
      takeMedicineCount: 1,
    },
    {
      date: '09.10\n(금)',
      takeMedicineCount: 3,
    },
    {
      date: '09.11\n(토)',
      takeMedicineCount: 2,
    },
    {
      date: '09.12\n(일)',
      takeMedicineCount: 0.5,
    },
  ],
  barColor: '#0f66ce',
};

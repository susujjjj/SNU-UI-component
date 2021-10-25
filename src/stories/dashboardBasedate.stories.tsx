import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasedateComponent } from '../components/dashboardBasedate';

export default {
  title: 'layout/DashboardBasedate',
  component: BasedateComponent,
} as ComponentMeta<typeof BasedateComponent>;

const Template: ComponentStory<typeof BasedateComponent> = (args) => (
  <BasedateComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: '기준일자',
  content: ' 2021.08.18 ~ 2021.08.24',
};

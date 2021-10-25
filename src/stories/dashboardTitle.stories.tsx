import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DashboardTitleComponent } from '../components/dashboardTitle';

export default {
  title: 'layout/DashboardTitle',
  component: DashboardTitleComponent,
} as ComponentMeta<typeof DashboardTitleComponent>;

const Template: ComponentStory<typeof DashboardTitleComponent> = (args) => (
  <DashboardTitleComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: '주간 평균 복약 횟수', //주간 평균 복약 횟수
};

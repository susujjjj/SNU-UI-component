import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReportInfoComponent } from '../components/reportInfo';

export default {
  title: 'layout/ReportInfo',
  component: ReportInfoComponent,
  parameters: {
    zeplinLink: '',
  },
} as ComponentMeta<typeof ReportInfoComponent>;

const Template: ComponentStory<typeof ReportInfoComponent> = (args) => (
  <ReportInfoComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: '가천대학교',
  title: '건설질환자 복약순응에 대한 스마트워치 효과 연구',
  attendanceStatus: '35명 참여중',
  // onLogout: () => {},
};

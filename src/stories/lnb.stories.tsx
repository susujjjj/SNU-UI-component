import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LnbComponent } from './../components/lnb';

export default {
  title: 'layout/Lnb',
  component: LnbComponent,
} as ComponentMeta<typeof LnbComponent>;

const Template: ComponentStory<typeof LnbComponent> = (args) => <LnbComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  lnbItems: [
    {
      label: '복약리포트',
      icon: 'report',
      isActive: true,
      onClick: () => {},
    },
    {
      label: '참여자 정보',
      icon: 'user-info',
      isActive: false,
      onClick: () => {},
    },
    {
      label: '프로젝트 정보',
      icon: 'project-info',
      isActive: false,
      onClick: () => {},
    },
    {
      label: '사용 가이드',
      icon: 'guide',
      isActive: false,
      onClick: () => {},
    },
  ],
};

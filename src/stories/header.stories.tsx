import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeaderComponent } from '../components/header';

export default {
  title: 'layout/Header',
  component: HeaderComponent,
  parameters: {
    zeplinLink: 'zpl://components?pid=616d0398def3f3130bc6cea7&coids=616d0998beeb7e18ba7018f6',
  },
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = (args) => <HeaderComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  onLogout: () => {},
};

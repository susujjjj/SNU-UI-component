import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LnbItemComponent } from '../components/lnbItem';

export default {
  title: 'layout/LnbItem',
  component: LnbItemComponent,
  argTypes: {
    isActive: { control: 'boolean', onClick: { action: 'clicked' } },
  },
} as ComponentMeta<typeof LnbItemComponent>;

const Template: ComponentStory<typeof LnbItemComponent> = (args) => <LnbItemComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  isActive: false,
  label: 'Text',
};
Default.parameters = {
  zeplinLink: 'zpl://components?pid=616d0398def3f3130bc6cea7&coids=616d09cc2e571f14ba170acf',
};

export const Active = Template.bind({});
Active.args = {
  isActive: true,
  label: 'Text',
};
Active.parameters = {
  zeplinLink: 'zpl://components?coids=616d09ce3975b211203c7a87&pid=616d0398def3f3130bc6cea7',
};

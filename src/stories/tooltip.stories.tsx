import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TooltipComponent } from './../components/tooltip';

export default {
  title: 'layout/Tooltip',
  component: TooltipComponent,
} as ComponentMeta<typeof TooltipComponent>;

const Template: ComponentStory<typeof TooltipComponent> = (args) => <TooltipComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '툴팁 텍스트',
  arrowX: 'left',
  arrowY: 'top',
};

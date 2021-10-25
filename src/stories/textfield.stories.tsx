import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextFieldComponent } from './../components/textfield';

export default {
  title: 'layout/TextField',
  component: TextFieldComponent,
} as ComponentMeta<typeof TextFieldComponent>;

const Template: ComponentStory<typeof TextFieldComponent> = (args) => (
  <TextFieldComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Text',
};
Default.parameters = {
  zeplinLink: 'zpl://components?coids=616d0674d0f7ae10e6617056&pid=616d0398def3f3130bc6cea7',
};

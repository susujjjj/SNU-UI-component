import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonComponent } from '../components/button';
import PrimaryLeftIcon from './../assets/primary-left-icon.svg';

export default {
  title: 'Input/Button',
  component: ButtonComponent,
  argTypes: {
    leftIcon: {
      control: {
        type: 'file',
      },
    },
    rightIcon: {
      control: {
        type: 'file',
      },
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

export const DefaultOutlineButton = Template.bind({});
DefaultOutlineButton.args = {
  primary: false,
  label: 'Button',
};

export const DefaultPrimaryButton = Template.bind({});
DefaultPrimaryButton.args = {
  primary: true,
  label: 'Button',
};

export const DisabledOutlineButton = Template.bind({});
DisabledOutlineButton.args = {
  primary: false,
  label: 'Button',
  disabled: true,
};

export const DisabledPrimaryButton = Template.bind({});
DisabledPrimaryButton.args = {
  primary: true,
  label: 'Button',
  disabled: true,
};

export const DefaultLeftIconPrimaryButton = Template.bind({});
DefaultLeftIconPrimaryButton.args = {
  leftIcon: PrimaryLeftIcon,
  iconLocation: 'left',
  primary: true,
  label: 'Button',
};

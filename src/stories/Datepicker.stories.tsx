import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DatepickerComponent } from './../components/datepicker';

export default {
  title: 'Input/Datepicker',
  component: DatepickerComponent,
  argTypes: {
    getDate: {
      control: false,
    },
  },
} as ComponentMeta<typeof DatepickerComponent>;

const Template: ComponentStory<typeof DatepickerComponent> = (args) => {
  const [defaultDate, setDefaultDate] = React.useState(new Date());

  const getDate = (dt: Date) => {
    setDefaultDate(dt);
    console.log(dt.toDateString(), 'date');
  };

  return (
    <DatepickerComponent
      defaultYear={defaultDate.getFullYear()}
      defaultMonth={defaultDate.getMonth() + 1}
      defaultDate={defaultDate.getDate()}
      getDate={getDate}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  defaultMonth: 9,
  defaultYear: 2020,
};

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Calendar from './../../assets/ic-calendar-24.svg';
import LeftChevron from './../../assets/ic-arrow-chevronleft-black-24.svg';
import RightChevron from './../../assets/ic-arrow-chevronright-black-24.svg';
import { DatepickerComponent } from './../../components/datepicker';

export interface DateSlidePickClikerProps {
  contentDate: Date;
}

const week = ['일', '월', '화', '수', '목', '금', '토'];

export const DateSlidePickClikerComponent = ({ contentDate }: DateSlidePickClikerProps) => {
  const [isOpenDatePicker, setIsOpenDatePicker] = React.useState(false);
  const [defaultDate, setDefaultDate] = React.useState(contentDate);

  const changeSlide = (btnType: any) => {
    switch (btnType) {
      case 'prev':
        const date2 = defaultDate;
        date2.setDate(defaultDate.getDate() - 1);
        const result2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
        setDefaultDate(result2);
        break;
      case 'next':
        const date3 = defaultDate;
        date3.setDate(defaultDate.getDate() + 1);
        const result3 = new Date(date3.getFullYear(), date3.getMonth(), date3.getDate());
        setDefaultDate(result3);
        break;
    }
  };

  const getDate = (date: Date) => {
    setDefaultDate(date);
  };

  const toggleDatePicker = () => {
    setIsOpenDatePicker(!isOpenDatePicker);
  };
  return (
    <>
      <DatePickerBox>
        <CalendarBtn onClick={toggleDatePicker}>
          <img src={Calendar} alt="" />
        </CalendarBtn>
        <PrevBtn onClick={() => changeSlide('prev')}>
          <img src={LeftChevron} alt="" />
        </PrevBtn>
        <DateContent>
          {`${defaultDate.getFullYear()}년 ${
            defaultDate.getMonth() + 1
          }월 ${defaultDate.getDate()}일`}
          ({week[defaultDate.getDay()]})
        </DateContent>
        <NextBtn onClick={() => changeSlide('next')}>
          <img src={RightChevron} alt="" />
        </NextBtn>
      </DatePickerBox>
      {isOpenDatePicker && (
        <DatepickerComponent
          defaultYear={defaultDate.getFullYear()}
          defaultMonth={defaultDate.getMonth() + 1}
          defaultDate={defaultDate.getDate()}
          setIsOpenDatePicker={setIsOpenDatePicker}
          isOpenDatePicker={isOpenDatePicker}
          getDate={getDate}
        />
      )}
    </>
  );
};

const DatePickerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18.188rem;
  gap: 12px;
  padding: 0.875rem 1rem;
  border-radius: 41px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px var(--dustyblue-30);
  background-color: var(--white);
  img {
    cursor: pointer;
  }
`;

const CalendarBtn = styled.div`
  img {
    cursor: pointer;
  }
`;

const DateContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.25;
  color: var(--ihpblue-50);
  padding-top: 0.2rem;
  padding: 0 0rem;
`;

const PrevBtn = styled.div``;

const NextBtn = styled.div``;

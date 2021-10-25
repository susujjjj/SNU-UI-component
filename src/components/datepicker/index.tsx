import React, { useEffect } from "react";
import styled from "styled-components";
import { H2Bold, Element4Medium, Element4Regular } from "./../../global-style";
import leftArrow from "./../../assets/left-arrow.svg";
import rightArrow from "./../../assets/right-arrow.svg";
import disLeftArrow from "./../../assets/disabled-left-arrow.svg";
import disRightArrow from "./../../assets/disabled-right-arrow.svg";

export interface DatepickerProps {
  defaultYear?: number;
  defaultMonth?: number;
  defaultDate?: number;
  privous?: boolean;
  next?: boolean;
  isOpenDatePicker?: boolean;
  setIsOpenDatePicker?: (isOpenDatePicker: boolean) => void;
  getDate: (date: Date) => void;
}

export const DatepickerComponent = ({
  defaultYear = new Date().getFullYear(),
  defaultMonth = new Date().getMonth() + 1,
  defaultDate = new Date().getDate(),
  privous = true,
  next = true,
  isOpenDatePicker,
  setIsOpenDatePicker,
  getDate,
}: DatepickerProps) => {
  const [date, setDate] = React.useState({
    year: defaultYear,
    month: defaultMonth,
    date: defaultDate,
  });

  const toNext = () => {
    if (date.month === 12) {
      setDate({ year: defaultYear + 1, month: 1, date: 1 });
    } else {
      setDate({ year: defaultYear, month: defaultMonth + 1, date: 1 });
    }
  };

  const toPrivous = () => {
    if (date.month === 1) {
      setDate({ year: defaultYear - 1, month: 12, date: 1 });
    } else {
      setDate({ year: defaultYear, month: defaultMonth - 1, date: 1 });
    }
  };

  const onClickDay = (dateparam: number) => {
    getDate(new Date(`${date.year}-${date.month}-${dateparam}`));
    if (setIsOpenDatePicker) {
      setIsOpenDatePicker(!isOpenDatePicker);
    }
  };

  useEffect(() => {
    getDate(new Date(date.year, date.month - 1, date.date));
  }, [date]);
  //자식의 state값 부모의 state값으로 보내기

  useEffect(() => {
    setDate({ year: defaultYear, month: defaultMonth, date: defaultDate });
  }, [defaultDate]);
  //부모의 값을 자식으로 동기화시킬려고
  // 부모의 state값을 자식의 state값으로 넘기는거고

  return (
    <Datepicker>
      <HeaderWrapper>
        <H2Bold>
          {date.year}년 {date.month}월
        </H2Bold>
        <ArrowWrapper>
          <Arrow disabled={!privous} onClick={toPrivous}>
            {privous ? (
              <img src={leftArrow} alt="" />
            ) : (
              <img src={disLeftArrow} alt="" />
            )}
          </Arrow>
          <Arrow disabled={!next} onClick={toNext}>
            {next ? (
              <img src={rightArrow} alt="" />
            ) : (
              <img src={disRightArrow} alt="" />
            )}
          </Arrow>
        </ArrowWrapper>
      </HeaderWrapper>
      <DayWrapper>
        <DayTitleWrapper>
          {["월", "화", "수", "목", "금", "토", "일"].map((val, idx) => {
            return (
              <DayTitleItem key={idx}>
                <Element4Medium>{val}</Element4Medium>
              </DayTitleItem>
            );
          })}
        </DayTitleWrapper>
        <DayContentWrapper>
          {getMonthDay(date.year, date.month, date.date).map((val, idx) => {
            return (
              <DayItem
                isEnabled={val.isEnabled}
                key={idx}
                check={val.isEnabled && defaultDate === val.date}
                onClick={() => (val.isEnabled ? onClickDay(val.date) : null)}
              >
                <Element4Regular>{val.date}</Element4Regular>
              </DayItem>
            );
          })}
        </DayContentWrapper>
      </DayWrapper>
    </Datepicker>
  );
};

const getMonthDay = (
  defaultYear: number,
  defaultMonth: number,
  defaultDate: number
) => {
  const startDate = new Date(defaultYear, defaultMonth - 1);
  const endDate = new Date(defaultYear, defaultMonth, 0);

  const startDay = startDate.getDay() - 1;
  let endDay = endDate.getDay() - 1;

  if (endDay < 0) endDay = 6;

  startDate.setDate(startDate.getDate() - startDay);
  endDate.setDate(endDate.getDate() + (6 - endDay));

  const dateArr: {
    isEnabled: boolean;
    date: number;
  }[] = [];

  let loop = new Date(startDate);

  while (loop <= endDate) {
    if (defaultMonth !== loop.getMonth() + 1) {
      dateArr.push({
        isEnabled: false,
        date: loop.getDate(),
      });
    } else {
      dateArr.push({
        isEnabled: true,
        date: loop.getDate(),
      });
    }
    const newDate = loop.setDate(loop.getDate() + 1);
    loop = new Date(newDate);
  }
  return dateArr;
};

const Datepicker = styled.div`
  width: 20.5rem;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 18px 1px rgba(0, 0, 0, 0.25);
  background-color: var(--white);
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.375rem;
`;

const ArrowWrapper = styled.div``;

const Arrow = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  background-color: white;
  cursor: ${(props) => (!props.disabled ? "pointer" : "not-allowed")};
  margin-left: 0.25rem;
`;

const DayWrapper = styled.div``;

const DayTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DayTitleItem = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DayContentWrapper = styled.div`
  border-bottom: 1px solid var(--gray-30);
`;

const DayItem = styled.button<{ isEnabled: boolean; check: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--gray-30);
  ${(props) =>
    props.isEnabled
      ? "background-color: var(--white);"
      : "background-color: var(--gray-5);"}
  ${(props) => props.check && "background-color: var(--ihpblue-50) !important;"}
  ${(props) =>
    props.check ? "color: var(--white);" : "color: var(--gray-90);"}
  border-right: none;
  border-bottom: none;
  cursor: ${(props) => (props.isEnabled ? "pointer" : "not-allowed")};
  &:nth-child(7n) {
    border-right: 1px solid var(--gray-30);
  }
  &:hover {
    ${(props) =>
      props.isEnabled
        ? "background-color:var(--ihpblue-50); color: var(--white);"
        : "background-color: var(--gray-5); color: var(--gray-90);"}
  }
`;

import React from 'react';
import styled from 'styled-components';
import ReportInfo from './../../assets/ic-reportinfo.svg';

export interface ReportInfoProps {
  name: string;
  title: string;
  attendanceStatus: string;
}

export const ReportInfoComponent = ({ name, title, attendanceStatus }: ReportInfoProps) => {
  return (
    <ReportInfoWrapper>
      <LeftBox>
        <ReportImgBox>
          <img src={ReportInfo} alt="" />
        </ReportImgBox>
        <ReportInfoBox>
          <Name>{name}</Name>
          <Title>{title}</Title>
        </ReportInfoBox>
      </LeftBox>
      <AttendanceBox>{attendanceStatus}</AttendanceBox>
    </ReportInfoWrapper>
  );
};

const ReportInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 1rem 2rem 1.25rem;
  background-color: var(--dustyblue-5);
`;

const LeftBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ReportImgBox = styled.div`
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  border: solid 1px var(--dustyblue-20);
  background-color: white;
`;

const ReportInfoBox = styled.div`
  display: block;
`;

const Name = styled.div`
  width: 4.375rem;
  height: 1.25rem;
  flex-grow: 0;
  margin: 0.5rem 15.063rem 0.375rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: var(--gray-90);
`;

const Title = styled.div`
  margin: 0.375rem 0 0.625rem 1rem;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: var(--gray-90);
`;

const AttendanceBox = styled.div`
  width: 8.313rem;
  height: 2.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  border-radius: 39px;
  border: solid 1px var(--dustyblue-50);
  background-color: var(--white);
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: center;
  color: var(--gray-80);
`;

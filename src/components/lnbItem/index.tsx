import React from 'react';
import styled from 'styled-components';
import reportDefault from './../../assets/property-2-report-property-3-default.svg';
import reportActive from './../../assets/property-2-report-property-3-active.svg';
import userInfoDefault from './../../assets/property-2-userinfo-property-3-default.svg';
import userInfoActive from './../../assets/property-2-userinfo-property-3-active.svg';
import projectInfoDefault from './../../assets/property-2-projectinfo-property-3-default.svg';
import projectInfoActive from './../../assets/property-2-projectinfo-property-3-active.svg';
import guideDefault from './../../assets/property-2-guide-property-3-default.svg';
import guideActive from './../../assets/property-2-guide-property-3-active.svg';
import { Element1Bold } from '../../global-style';

export interface LnbItemProps {
  isActive?: boolean;
  icon?: 'report' | 'user-info' | 'project-info' | 'guide';
  label: string;
  onClick: () => void;
}

export const LnbItemComponent = ({
  isActive = false,
  icon = 'report',
  label,
  onClick,
}: LnbItemProps) => {
  let iconTemp = reportDefault;
  switch (icon) {
    case 'report':
      iconTemp = isActive ? reportActive : reportDefault;
      break;
    case 'user-info':
      iconTemp = isActive ? userInfoActive : userInfoDefault;
      break;
    case 'project-info':
      iconTemp = isActive ? projectInfoActive : projectInfoDefault;
      break;
    case 'guide':
      iconTemp = isActive ? guideActive : guideDefault;
      break;
  }

  return (
    <LnbItem onClick={onClick} isActive={isActive}>
      <LnbItemWrapper>
        <Logo src={iconTemp} />
        <Element1Bold>{label}</Element1Bold>
      </LnbItemWrapper>
    </LnbItem>
  );
};

const LnbItem = styled.div<{ isActive: boolean }>`
  width: 16rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isActive ? 'var(--dustyblue-10)' : 'var(--white)')};
  color: ${(props) => (props.isActive ? 'var(--ihpblue-50)' : 'var(--gray-80)')};
  border-left: 0.25rem solid ${(props) => (props.isActive ? 'var(--ihpblue-50)' : 'var(--white)')};
  cursor: pointer;
  &:hover {
    background-color: var(--dustyblue-10);
    color: var(--ihpblue-50);
    border-color: var(--ihpblue-50);
  }
`;

const LnbItemWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 2rem;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.img`
  margin-right: 1.122rem;
`;

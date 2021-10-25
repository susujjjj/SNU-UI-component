import React from 'react';
import styled from 'styled-components';
import logo from './../../assets/img-logo-white.svg';
import { ButtonComponent } from './../button';

export interface HeaderProps {
  onLogout: () => void;
}

export const HeaderComponent = ({ onLogout }: HeaderProps) => {
  return (
    <Header>
      <HeaderWrapper>
        <img src={logo} alt="" />
        <ButtonComponent primary={true} size="40" onClick={onLogout} label="로그아웃" />
      </HeaderWrapper>
    </Header>
  );
};

const Header = styled.div`
  width: 100%;
  height: 4.5rem;
  background-color: var(--ihpblue-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

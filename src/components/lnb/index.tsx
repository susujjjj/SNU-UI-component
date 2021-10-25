import React from 'react';
import styled from 'styled-components';
import { LnbItemComponent, LnbItemProps } from './../lnbItem';

export interface LnbProps {
  lnbItems: LnbItemProps[];
}

export const LnbComponent = ({ lnbItems }: LnbProps) => {
  return (
    <Lnb>
      {lnbItems.map((val, idx) => {
        return (
          <LnbItemComponent
            key={idx}
            isActive={val.isActive}
            icon={val.icon}
            label={val.label}
            onClick={val.onClick}
          />
        );
      })}
    </Lnb>
  );
};

const Lnb = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 16rem;
  height: 100%;
  padding-top: 0.25rem;
  background-color: var(--white);
`;

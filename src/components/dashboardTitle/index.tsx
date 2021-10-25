import React, { useState, useRef, Children } from 'react';
import styled from 'styled-components';
import InfoIcon from './../../assets/ic-information-16.svg';
import { TooltipComponent } from './../tooltip';

export interface BasedateProps {
  children: any;
  title: string;
  label: string;
}

export const DashboardTitleComponent = ({ children, title }: BasedateProps) => {
  const [isHoverTooltip, setIsHoverTooltip] = React.useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef(null);
  const showTooltip = isHovered || isFocused;

  return (
    <TitleWrapper>
      <TitleBox>
        <Title>{title}</Title>
        <ImgBox>
          <img
            src={InfoIcon}
            alt=""
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            ref={targetRef}
          />
          {showTooltip && (
            <TooltipComponent arrowX="right" arrowY="bottom" label="text">
              {children}
            </TooltipComponent>
          )}
        </ImgBox>
      </TitleBox>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 46rem;
  height: 3rem;
  padding: 0.875rem 0 0;
  border-bottom: 1px solid var(--dustyblue-40);
`;

const ImgBox = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 1.042rem;
  cursor: pointer;
  img {
    width: 100%;
    width: 1rem;
    height: 1rem;
    margin-right: 1.042rem;
    cursor: pointer;
    &:hover {
    }
  }
`;

const Title = styled.span`
  margin: 0 0 0.813rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.25;
  text-align: left;
  color: var(--gray-80);
`;
const TooltipTarget = styled.div``;

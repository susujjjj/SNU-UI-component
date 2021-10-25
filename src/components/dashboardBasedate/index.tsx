import React, { useState, useRef, Children } from 'react';
import styled from 'styled-components';
import InfoIcon from './../../assets/ic-information-16.svg';
import { TooltipComponent } from './../tooltip';

export interface BasedateProps {
  children: any;
  title: string;
  content: string;
}

export const BasedateComponent = ({ children, title, content }: BasedateProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef(null);
  const showTooltip = isHovered || isFocused;

  return (
    <BaseDateWrapper>
      <BaseDate>
        <TitleBox>{title} </TitleBox>
        <ContentBox>{content}</ContentBox>
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
      </BaseDate>
    </BaseDateWrapper>
  );
};

const BaseDateWrapper = styled.div`
  display: flex;
`;

const BaseDate = styled.div`
  width: 15.938rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 2rem;
  gap: 4px;
  padding: 0.438rem 0.75rem;
  border-radius: 8px;
  background-color: var(--dustyblue-20);
`;

const TitleBox = styled.div`
  width: 3.8rem;
  height: 0.875rem;
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1.17;
  text-align: left;
  color: var(--gray-80);
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 0;
  font-size: 0.875rem;
  line-height: 1.29;
  text-align: left;
  color: var(--gray-60);
`;

const ImgBox = styled.div`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  img {
    width: 100%;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    &:hover {
    }
  }
`;

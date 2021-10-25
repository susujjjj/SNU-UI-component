import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Element4Medium } from './../../global-style';

export interface TooltipProps {
  children: any;
  label: string;
  arrowX: 'left' | 'center' | 'right';
  arrowY: 'top' | 'bottom';
}

export const TooltipComponent = ({ label, arrowX, arrowY }: TooltipProps) => {
  return (
    <Tooltip arrowX={arrowX} arrowY={arrowY}>
      <Element4Medium>{label}</Element4Medium>
    </Tooltip>
  );
};

const Tooltip = styled.div<{ arrowX: string; arrowY: string }>`
  height: 2.5rem;
  background-color: #000;
  display: inline-flex;
  align-items: center;
  margin: 0.5rem 0 0 -1.4rem;
  padding: 0 1rem;
  opacity: 0.8;
  text-align: ${(props) => props.arrowX};
  color: white;
  border-radius: 0.5rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    ${(props) => getArrow(props.arrowX, props.arrowY)}
  }
`;

const getArrow = (arrowX: string, arrowY: string) => {
  let css = ``;
  switch (arrowY) {
    case 'top':
      css += `
      bottom: -10px;
      border-top: 10px solid #000;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 0px solid transparent;
      `;
      break;
    case 'bottom':
      css += `
      top: -10px;
      border-top: 0px solid transparent;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #000;
      `;
      break;
  }

  switch (arrowX) {
    case 'left':
      css += `
        left: 0.75rem;
      `;
      break;
    case 'right':
      css += `
        right: 0.75rem;
      `;
      break;
    case 'center':
      css += `
        left: calc(50% - 10px);
      `;
      break;
  }

  return css;
};

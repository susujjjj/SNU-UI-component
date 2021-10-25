import React from 'react';
import styled from 'styled-components';
import { Element1Medium, Element3Medium } from './../../global-style';

export interface ButtonProps {
  primary?: boolean;
  size: '24' | '40' | '56';
  label: string;
  iconLocation?: 'none' | 'left' | 'right' | 'side';
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const ButtonComponent = ({
  primary = false,
  size = '24',
  label,
  leftIcon,
  rightIcon,
  iconLocation = 'none',
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <Button type="button" primary={primary} size={size} disabled={disabled} onClick={onClick}>
      {iconLocation === 'left' || iconLocation === 'side' ? (
        <LeftIcon src={leftIcon} size={size} />
      ) : null}
      {size === '56' ? (
        <Element1Medium>{label}</Element1Medium>
      ) : (
        <Element3Medium>{label}</Element3Medium>
      )}
      {iconLocation === 'right' || iconLocation === 'side' ? (
        <RightIcon src={rightIcon} size={size} />
      ) : null}
    </Button>
  );
};

const Button = styled.button<{ primary: boolean; size: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.size + 'px'};
  color: ${(props) => (props.primary ? 'var(--white)' : 'var(--gray-70)')};
  background-color: ${(props) => (props.primary ? 'var(--ihpblue-50)' : 'var(--white)')};
  border-radius: 4px;
  padding: 0 1rem;
  border: solid 1px ${(props) => (props.primary ? 'var(--ihpblue-50)' : 'var(--dustyblue-70)')};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.primary ? 'var(--ihpblue-40)' : 'var(--gray-10)')};
    border: solid 1px ${(props) => (props.primary ? 'var(--ihpblue-40)' : 'var(--dustyblue-80)')};
  }
  &:disabled {
    background-color: ${(props) => (props.primary ? 'var(--dustyblue-50)' : 'var(--white)')};
    border: solid 1px ${(props) => (props.primary ? 'var(--dustyblue-50)' : 'var(--dustyblue-40)')};
  }
`;

const LeftIcon = styled.img<{ size: string }>`
  width: ${(props) => (props.size === '56' ? '1.042rem' : '0.833rem')};
  margin-right: 0.479rem;
`;

const RightIcon = styled.img<{ size: string }>`
  width: ${(props) => (props.size === '56' ? '1.042rem' : '0.833rem')};
  margin-left: 0.479rem;
`;

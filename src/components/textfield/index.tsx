import React from 'react';
import styled from 'styled-components';
import IcView from './../../assets/ic-view.svg';
import IcClose from './../../assets/ic.svg';
import IcViewActive from './../../assets/active-ic-view.svg';

export interface TextFieldProps {
  type: 'text' | 'password';
  value: string;
  placeholder?: string;
}

export const TextFieldComponent = ({ type = 'text', value, placeholder }: TextFieldProps) => {
  const [color, setColor] = React.useState('#606060');
  const [view, setView] = React.useState(false);
  const [textValue, setTextValue] = React.useState(value);

  const clickClose = () => {
    setTextValue('');
  };

  return (
    <TextFieldWrapper>
      <TextField
        type={view ? 'text' : type}
        value={textValue}
        placeholder={placeholder}
        view={view}
        onFocus={() => setColor('#000')}
        onBlur={() => setColor('#606060')}
        onChange={(e) => setTextValue(e.target.value)}
      />
      {type === 'password' && textValue?.length > 0 ? (
        <ViewButton onClick={() => setView(!view)}>
          <ViewImg src={IcViewActive} color={color} width="20" alt="" />
        </ViewButton>
      ) : null}
      {type === 'text' && textValue?.length > 0 ? (
        <ViewButton>
          <ViewImg src={IcClose} color={color} width="20" alt="" onClick={clickClose} />
        </ViewButton>
      ) : null}
    </TextFieldWrapper>
  );
};

const TextFieldWrapper = styled.div`
  width: 21.875rem;
  position: relative;
`;

const TextField = styled.input<{ view: boolean }>`
  width: 100%;
  height: 3.5rem;
  padding: 1.125rem 1rem;
  border-radius: 8px;
  border: solid 1px var(--dustyblue-80);
  background-color: var(--white);
  color: var(--gray-90);
  font-size: 1rem;
  caret-color: var(--ihpblue-50);
  ::placeholder {
    color: var(--gray-40);
  }
  &:hover {
    border-color: var(--dustyblue-50);
    color: var(--gray-40);
  }
  &:focus {
    outline: none;
    border-color: var(--ihpblue-50);
    color: var(--gray-90);
  }
`;

const ViewButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  right: 1.095rem;
  top: 1.08rem;
  padding: 0;
  cursor: pointer;
`;

const ViewImg = styled.img`
  --color-fill: ${(props) => props.color};
`;

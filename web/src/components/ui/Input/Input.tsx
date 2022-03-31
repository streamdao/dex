import React, { FC, InputHTMLAttributes, useState } from 'react';

import { styled } from '@linaria/react';
import classNames from 'classnames';

const Somefix = styled.div`
  min-width: 70px;

  color: #999999;
  font-family: Titillium Web, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;

  &.left {
    text-align: left;
  }

  &.right {
    text-align: right;
  }
`;

const WrapperLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 56px;
  padding: 0 20px;

  background: #fbfbfd;
  border-radius: 12px;

  &.isFocus {
    background: #fbfbfd;
    border: 1px solid #557783;

    ${Somefix} {
      color: #000000;
    }
  }
`;

const InputElement = styled.input`
  height: 100%;
  width: auto;
  padding: 0 20px;

  color: #999999;
  font-family: Titillium Web, sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  text-align: center;

  outline: 0;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    color: #557783;
  }
`;

interface Props {
  prefix: string;
  postfix: string;
}

export const Input: FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({
  prefix,
  postfix,
  placeholder,
  value,
  onChange,
  style,
  className,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <WrapperLabel style={style} className={classNames(className, { isFocus })}>
      <Somefix className={classNames({ left: true })}>{prefix}</Somefix>
      <InputElement
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Somefix className={classNames({ right: true })}>{postfix}</Somefix>
    </WrapperLabel>
  );
};

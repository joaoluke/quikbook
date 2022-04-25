/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import * as Style from './style';

interface InputProps {
  placeholder: string;
  icon: IconDefinition;
  type: string;
  value: string;
  id: string;
  onChange: (e: HTMLInputElement) => void;
}

export const InputComponent: React.FC<InputProps> = ({
  placeholder,
  icon,
  type,
  value,
  id,
  onChange,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const changeVisiblePassword = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Style.Container>
      <Style.ContainerInput>
        <Style.Icon icon={icon} />
        {type === 'password' ? (
          <Style.Input
            value={value}
            onChange={(e) => onChange(e.target)}
            placeholder={placeholder}
            id={id}
            type={isVisible ? 'text' : 'password'}
          />
        ) : (
          <Style.Input
            value={value}
            onChange={(e: any) => onChange(e.target)}
            placeholder={placeholder}
            id={id}
          />
        )}
        {type === 'password' && (
          <Style.IconPassword
            onClick={changeVisiblePassword}
            icon={isVisible ? faEye : faEyeSlash}
          />
        )}
      </Style.ContainerInput>
    </Style.Container>
  );
};

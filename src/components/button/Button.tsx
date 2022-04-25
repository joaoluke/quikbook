import React from 'react';
import * as Style from './style';

interface InputProps {
  title: string;
  color: string;
  onClick: () => void;
  width?: string;
}

export const ButtonComponent: React.FC<InputProps> = ({
  title,
  color,
  onClick,
  width,
}) => (
  <Style.Container width={width}>
    <Style.ContainerButton onClick={onClick} background={color}>
      {title}
    </Style.ContainerButton>
  </Style.Container>
);

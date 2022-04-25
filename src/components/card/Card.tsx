import React, { ReactNode } from 'react';

import * as Style from './style';

interface CardProps {
  title: string;
  children: ReactNode;
}

export const CardComponent: React.FC<CardProps> = ({ children, title }) => (
  <Style.Container>
    <h2 className="title">{title}</h2>
    {children}
  </Style.Container>
);

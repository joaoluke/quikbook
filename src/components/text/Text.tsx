import React from 'react';

import * as Style from './style';

interface TextProps {
  children: string;
  color?: string;
  padding?: string;
  fontSize?: string;
}

export const TextComponent: React.FC<TextProps> = ({
  children, color, padding, fontSize,
}) => (
  <Style.Container color={color} fontSize={fontSize} padding={padding}>{children}</Style.Container>
);

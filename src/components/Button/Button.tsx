import React from 'react';

import { Button as StyledButton } from './styles';

type ButtonProps = {
  as?: string;
  primary?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

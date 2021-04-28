import styled, { css } from 'styled-components';

type ButtonProps = {
  primary?: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  font-weight: bold;

  ${(props) =>
    props.primary &&
    css`
      background: #61dafb;
      border-color: #61dafb;
      color: #303030;
    `}
`;

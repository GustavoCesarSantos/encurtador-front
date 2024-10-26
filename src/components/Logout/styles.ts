import styled from 'styled-components';

import { colors } from '../../shared/colors';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = styled.button<ButtonProps>`
  background-color: ${colors.primary};
  color: ${colors.buttonText};
  padding: 12px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: ${colors.primary};
  }
`;

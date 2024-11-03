import styled from 'styled-components';

import { colors } from '../../shared/colors';

export const HeaderContainer = styled.header`
  background-color: ${colors.headerBackgroundColorMain};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  color: #0056D2;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Logo = styled.h4`
    color: ${colors.buttonText};
    cursor: context-menu;
    margin-left: 1rem;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
`;

export const DividerContainer = styled.span`
  margin: 0 0.75rem; 
  color: ${colors.buttonText}; 
  font-size: 0.8rem;
  font-weight: 300; 
  user-select: none; 
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const LoginButton = styled.button<ButtonProps>`
  background: transparent;
  color: ${colors.buttonText};
  padding: 12px;
  font-size: 0.8rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: ${colors.headerButtonColorHoover};
  }
`;

export const LogoutButton = styled.button<ButtonProps>`
  background: transparent;
  color: ${colors.buttonText};
  padding: 12px;
  font-size: 0.8rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: ${colors.headerButtonColorHoover};
  }
`;

export const RegisterButton = styled.button<ButtonProps>`
  background: transparent;
  color: ${colors.buttonText};
  padding: 12px;
  font-size: 0.8rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: ${colors.headerButtonColorHoover};
  }
`;

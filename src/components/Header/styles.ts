import styled from 'styled-components';

import { colors } from '../../shared/colors';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
    color: #0056D2;
  position: fixed;
  top: 0;
  width: 100%;
    border-bottom: 2px solid #0056D2;;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
    color: #0056D2;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

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
    transition: background-color 0.3s;

    &:hover {
        background-color: #0062C4;
    }
`;

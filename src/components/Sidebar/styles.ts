// components/Sidebar/styles.ts
import styled from 'styled-components';
import { colors } from '../../shared/colors';

interface ContainerProps {
    isOpen: boolean;
}

interface SidebarContentProps {
    isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transition: background-color 0.3s;
  pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
  background-color: ${(props) => (props.isOpen ? 'rgba(0, 0, 0, 0.5)' : 'transparent')};
  z-index: 999;
`;

export const SidebarContent = styled.div<SidebarContentProps>`
  position: fixed;
  height: 100%;
  width: 250px;
  top: 0;
  left: 0;
  background-color: ${colors.headerBackgroundColorMain};
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  padding: 20px;
`;

export const MenuButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;

  span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: #333;
    transition: all 0.3s;
  }

  &:hover span {
    background-color: #666;
  }
`;

export const MenuItem = styled.a`
  display: block;
  padding: 15px 0;
  color: ${colors.buttonText};
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s;

  &:hover {
    color: ${colors.headerButtonColorHoover};
  }

  svg {
    margin-right: 10px;
    vertical-align: middle;
  }
`;

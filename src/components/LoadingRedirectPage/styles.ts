import styled, { keyframes } from 'styled-components';

import { colors } from '../../shared/colors';

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${colors.backgroundMain};
`;

export const Card = styled.div`
  max-width: 28rem;
  width: 100%;
  background: white;
  border-radius: 6px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const LinkIcon = styled.svg`
  width: 4rem;
  height: 4rem;
  color: #3b82f6;
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

export const ContentContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333333;
`;

export const Message = styled.p`
  font-weight: bold;
  color: #608BC1;
`;

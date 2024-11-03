import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: linear-gradient(to bottom right, #eff6ff, #e0e7ff);
`;

export const Card = styled.div`
  max-width: 28rem;
  width: 100%;
  background: white;
  border-radius: 0.75rem;
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

export const ArrowIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  color: #6366f1;
  position: absolute;
  right: -1rem;
  top: 1rem;
  animation: ${bounce} 1s infinite;
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
  color: #1f2937;
`;

export const Message = styled.p`
  color: #4b5563;
`;

export const Hint = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
  font-style: italic;
  text-align: center;
`;

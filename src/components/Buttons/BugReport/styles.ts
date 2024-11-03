import styled from 'styled-components';

export const BugButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s;

  /* Posicionamento fixo */
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  
  /* Visual */
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  /* Animação de entrada */
  @keyframes slideIn {
    from {
      transform: translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  animation: slideIn 0.3s ease-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 380px) {
    bottom: 10px;
    right: 10px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    width: 95%;
    padding: 16px;
  }
`;

export const ModalTitle = styled.h2`
  margin: 0 0 16px 0;
  font-size: 20px;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const CharCount = styled.span<{ isNearLimit: boolean }>`
  font-size: 12px;
  color: ${(props) => (props.isNearLimit ? '#dc3545' : '#6c757d')};
  text-align: right;
  margin-top: 4px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  background-color: ${(props) => (props.variant === 'primary' ? '#133e87' : '#6c757d')};
  color: white;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

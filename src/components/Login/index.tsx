import React from 'react';

import { AuthForm } from '../AuthForm';
import { variables } from '../../shared/variables';
import { ModalContainer, ModalContent } from './styles';
import { AuthService } from '../../shared/services/authService';

type LoginForm = { email: string; password: string };

type ModalProps = {
    onLogin: () => void;
    onClose: () => void;
};

export const Login: React.FC<ModalProps> = ({ onLogin, onClose }) => {
    const handleLogin = async (formData: LoginForm) => {
        fetch(`${variables.apiUrl}/auth/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                AuthService.setTokens(data);
                onLogin();
                onClose();
            })
            .catch((error) => console.error(error));
    };

    return (
        <ModalContainer onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <h1 id="login">Entre na sua Conta</h1>
                <AuthForm onSubmit={handleLogin} />
            </ModalContent>
        </ModalContainer>
    );
};
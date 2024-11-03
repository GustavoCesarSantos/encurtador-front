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
        try {
            const response = await fetch(`${variables.apiUrl}/auth/signin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.status === 429) throw new Error('Too many request');
            if (!response.ok) throw new Error('Failed to fetch login');
            const data = await response.json();
            AuthService.setTokens(data);
            onLogin();
            onClose();
        } catch (error) {
            console.error('Request failed', error);
        }
    };

    return (
        <ModalContainer onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <AuthForm onSubmit={handleLogin} />
            </ModalContent>
        </ModalContainer>
    );
};

import React, { useState } from 'react';

import { AuthForm } from '../AuthForm';
import { variables } from '../../shared/variables';
import { ModalContainer, ModalContent } from './styles';
import { AuthService } from '../../shared/services/authService';
import { Notification } from '../../shared/components/Notification';

type LoginForm = { email: string; password: string };

type ModalProps = {
    onLogin: () => void;
    onClose: () => void;
};

export const Login: React.FC<ModalProps> = ({ onLogin, onClose }) => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const closeNotification = () => setError(null);

    const handleLogin = async (formData: LoginForm) => {
        try {
            setLoading(true);
            const response = await fetch(`${variables.apiUrl}/auth/signin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.status === 429) {
                const error = 'Failed to request, try again';
                setError(error);
                throw new Error('Too many request');
            }
            if (response.status === 400) {
                const error = 'Invalid Credentials';
                setError(error);
                throw new Error('Too many request');
            }
            if (!response.ok) {
                const error = 'Failed to fetch login';
                setError(error);
                throw new Error(error);
            }
            const data = await response.json();
            AuthService.setTokens(data);
            setLoading(false);
            onLogin();
            onClose();
        } catch (error) {
            setError((error as Error).message);
            setLoading(false);
            console.error('Request failed', error);
        }
    };

    return (
        <ModalContainer onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <AuthForm onSubmit={handleLogin} isLoading={isLoading} />
            </ModalContent>
            {error && <Notification message={error} onClose={closeNotification} />}
        </ModalContainer>
    );
};

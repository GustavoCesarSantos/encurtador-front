import React, { useState } from 'react';

import { AuthForm } from '../AuthForm';
import { variables } from '../../shared/variables';
import { ModalContainer, ModalContent } from './styles';
import { Notification } from '../../shared/components/Notification';

type RegisterUserForm = { name?: string; email: string; password: string };

type ModalProps = {
    onClose: () => void;
};

export const RegisterUser: React.FC<ModalProps> = ({ onClose }) => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const closeNotification = () => setError(null);

    const handleRegister = async (formData: RegisterUserForm) => {
        try {
            setLoading(true);
            const response = await fetch(`${variables.apiUrl}/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.status === 429) {
                const error = 'Failed to request, try again';
                setError(error);
                throw new Error('Too many request');
            }
            if (!response.ok) {
                const error = 'Failed to fetch user register';
                setError(error);
                throw new Error(error);
            }
            onClose();
        } catch (error) {
            setError((error as Error).message);
            console.error('Request failed', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ModalContainer onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <AuthForm onSubmit={handleRegister} isRegister isLoading={isLoading} />
            </ModalContent>
            {error && <Notification message={error} onClose={closeNotification} />}
        </ModalContainer>
    );
};

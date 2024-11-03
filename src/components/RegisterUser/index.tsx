import React from 'react';

import { AuthForm } from '../AuthForm';
import { variables } from '../../shared/variables';
import { ModalContainer, ModalContent } from './styles';

type RegisterUserForm = { name?: string; email: string; password: string };

type ModalProps = {
    onClose: () => void;
};

export const RegisterUser: React.FC<ModalProps> = ({ onClose }) => {
    const handleRegister = async (formData: RegisterUserForm) => {
        fetch(`${variables.apiUrl}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then(() => onClose())
            .catch((error) => console.error(error));
    };

    return (
        <ModalContainer onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <AuthForm onSubmit={handleRegister} isRegister />
            </ModalContent>
        </ModalContainer>
    );
};

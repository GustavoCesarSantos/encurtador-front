import React from 'react';

import { AuthForm } from '../AuthForm';
import { variables } from '../../shared/variables';

type RegisterUserForm = { name: string; email: string; password: string };

export const Register: React.FC = () => {
    const handleRegister = async (formData: RegisterUserForm) => {
        fetch(`${variables.apiUrl}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then()
            .catch((error) => console.error(error));
    };

    return (
        <div aria-labelledby="register">
            <h1 id="register">Crie sua Conta</h1>
            <AuthForm onSubmit={handleRegister} isRegister />
        </div>
    );
};

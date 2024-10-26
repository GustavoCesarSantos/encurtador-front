import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthForm } from '../AuthForm';
import { variables } from '../../shared/variables';

type LoginForm = { email: string; password: string };

export const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => navigate('/');

    const handleLogin = async (formData: LoginForm) => {
        fetch(`${variables.apiUrl}/auth/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('token', data.accessToken);
                handleLoginClick();
            })
            .catch((error) => console.error(error));
    };

    return (
        <div aria-labelledby="login">
            <h1 id="login">Entre na sua Conta</h1>
            <AuthForm onSubmit={handleLogin} />
        </div>
    );
};

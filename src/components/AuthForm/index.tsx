import { Loader } from 'lucide-react';
import React, { useState } from 'react';

import { Button, Input } from './styles';

interface AuthFormProps {
    onSubmit: (formData: { name?: string; email: string; password: string }) => void;
    isRegister?: boolean;
    isLoading: boolean;
}

export const AuthForm: React.FC<AuthFormProps> = ({
    onSubmit,
    isRegister = false,
    isLoading = false,
}) => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} aria-label={isRegister ? 'Cadastro' : 'Login'}>
            {isRegister && (
                <Input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-label="Nome"
                />
            )}
            <Input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="E-mail"
            />
            <Input
                type="password"
                name="password"
                placeholder="Senha"
                value={formData.password}
                onChange={handleChange}
                required
                aria-label="Senha"
            />
            <Button type="submit">
                {isLoading ? <Loader /> : isRegister ? 'Cadastrar' : 'Entrar'}
            </Button>
        </form>
    );
};

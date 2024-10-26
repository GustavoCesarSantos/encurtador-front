import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from './styles';
import { variables } from '../../shared/variables';

export const LogoutButton: React.FC = () => {
    const handleLogout = async () => {
        const navigate = useNavigate();
        const handleLogout = () => navigate('/login');
        const token = localStorage.getItem('token');

        fetch(`${variables.apiUrl}/auth/signout`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(() => handleLogout())
            .catch((error) => console.error(error));
    };

    return <Button onClick={handleLogout}>Sair</Button>;
};

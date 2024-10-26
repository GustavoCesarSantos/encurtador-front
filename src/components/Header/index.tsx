import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, HeaderContainer, Logo, Nav } from './styles';

interface HeaderProps {
    isLoggedIn: boolean;
    onLogoutClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogoutClick }) => {
    const navigate = useNavigate();

    const handleLoginClick = () => navigate('/login');
    const handleRegisterClick = () => navigate('/register');

    return (
        <HeaderContainer>
            <Logo>URL Encurtador</Logo>
            <Nav>
                {isLoggedIn ? (
                    <Button onClick={onLogoutClick}>Logout</Button>
                ) : (
                    <>
                        <Button onClick={handleLoginClick}>Login</Button>
                        <Button onClick={handleRegisterClick}>Cadastro</Button>
                    </>
                )}
            </Nav>
        </HeaderContainer>
    );
};

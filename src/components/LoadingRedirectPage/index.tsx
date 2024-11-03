import React, { useEffect, useState } from 'react';

import {
    Container,
    Card,
    IconContainer,
    LinkIcon,
    ArrowIcon,
    ContentContainer,
    Title,
    Message,
    Hint,
} from './styles';

export const LoadingRedirectPage = () => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const dotsInterval = setInterval(() => {
            setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
        }, 500);

        return () => clearInterval(dotsInterval);
    }, []);

    return (
        <Container>
            <Card>
                <IconContainer>
                    <LinkIcon
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </LinkIcon>
                    <ArrowIcon
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </ArrowIcon>
                </IconContainer>

                <ContentContainer>
                    <Title>Redirecionando você{dots}</Title>
                    <Message>Estamos preparando seu redirecionamento para o destino final</Message>
                </ContentContainer>

                <Hint>Você será redirecionado automaticamente em alguns instantes...</Hint>
            </Card>
        </Container>
    );
};

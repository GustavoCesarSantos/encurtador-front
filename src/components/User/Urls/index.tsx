import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ExternalLink, Eye } from 'lucide-react';

import {
    Container,
    CounterWrapper,
    ErrorMessage,
    Link,
    LoadingMessage,
    Table,
    Td,
    Th,
    Title,
    TitleContainer,
} from './styles';
import { variables } from '../../../shared/variables';
import { AuthService } from '../../../shared/services/authService';

interface UrlData {
    originalUrl: string;
    code: string;
    accessCounter: number;
    lastAccess: string;
    createdAt: string;
}

export const UrlList: React.FC = () => {
    const [urls, setUrls] = useState<UrlData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchWithAuth = async () => {
        const { accessToken } = AuthService.getTokens();
        const url = `${variables.apiUrl}/shortenedUrls`;
        const requestOptions = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        };
        return await fetch(url, requestOptions);
    };

    useEffect(() => {
        const fetchUrls = async () => {
            try {
                let response = await fetchWithAuth();
                if (response.status === 429) throw new Error('Too many request');
                if (response.status === 401) {
                    const refreshSuccess = await AuthService.refreshToken();
                    if (!refreshSuccess) {
                        window.location.href = '/';
                        throw new Error('Session expired');
                    }
                    response = await fetchWithAuth();
                }
                if (!response.ok) throw new Error('Failed to fetch short url');
                const data = await response.json();
                setUrls(data);
                setError(null);
            } catch (err) {
                setError('Erro ao carregar as URLs. Por favor, tente novamente mais tarde.');
                console.error('Erro ao buscar URLs:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchUrls();
    }, []);

    const formatDate = (dateString: string) => {
        try {
            // eslint-disable-next-line quotes
            return format(new Date(dateString), 'dd/MM/yyyy HH:mm', {
                locale: ptBR,
            });
        } catch (err) {
            return 'Data inválida';
        }
    };

    if (loading) {
        return <LoadingMessage>Carregando URLs...</LoadingMessage>;
    }

    if (error) {
        return <ErrorMessage>{error}</ErrorMessage>;
    }

    return (
        <Container>
            <TitleContainer>
                <Title>URLs Encurtadas</Title>
            </TitleContainer>
            <Table>
                <thead>
                    <tr>
                        <Th>URL Original</Th>
                        <Th>URL Encurtada</Th>
                        <Th>Acessos</Th>
                        <Th>Último Acesso</Th>
                        <Th>Data de Criação</Th>
                    </tr>
                </thead>
                <tbody>
                    {urls.map((url, index) => (
                        <tr key={index}>
                            <Td>
                                <Link
                                    href={url.originalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {url.originalUrl.length > 50
                                        ? url.originalUrl.substring(0, 50) + '...'
                                        : url.originalUrl}
                                    <ExternalLink size={16} />
                                </Link>
                            </Td>
                            <Td>
                                <Link
                                    href={`${variables.domainUrl}/${url.code}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {`${variables.domainUrl}/${url.code}`}
                                    <ExternalLink size={16} />
                                </Link>
                            </Td>
                            <Td>
                                <CounterWrapper>
                                    <Eye size={16} />
                                    {url.accessCounter}
                                </CounterWrapper>
                            </Td>
                            <Td>
                                {url.lastAccess ? formatDate(url.lastAccess) : 'Nunca acessado'}
                            </Td>
                            <Td>{formatDate(url.createdAt)}</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

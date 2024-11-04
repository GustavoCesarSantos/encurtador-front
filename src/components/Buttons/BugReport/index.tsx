import React, { useState } from 'react';
import { Bug } from 'lucide-react';

import {
    BugButton,
    Button,
    ButtonGroup,
    CharCount,
    Form,
    FormGroup,
    Input,
    ModalContent,
    ModalOverlay,
    ModalTitle,
    TextArea,
} from './styles';
import { variables } from '../../../shared/variables';

interface BugReportData {
    email: string;
    description: string;
}

export const BugReportButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const bugReport: BugReportData = {
                email,
                description,
            };
            const url = `${variables.apiUrl}/bugReports`;
            const requestOptions = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bugReport),
            };
            const response = await fetch(url, requestOptions);
            if (response.status === 429) throw new Error('Too many request');
            if (!response.ok) throw new Error('Failed to fetch short url');
            setEmail('');
            setDescription('');
            setIsOpen(false);
        } catch (error) {
            console.error('Request failed', error);
        }
    };

    const remainingChars = 250 - description.length;
    const isNearLimit = remainingChars <= 50;

    return (
        <>
            <BugButton onClick={() => setIsOpen(true)} title="Reportar bug">
                <Bug size={24} />
            </BugButton>

            {isOpen && (
                <ModalOverlay onClick={() => setIsOpen(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <ModalTitle>Reportar Bug</ModalTitle>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Input
                                    type="email"
                                    placeholder="Seu e-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextArea
                                    placeholder="Descreva o bug encontrado"
                                    value={description}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 250) {
                                            setDescription(e.target.value);
                                        }
                                    }}
                                    required
                                />
                                <CharCount isNearLimit={isNearLimit}>
                                    {remainingChars} caracteres restantes
                                </CharCount>
                            </FormGroup>
                            <ButtonGroup>
                                <Button type="button" onClick={() => setIsOpen(false)}>
                                    Cancelar
                                </Button>
                                <Button type="submit" variant="primary">
                                    Enviar
                                </Button>
                            </ButtonGroup>
                        </Form>
                    </ModalContent>
                </ModalOverlay>
            )}
        </>
    );
};

import { useState } from 'react';

import { ButtonWrapper, FloatingButton, Tooltip } from './styles';

type ButtonProps = {
    textToCopy: string;
};

export const FloatingCopyButton = ({ textToCopy }: ButtonProps) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error('Falha ao copiar:', err);
            return false;
        }
    };

    const handleCopy = async () => {
        const success = await copyToClipboard(textToCopy);
        if (success) {
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 2000);
        }
    };

    return (
        <ButtonWrapper>
            <FloatingButton onClick={handleCopy}>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
            </FloatingButton>
            {showTooltip && <Tooltip>Copiado!</Tooltip>}
        </ButtonWrapper>
    );
};

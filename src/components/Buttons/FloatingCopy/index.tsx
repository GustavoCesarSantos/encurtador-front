import { Copy } from 'lucide-react';
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
                <Copy size={24} />
            </FloatingButton>
            {showTooltip && <Tooltip>Copiado!</Tooltip>}
        </ButtonWrapper>
    );
};

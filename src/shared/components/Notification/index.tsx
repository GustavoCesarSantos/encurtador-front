import React, { useEffect } from 'react';

import { NotificationWrapper } from './styles';

interface NotificationProps {
    message: string;
    onClose: () => void;
}

export const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return <NotificationWrapper>{message}</NotificationWrapper>;
};

import React, { useState } from 'react';
import { AppWindow, ChartLine, Link } from 'lucide-react';

import { Container, SidebarContent, MenuButton, MenuItem } from './styles';

export const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <>
            <MenuButton onClick={toggleSidebar}>
                <span></span>
                <span></span>
                <span></span>
            </MenuButton>

            <Container isOpen={isOpen} onClick={closeSidebar}>
                <SidebarContent isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
                    <MenuItem href="/">
                        <AppWindow size={18} />
                        Dashboard
                    </MenuItem>
                    {/* <MenuItem href="/user/insight">
                        <ChartLine size={18} />
                        Insights
                    </MenuItem> */}
                    <MenuItem href="/user/urls">
                        <Link size={18} />
                        URLs
                    </MenuItem>
                </SidebarContent>
            </Container>
        </>
    );
};

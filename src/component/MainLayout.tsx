import React from 'react';
import TopBar from './TopBar/TopBar';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
    return (
        <>
            <TopBar />
            <main style={{ padding: '2rem' }}>
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;

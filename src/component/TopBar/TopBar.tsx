import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.scss';

const TopBar: React.FC = () => {
    return (
        <nav className="topbar">
            <Link to="/">Home</Link>
            <Link to="/translate">Translate</Link>
        </nav>
    );
};

export default TopBar;

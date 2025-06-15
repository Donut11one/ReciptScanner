import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.scss';
const TopBar: React.FC = () => {
    return (
        <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
            <Link to="/" className='btn btn-outline-success'>Home</Link>
            <Link to="/translate" className = 'btn btn-sm btn-outline-secondary'>Translate</Link>

        </form>
        </nav>

    );
};

export default TopBar;

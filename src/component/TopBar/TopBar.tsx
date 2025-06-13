import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.scss';
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
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

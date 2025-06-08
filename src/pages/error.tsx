import React from 'react';
import { Link } from 'react-router-dom';

const Error: React.FC = () => {
    return (
        <div>
            <h1>404 Error</h1>
            <Link to="/">Go to Home</Link>
        </div>
    );
};

export default Error;
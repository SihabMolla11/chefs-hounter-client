import React from 'react';
import { Link } from 'react-router-dom';

const FooterNavbar = () => {
    return (
        <div>
            <h3 className="text-2xl font-bold mb-4">Menu</h3>
            <ul className="text-start p-4">
                <li className="font-semibold text-lg"><Link to="/">Home</Link></li>
                <li className="font-semibold text-lg"><Link to="/block">Blog</Link></li>
                <li className="font-semibold text-lg"><Link to="/login">Login</Link></li>
                <li className="font-semibold text-lg"><Link to="/register">Register</Link></li>
            </ul>
        </div>
    );
};

export default FooterNavbar;
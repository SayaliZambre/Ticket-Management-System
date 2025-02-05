// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ userRole }) => {
    return (
        <div className="sidebar">
            <nav>
                <Link to="/tickets">Tickets Page</Link>
                {userRole === 'support' && <Link to="/dashboard">Support Dashboard</Link>}
                <Link to="/logout">Logout</Link>
            </nav>
        </div>
    );
};

export default Sidebar;

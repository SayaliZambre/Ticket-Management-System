import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { checkAuthState } from './utils/auth';
import Sidebar from './components/Sidebar';
import LoginPage from './pages/login';
import SupportDashboard from './components/Dashboard/SupportDashboard';
import TicketForm from './components/Form/TicketForm';
import './styles/global.css';

const App = () => {
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        checkAuthState(user => {
            if (user) {
                // Retrieve user role from Firestore or set default role
                setUserRole(user.email.includes('support') ? 'support' : 'customer');
            } else {
                setUserRole(null);
            }
        });
    }, []);

    if (!userRole) return <LoginPage />;

    return (
        <Router>
            <Sidebar userRole={userRole} />
            <Routes>
                <Route path="/dashboard" element={<SupportDashboard />} />
                <Route path="/tickets" element={<TicketForm />} />
                <Route path="/logout" element={<LoginPage />} />
            </Routes>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

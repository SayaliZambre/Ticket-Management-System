// src/components/Dashboard/SupportDashboard.js
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

const SupportDashboard = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            const ticketsCollection = collection(db, 'tickets');
            const ticketSnapshot = await getDocs(ticketsCollection);
            const ticketList = ticketSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTickets(ticketList);
        };

        fetchTickets();
    }, []);

    const handleUpdateStatus = async (ticketId, newStatus) => {
        const ticketRef = doc(db, 'tickets', ticketId);
        await updateDoc(ticketRef, { status: newStatus });
        setTickets(tickets.map(ticket => ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket));
    };

    return (
        <div>
            <h2>Support Dashboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Ticket ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map(ticket => (
                        <tr key={ticket.id}>
                            <td>{ticket.id}</td>
                            <td>{ticket.title}</td>
                            <td>{ticket.description}</td>
                            <td>{ticket.status}</td>
                            <td>
                                <button onClick={() => handleUpdateStatus(ticket.id, 'Closed')}>Close</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SupportDashboard;

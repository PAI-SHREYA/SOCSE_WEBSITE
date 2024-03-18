import React, { useEffect, useState } from 'react';
import './ViewUsers.css';
export const ViewUsers= ()=> {
    const [users, setUsers] = useState([]);

    // Fetch users from the backend
    useEffect(() => {
        fetch('http://localhost:3000/api/auth/user')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    const makeAdmin = (userId) => {
        fetch(`http://localhost:3000/api/auth/makeAdmin?_id=${userId}`, { method: 'PUT' })
            .then(response => response.json())
            .then(() => {
                setUsers(users.map(user => {
                    if (user._id === userId) {
                        return { ...user, isAdmin: true };
                    }
                    return user;
                }));
            })
            .catch(error => console.error('Error:', error));
    };

    const deleteUser = (userId) => {
        fetch(`http://localhost:3000/api/auth/delete?_id=${userId}`, { method: 'DELETE' })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(() => {
                setUsers(users.filter(user => user._id !== userId));
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className="users-container">
            {users.map(user => (
                <div key={user._id} className="user-card">
                    <h3>{user.username}</h3>
                    <p>{user.email}</p>
                    {!user.isAdmin && (
                        <button
                            className="make-admin-btn"
                            onClick={() => makeAdmin(user._id)}>
                            Make Admin
                        </button>
                    )}
                    <button
                        className="delete-btn"
                        onClick={() => deleteUser(user._id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

// export default UsersPage;

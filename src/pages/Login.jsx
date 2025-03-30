import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            // We use port 8080 for the Dockerized backend and port 8081 for the local backend (temporarily).
            const response = await axios.post('http://localhost:8080/api/users/login', {
                username,
                password,
            });
            console.log('Login successful:', response.data);
            // Store user data (e.g., in localStorage) or redirect to a dashboard
            localStorage.setItem('user', JSON.stringify(response.data));
            navigate('/profile');
        } catch (err) {
            console.error('Login failed:', err);
            setError(err.response?.data || 'An error occurred during login');
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <h2>Login to StudyHub</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', margin: '8px 0' }}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', margin: '8px 0' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
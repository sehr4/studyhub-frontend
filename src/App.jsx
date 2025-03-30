import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import ThemeSwitcher from './components/ThemeSwitcher';

const themeStyles = {
    light: 'bg-light-bg text-light-text',
    dark: 'bg-dark-bg text-dark-text', // Use solid color for consistency
    ocean: 'bg-ocean-bg text-ocean-text',
    forest: 'bg-forest-bg text-forest-text',
    sunset: 'bg-sunset-bg text-sunset-text',
};

function App() {
    const { theme } = useSelector((state) => state.theme);

    return (
        <Router>
            <div className={`min-h-screen ${themeStyles[theme]}`}>
                <ThemeSwitcher />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
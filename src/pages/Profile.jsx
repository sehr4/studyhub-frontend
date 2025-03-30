import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const { theme } = useSelector((state) => state.theme);

    if (!user) {
        navigate('/login');
        return null;
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const buttonStyles = {
        light: 'bg-light-accent hover:bg-gray-600 text-light-text',
        dark: 'bg-dark-accent hover:bg-purple-700 text-dark-text',
        ocean: 'bg-ocean-accent hover:bg-blue-600 text-ocean-text',
        forest: 'bg-forest-accent hover:bg-green-700 text-forest-text',
        sunset: 'bg-sunset-accent hover:bg-orange-600 text-sunset-text',
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 md:p-6">
            <div className={`w-full max-w-md p-6 md:p-8 rounded-lg shadow-xl ${theme === 'light' ? 'bg-white' : 'bg-opacity-20 bg-gray-900'}`}>
                <h2 className="text-2xl md:text-3xl font-bold text-center gradient-text mb-6">User Profile</h2>
                <div className="space-y-4 text-sm md:text-base">
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>First Name:</strong> {user.firstName}</p>
                    <p><strong>Last Name:</strong> {user.lastName}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                </div>
                <button
                    onClick={handleLogout}
                    className={`mt-6 w-full py-2 px-4 rounded-md ${buttonStyles[theme]} focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200`}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;
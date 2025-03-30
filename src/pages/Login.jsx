import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { theme } = useSelector((state) => state.theme);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', {
                username: formData.username,
                password: formData.password,
            });
            console.log('Login successful:', response.data);
            localStorage.setItem('user', JSON.stringify(response.data));
            navigate('/dashboard');
        } catch (err) {
            console.error('Login failed:', err);
            setError(err.response?.data || 'An error occurred during login');
        }
    };

    const inputStyles = {
        light: 'bg-gray-50 border-light-accent text-light-text',
        dark: 'bg-gray-800 border-dark-accent text-dark-text',
        ocean: 'bg-ocean-bg border-ocean-accent text-ocean-text',
        forest: 'bg-forest-bg border-forest-accent text-forest-text',
        sunset: 'bg-sunset-bg border-sunset-accent text-sunset-text',
    };

    const buttonStyles = {
        light: 'bg-light-accent hover:bg-gray-600 text-light-text',
        dark: 'bg-dark-accent hover:bg-purple-700 text-dark-text',
        ocean: 'bg-ocean-accent hover:bg-blue-600 text-ocean-text',
        forest: 'bg-forest-accent hover:bg-green-700 text-forest-text',
        sunset: 'bg-sunset-accent hover:bg-orange-600 text-sunset-text',
    };

    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            <div className="md:w-1/2 h-64 md:h-auto bg-cover bg-center" style={{ backgroundImage: 'url(study2.jpg)' }}>
                <div className="flex items-center justify-center h-full">
                    {/*<h1 className="text-4xl md:text-5xl font-bold gradient-text">StudyHub</h1>*/}
                </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-6">
                <div className={`w-full max-w-md p-6 md:p-8 rounded-lg shadow-xl ${theme === 'light' ? 'bg-white' : 'bg-opacity-20 bg-gray-900'}`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-center gradient-text mb-6">Login to StudyHub</h2>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className={`mt-1 w-full px-4 py-2 rounded-md border ${inputStyles[theme]} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`mt-1 w-full px-4 py-2 rounded-md border ${inputStyles[theme]} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className={`w-full py-2 px-4 rounded-md ${buttonStyles[theme]} focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200`}
                        >
                            Sign In
                        </button>
                    </form>
                    <p className="text-center text-sm mt-4">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-purple-500 hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
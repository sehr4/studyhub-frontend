import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Eye, EyeOff } from 'lucide-react';
import { inputStyles, buttonStyles } from '../utils/styles';
import { API_BASE_URL } from '../config';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        role: 'ROLE_STUDENT',
        password: '',
        passwordConfirm: '',
    });
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
        if (formData.password !== formData.passwordConfirm) {
            setError('Passwords do not match');
            return;
        }
        const payload = {
            username: formData.username,
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            role: formData.role,
            password: formData.password,
        };
        try {
            const response = await axios.post(`${API_BASE_URL}/register`, payload);
            console.log('Register successful:', response.data);
            navigate('/dashboard');
        } catch (err) {
            console.error('Register failed:', err);
            setError(err.response?.data || 'An error occurred during registration');
        }
    };

    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            <div className="md:w-1/2 h-64 md:h-auto bg-cover bg-center" style={{ backgroundImage: 'url(study2.jpg)' }} />
            <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-6">
                <div className={`w-full max-w-md p-6 md:p-8 rounded-lg shadow-xl ${theme === 'light' ? 'bg-white' : 'bg-opacity-20 bg-gray-900'}`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-center gradient-text mb-6">Join StudyHub</h2>
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
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`mt-1 w-full px-4 py-2 rounded-md border ${inputStyles[theme]} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`mt-1 w-full px-4 py-2 rounded-md border ${inputStyles[theme]} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                placeholder="Enter your first name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`mt-1 w-full px-4 py-2 rounded-md border ${inputStyles[theme]} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                placeholder="Enter your last name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Role</label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className={`mt-1 w-full px-4 py-2 rounded-md border ${inputStyles[theme]} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                required
                            >
                                <option value="ROLE_STUDENT">Student</option>
                                <option value="ROLE_INSTRUCTOR">Instructor</option>
                            </select>
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
                                    {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="passwordConfirm"
                                    value={formData.passwordConfirm}
                                    onChange={handleChange}
                                    className={`mt-1 w-full px-4 py-2 rounded-md border ${inputStyles[theme]} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                    placeholder="Confirm your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400"
                                >
                                    {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className={`w-full py-2 px-4 rounded-md ${buttonStyles[theme]} focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200`}
                        >
                            Register
                        </button>
                    </form>
                    <p className="text-center text-sm mt-4">
                        Already have an account?{' '}
                        <Link to="/login" className="text-purple-500 hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
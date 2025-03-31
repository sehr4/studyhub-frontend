import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { themeConfig } from '../themeConfig';

const Header = () => {
    const navigate = useNavigate();
    const { theme } = useSelector((state) => state.theme);
    const { bg, text, border } = themeConfig[theme];

    return (
        <header className={`shadow-lg px-4 py-4 fixed top-0 left-0 right-0 z-50 ${bg} ${text} ${border} min-h-[4rem] flex items-center`}>
            <div className="flex items-center justify-between w-full">
                {/* Logo - Absolute Left */}
                <div
                    className="absolute left-4 cursor-pointer"
                    onClick={() => navigate('/dashboard')}
                >
                    <h1 className="text-xl md:text-2xl font-bold gradient-text">StudyHub</h1>
                </div>

                {/* Profile - Absolute Right */}
                <div
                    className="absolute right-4 cursor-pointer"
                    onClick={() => navigate('/profile')}
                >
                    <img
                        src="/profile-placeholder.jpg"
                        alt="Profile"
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
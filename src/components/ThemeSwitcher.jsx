import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../store/themeSlice';

const themes = [
    { name: 'light', label: 'Light ☀️' },
    { name: 'dark', label: 'Dark 🌙' },
    { name: 'ocean', label: 'Ocean 🌊' },
    { name: 'forest', label: 'Forest 🌲' },
    { name: 'sunset', label: 'Sunset 🌅' },
];

const ThemeSwitcher = () => {
    const { theme } = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    return (
        <div className="fixed top-2 right-2 md:top-4 md:right-4 z-50">
            <select
                value={theme}
                onChange={(e) => dispatch(setTheme(e.target.value))}
                className="p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm md:text-base"
            >
                {themes.map((t) => (
                    <option key={t.name} value={t.name}>
                        {t.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ThemeSwitcher;
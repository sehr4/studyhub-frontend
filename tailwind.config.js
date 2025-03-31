/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        roboto: ['Roboto Condensed', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(#280a48, #20043d)',
      },
      colors: {
        'gradient-start': '#ea00ff',
        'gradient-end': '#03d5ff',
        // Light: Clean, high contrast
        'light-bg': '#e5e7eb', // Gray-200
        'light-text': '#111827', // Gray-900, dark text
        'light-accent': '#4b5563', // Gray-600, darker buttons
        // Dark: Deep and crisp
        'dark-bg': '#111827', // Gray-900, darker
        'dark-text': '#f9fafb', // Gray-50, bright text
        'dark-accent': '#a78bfa', // Softer purple
        // Ocean: Cool and vibrant
        'ocean-bg': '#1e3a8a', // Deep blue
        'ocean-text': '#dbeafe', // Light blue
        'ocean-accent': '#3b82f6', // Bright blue
        // Forest: Natural and bold
        'forest-bg': '#14532d', // Dark green
        'forest-text': '#d9f99d', // Pale lime
        'forest-accent': '#65a30d', // Vivid green
        // Sunset: Warm and rich
        'sunset-bg': '#7c2d12', // Terracotta
        'sunset-text': '#ffedd5', // Soft peach
        'sunset-accent': '#ea580c', // Bold orange
      },
    },
  },
  plugins: [],
};
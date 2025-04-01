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
        'light-bg': '#f9fafb', // Gray-50
        'light-text': '#374151', // Gray-700, dark text
        'light-accent': '#6366f1', // Indigo-500, darker buttons
        // Dark: Deep and crisp
        'dark-bg': '#1f2937', // Gray-800, darker
        'dark-text': '#e5e7eb', // Gray-200, bright text
        'dark-accent': '#9333ea', // Purple-600, Softer purple
        // Ocean: Cool and vibrant
        'ocean-bg': '#2563eb', // Blue-600, Deep blue
        'ocean-text': '#dbeafe', // Blue-100, Light blue
        'ocean-accent': '#0ea5e9', // Cyan-500, Bright blue
        // Forest: Natural and bold
        'forest-bg': '#166534', // Green-700, Dark green
        'forest-text': '#bbf7d0', // Green-200, Pale lime
        'forest-accent': '#84cc16', // Lime-500, Vivid green
        // Sunset: Warm and rich
        'sunset-bg': '#7c2d12', // Orange-900, Terracotta
        'sunset-text': '#fed7aa', // Orange-200, Soft peach
        'sunset-accent': '#ea580c', // Orange-500, Bold orange
      },
    },
  },
  plugins: [],
};
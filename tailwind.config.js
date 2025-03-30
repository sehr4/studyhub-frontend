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
        // Light theme: Clean and bright
        'light-bg': '#f9fafb', // Softer off-white
        'light-text': '#111827', // Darker gray for readability
        'light-accent': '#4b5563', // Neutral gray for buttons
        // Dark theme: Rich and legible
        'dark-bg': '#1f2937', // Darker gray-blue (better contrast than radial gradient alone)
        'dark-text': '#f3f4f6', // Light gray for text
        'dark-accent': '#8b5cf6', // Vibrant purple for buttons
        // Ocean theme: Calm and aquatic
        'ocean-bg': '#1e3a8a', // Deep blue
        'ocean-text': '#e0f2fe', // Light sky blue
        'ocean-accent': '#60a5fa', // Bright blue for buttons
        // Forest theme: Earthy and natural
        'forest-bg': '#14532d', // Deep green
        'forest-text': '#ecfccb', // Pale lime for readability
        'forest-accent': '#84cc16', // Fresh green for buttons
        // Sunset theme: Warm and inviting
        'sunset-bg': '#7c2d12', // Rich terracotta
        'sunset-text': '#ffedd5', // Soft peach for text
        'sunset-accent': '#fb923c', // Warm orange for buttons
      },
    },
  },
  plugins: [],
};
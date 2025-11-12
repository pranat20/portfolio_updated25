/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
  primary: '#1E3A8A',   // Dark Blue Accent (for buttons & highlights)
  secondary: '#E5E7EB', // Light Gray (dividers, subtle backgrounds)
  background: '#F9FAFB', // White / Very Light Blue background
  text: '#111827',      // Dark Text (near black for readability)
  card: '#FFFFFF',      // White cards
  detail: '#6B7280',    // Muted Gray for details
},


    },
  },
  plugins: [],
}

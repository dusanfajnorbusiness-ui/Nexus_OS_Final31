/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nexusDark: '#1a1a1a',
        nexusYellow: '#fbbf24', // Web
        nexusRed: '#ef4444',    // YT
        nexusGreen: '#22c55e',  // App/Others
        nexusBlack: '#000000',  // Desktop
        nexusCyan: '#00FFFF', // Žiarivá azúrová pre Codex
      }
    },
  },
  plugins: [],
}

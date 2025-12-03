/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
            },
            colors: {
                // Light mode colors
                light: {
                    bg: '#ffffff',
                    surface: '#f8f9fa',
                    text: {
                        primary: '#1a1a1a',
                        secondary: '#4a5568',
                        tertiary: '#718096',
                    },
                    border: '#e2e8f0',
                },
                // Dark mode colors
                dark: {
                    bg: '#0b0b0f',
                    surface: '#151515',
                    text: {
                        primary: '#ffffff',
                        secondary: '#e2e8f0',
                        tertiary: '#a0aec0',
                    },
                    border: '#2d3748',
                },
            },
            boxShadow: {
                // Light mode shadows
                'light-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                'light-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'light-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'light-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                // Dark mode shadows (glowing effect)
                'dark-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4), 0 0 20px -5px rgba(59, 130, 246, 0.1)',
                'dark-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.5), 0 0 30px -10px rgba(59, 130, 246, 0.15)',
                // Glow effects for dark mode
                'glow-blue': '0 0 20px -5px rgba(59, 130, 246, 0.4), 0 0 40px -10px rgba(59, 130, 246, 0.2)',
                'glow-purple': '0 0 20px -5px rgba(147, 51, 234, 0.4), 0 0 40px -10px rgba(147, 51, 234, 0.2)',
            },
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                bluegray: 'rgba(111,116,152,1)',
            },
            backgroundImage: {
                'lar-photo': "url('/src/routes/articles/images/lar-wide.jpg')",
            },
        },
    },
    plugins: [],
};

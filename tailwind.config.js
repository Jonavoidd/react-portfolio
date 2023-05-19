/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: "class",

    theme: {
        extend: {
            gridTemplateColumns: {
                '20/80': '20% 80%',
                'fixed': '40px 260px',
            },
        },
        fontFamily : {
            quicksand: ["Quicksand", "sans-serif"],
            oswald: ["Oswald", "sans-serif"],
        },
    },
    plugins: [
        require('flowbite/plugin'),
    ],
}


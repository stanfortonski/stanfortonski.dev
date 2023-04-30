module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: '#203748',
                primary: {
                    lighter: '#58d1bd',
                    light: '#48c7b2',
                    proper: '#37bba5',
                    dark: '#2fad98',
                    darker: '#159182',
                },
                blue: {
                    max: 'blue',
                },
                red: '#ff0000',
            },

            fontFamily: {
                vt323: 'VT323',
            },
        },
    },
    plugins: [],
};

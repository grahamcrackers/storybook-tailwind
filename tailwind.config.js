module.exports = {
    theme: {
        extend: {},
    },
    variants: {
        borderWidth: ['first', 'last'],
    },
    plugins: [require('./.tailwind/plugins/pagination'), require('@tailwindcss/custom-forms')],
};

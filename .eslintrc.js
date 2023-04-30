module.exports = {
    globals: {
        __PATH_PREFIX__: true,
    },
    extends: `react-app`,
    plugins: ['react', 'import'],
    rules: {
        'import/order': [
            'error',
            {
                groups: [
                    ['builtin', 'external'],
                    'internal',
                    ['parent', 'sibling', 'index', 'unknown'],
                ],
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                    },
                ],
                'newlines-between': 'always',
            },
        ],
    },
};

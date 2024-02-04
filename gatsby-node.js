exports.onCreateBabelConfig = ({ actions }) => {
    // Fix React is not defined
    actions.setBabelPlugin({
        name: '@babel/plugin-transform-react-jsx',
        options: {
            runtime: 'automatic',
        },
    });
};

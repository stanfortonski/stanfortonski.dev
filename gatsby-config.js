module.exports = {
    siteMetadata: {
        title: 'Stan Fortoński',
        description: 'site.description',
        author: 'Stanisław Fortoński',
        siteUrl: 'https://stanfortonski.dev',
        recaptcha_public: process.env.recaptcha_public,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-i18n',
            options: {
                langKeyDefault: 'en',
                useLangKeyLayout: true,
            },
        },
        'gatsby-plugin-postcss',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-image',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-source-github-api`,
            options: {
                url: 'https://api.github.com/graphql',
                token: process.env.github_token,
                graphQLQuery: `{
          viewer {
            avatarUrl

            bestRepositories: repositories(orderBy: {field: STARGAZERS, direction: DESC}, privacy: PUBLIC, first: 8) {
              edges {
                node {
                  id
                  stargazerCount,
                  forkCount
                  name
                  descriptionHTML
                  createdAt
                  url
                  readme: object(expression: "master:README.md") {
                    ... on Blob {
                      text
                    }
                  }
                }
              }
            }
          }
        }`,
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Stan Fortoński',
                short_name: 'stanfortonski.dev',
                start_url: '/',
                background_color: '#203748',
                theme_color: '#37bba5',
                display: 'standalone',
                icon: 'src/images/favicon.png',
            },
        },
        // 'gatsby-plugin-offline',
    ],
};

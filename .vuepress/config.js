module.exports = {
    title: "jagql",
    description: "A resource driven NodeJS framework to set up a {json:api} + GraphQL endpoint in record time.",
    serviceWorker: true,
    themeConfig: {
        repo: 'jagql/framework',
        docsRepo: 'jagql/jagql.github.io',
        editLinks: true,
        editLinkText: 'Improve this documentation',
        nav: [
            { text: 'Guide', link: '/pages/'}
        ],
        sidebar: [
            '/pages/',
            '/pages/getting-started.md',
            '/pages/configuration.md',
            {
                title: 'Project Setup',
                collapsable: false,
                children: [
                    '/pages/project_setup/resources.md',
                    '/pages/project_setup/relationships.md',
                    '/pages/project_setup/handlers.md',
                    '/pages/project_setup/chain_handlers.md',
                    '/pages/project_setup/query_filter.md',
                    '/pages/project_setup/suggested_structure.md'    
                ]
            },
            {
                title: 'API Generation',
                collapsable: false,
                children: [
                    '/pages/apidocs/swagger.md',
                    '/pages/apidocs/graphql.md'    
                ]
            },
            {
                title: 'Debugging',
                collapsable: false,
                children: [
                    '/pages/debugging/metrics.md',
                    '/pages/debugging/logging.md'    
                ]
            },
            {
                title: 'Further Reading',
                collapsable: false,
                children: [
                    '/pages/further_reading/migrate_from_express.md',
                ]
            }
        ]
    },
    port: "3123",
    dest: "dist"
}
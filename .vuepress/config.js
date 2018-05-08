module.exports = {
    title: "jagql",
    description: "NodeJS framework to generate json:api and GraphQL APIs from model definitions",
    themeConfig: {
        repo: 'jagql/framework',
        docsRepo: 'jagql/docs',
        editLinks: true,
        editLinkText: 'Improve this documentation',
        nav: [
        ],
        sidebar: [
            ['/', 'Introduction'],
            '/pages/getting-started.md'
        ]
    },
    base: "/docs/",
    port: "3123",
    dest: "dist"
}
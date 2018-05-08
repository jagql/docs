module.exports = {
    title: "jagql",
    description: "A resource driven NodeJS framework to set up a {json:api} + GraphQL endpoint in record time.",
    serviceWorker: true,
    themeConfig: {
        repo: 'jagql/framework',
        docsRepo: 'jagql/docs',
        editLinks: true,
        editLinkText: 'Improve this documentation',
        nav: [
            { text: 'Guide', link: '/pages/'}
        ],
        sidebar: [
            '/pages/',
            '/pages/getting-started.md'
        ]
    },
    base: "/docs/",
    port: "3123",
    dest: "dist"
}
const sidebar = require('./sidebar.js');

const config = {
    title: "Shield Documentation",
    description: "The official documentation for shield. A bot designed to aid with your moderational needs.",
    head: [
		['link', { rel: 'icon', href: '/favicon.png' }],
		['meta', { name: 'og:title', content: 'Shield Documentation' }],
		['meta', { name: 'og:description', content: 'A guide made by the community of discord.js for its users.' }],
		['meta', { name: 'og:type', content: 'website' }],
		['meta', { name: 'og:url', content: 'https://discordjs.guide/' }],
		['meta', { name: 'og:locale', content: 'en_US' }],
	],
    theme: "yuu",
    repo: 'strandxo/shield-docs',
    docsDir: 'src',
    editLinks: true,
    sidebarDepth: 3,
    lastUpdated: true,
    themeConfig: {
        yuu: {
			colorThemes: ['blue', 'red'],
		},
        nav: [
            { text: "Home", link: "/" },
            { text: "Documentation", link: "/docs/" },
            { text: "Discord", link: "https://discord.gg/YGCuzUz" },
            { text: "Twitter", link: "https://www.twitter.com/shieldbottweets" },
            { text: "Patreon", link: "#" }
        ],
        sidebar,
    }
};

module.exports = config
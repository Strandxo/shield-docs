const sidebar = require("./sidebar.js");

const config = {
    title: "Shield Documentation",
    description: "The official documentation for shield. A bot designed to aid with your moderational needs.",
    head: [
		["link", { rel: "icon", href: "/favicon.png" }],
		["meta", { name: "og:title", content: "Shield Documentation" }],
		["meta", { name: "og:description", content: "Official documentation for Shield, guild moderation and settings bot." }],
		["meta", { name: "og:type", content: "website" }],
		["meta", { name: "og:url", content: "https://shieldbot.ga/" }],
		["meta", { name: "og:locale", content: "en_US" }],
	],
    theme: "yuu",
    repo: "strandxo/shield-docs",
    docsDir: "src",
    editLinks: true,
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    themeConfig: {
        yuu: {
			colorThemes: ["blue", "red"],
		},
        nav: [
            { text: "Home", link: "/" },
            { text: "Documentation", link: "/docs/" },
            { text: "Invite", link: "https://discordapp.com/api/oauth2/authorize?client_id=568698045412409344&permissions=8&scope=bot" },
            { text: "Discord", link: "https://discord.gg/YGCuzUz" },
            { text: "Twitter", link: "https://www.twitter.com/shieldbottweets" },
        ],
        sidebar,
    }
};

module.exports = config

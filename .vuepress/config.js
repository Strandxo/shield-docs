const sidebar = require("./sidebar.js");
const nav = require("./navbar")

const config = {
    title: "Shield",
    description: "The official website for shield. A bot designed to aid with your moderational needs.",
    head: [
		["link", { rel: "icon", href: "/favicon.png" }],
		["meta", { name: "og:title", content: "Shield Website" }],
		["meta", { name: "og:description", content: "Official website for Shield, guild moderation and settings bot." }],
		["meta", { name: "og:type", content: "website" }],
		["meta", { name: "og:url", content: "https://shieldbot.site/" }],
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
            disableThemeIgnore: true,
		},
        nav,
        sidebar,
    }
};

module.exports = config

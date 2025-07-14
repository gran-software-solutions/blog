// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const organizationName = 'gran-software-solutions';
const projectName = 'blog';

/** @type {import('@docusaurus/types').Config} */
const config = {
    markdown: {
        mermaid: true,
    },
    title: 'GRAN Software Solutions Blog',
    tagline: 'Blog',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: `https://blog.gransoftware.de`,
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: `/`,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName, // Usually your GitHub org/user name.
    projectName, // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        `https://github.com/${organizationName}/${projectName}/tree/main/`,
                },
                blog: {
                    routeBasePath: '/',
                    showReadingTime: true,
                    blogSidebarTitle: 'All posts',
                    blogSidebarCount: 'ALL',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/tags/**'],
                    filename: 'sitemap.xml',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            zoom: {},
            navbar: {
                title: 'GRAN Blog',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/Logo_BrightOrange.svg',
                    srcDark: 'img/Logo_BrightOrange.svg',
                },
                items: [
                    {
                        href: `https://github.com/${organizationName}/${projectName}`,
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'GRAN',
                        items: [
                            {
                                label: 'Privacy Policy',
                                to: 'https://www.consultingcockpit.com/datenschutz/'
                            },
                            {
                                label: 'Website',
                                to: 'https://www.gransoftware.de'
                            },
                            {
                                label: 'LinkedIn',
                                to: 'https://www.linkedin.com/company/gran-software-solutions/'
                            },
                            {
                                label: 'Discord',
                                to: 'https://discord.com/invite/fJUENZh5y4'
                            },
                            {
                                label: 'Time Tracking Tool',
                                to: 'https://consultingcockpit.com'
                            }
                        ]
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                html: `
                                    <a href="https://gransoftware.de" target="_blank">
                                      <img class='footer-logo' alt="GRAN Software Solutions GmbH" src="/img/Logotype_Tagline_BrightOrange.png"/>
                                    </a>
                                  `,
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/gran-software-solutions/blog',
                            },
                            {
                                label: 'Credits',
                                href: '/credits'
                            }
                        ],
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} GRAN Software Solutions GmbH. Built with Docusaurus.`,
            },
            prism: {
                additionalLanguages: ['yaml', 'http', 'json', 'kotlin'],
                theme: require('prism-react-renderer/themes/palenight'),
                darkTheme: require('prism-react-renderer/themes/palenight'),
            },
            mermaid: {
                theme: {light: 'forest', dark: 'dark'},
            }
        }),
    plugins: [require.resolve("docusaurus-plugin-image-zoom")],
    themes: [
        [
            "@easyops-cn/docusaurus-search-local",
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            ({
                hashed: true,
                indexBlog: true,
                blogRouteBasePath: "/",
                language: ["en"],
                highlightSearchTermsOnTargetPage: true,
                explicitSearchResultPath: true,
            }),
        ],
        '@docusaurus/theme-mermaid'
    ],
    stylesheets: [
        "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;300;400;500;600;700&display=swap",
    ],
};

module.exports = config;

import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Seattle Discover",
  tagline: "Best of North West",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://seattlediscover.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'KodiStudios', // Usually your GitHub org/user name.
  //projectName: 'seattle-discover', // Usually your repo name.

  onBrokenLinks: "throw",

  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        // Wiki
        docs: {
          sidebarPath: "./sidebars.ts",

          // Adds "Edit This Page" links
          editUrl: "https://github.com/KodiStudios/seattle-discover/tree/main",
        },

        // Blog
        blog: {
          showReadingTime: true,

          // Adds "Edit This Page" links
          editUrl: "https://github.com/KodiStudios/seattle-discover/tree/main",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Seattle",
      logo: {
        alt: "Seattle Discover Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          label: "Highlights",
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          label: "GitHub",
          href: "https://github.com/KodiStudios/seattle-discover",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Highlights",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Instagram",
              href: "https://instagram.com/nikoaristov",
            },
            {
              label: "X",
              href: "https://x.com/kodistudios",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/KodiStudios/seattle-discover",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kodi Studios, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

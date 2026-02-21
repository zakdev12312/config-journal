import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "config-journal",
  description: "A plain-text archive of my personal digital setup",
  head: [
    ['meta', { name: 'google-site-verification', content: 'aiEBks0wGe_HDepEPRW1wXGvL0cxce0qWfapTiV4Iqo' }]
  ],
  srcDir: 'docs',
  base: '/config-journal/',
  ignoreDeadLinks: true,
  lastUpdated: true,
  search: { provider: 'local' },
  sitemap: {
    hostname: 'https://zakdev12312.github.io/config-journal/'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Game Reviews', link: '/games' },
      { text: 'Movie Reviews', link: '/movies' }
    ],

    sidebar: [
      {
        text: 'Home',
        items: [
          { text: 'Index', link: '/' },
          { text: 'Entry Index', link: '/entry-index' }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'About Me', link: '/about-me' },
          { text: 'About the Vault', link: '/about-the-vault' },
          { text: 'Defaults', link: '/defaults' },
          { text: 'Typography Reference', link: '/typography-reference' }
        ]
      },
      {
        text: 'Disclaimers',
        items: [
          { text: 'Content & Compliance', link: '/DISCLAIMER' },
          { text: 'Windows Guide', link: '/windowsdisclaimer' }
        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Ideal Windows Install Guide', link: '/windows-install-guide' },
          { text: 'Web', link: '/web' },
          { text: 'Shields Up', link: '/shields-up' },
          { text: 'Transfer', link: '/transfer' },
          { text: 'Notespace', link: '/notespace' },
          { text: 'Kasm Install', link: '/kasminstall' },
          { text: 'YouTube Playlist', link: '/ytplaylist' }
        ]
      },
      {
        text: 'Game Reviews',
        items: [
          { text: 'Game Reviews', link: '/games' },
          { text: 'Game Index', link: '/gameindex' },
          { text: 'Suggest something', link: '/suggest-something' }
        ]
      },
      {
        text: 'Games',
        collapsed: false,
        items: [
          { text: 'Titanfall 2', link: '/games/titanfall-2' },
          { text: 'Firewatch', link: '/games/firewatch' },
          { text: 'Road 96', link: '/games/road-96' },
          { text: 'art of rally', link: '/games/art-of-rally' },
          { text: 'Marvel\'s Spider-Man 2', link: '/games/spider-man-2' },
          { text: 'Marvel\'s Spider-Man', link: '/games/spider-man' },
          { text: 'Call of Duty: Black Ops Cold War', link: '/games/cod-black-ops-cold-war' },
          { text: 'Forza Horizon 5', link: '/games/forza-horizon-5' },
          { text: 'Gran Turismo 7', link: '/games/gran-turismo-7' },
          { text: 'Marvel\'s Spider-Man: Miles Morales', link: '/games/spider-man-miles-morales' },
          { text: 'Test Drive Unlimited: Solar Crown', link: '/games/tdusc' },
          { text: 'Stray', link: '/games/stray' },
          { text: 'Squirrel with a Gun', link: '/games/squirrel-with-a-gun' },
          { text: 'Portal 2', link: '/games/portal2' },
          { text: 'Portal', link: '/games/portal' },
          { text: 'Minecraft', link: '/games/minecraft' },
          { text: 'Forza Horizon 4', link: '/games/horizon4' },
          { text: 'Ghost of Tsushima', link: '/games/ghost' }
        ]
      },
      {
        text: 'Movie Reviews',
        items: [
          { text: 'Movie Reviews', link: '/movies' },
          { text: 'Movie Index', link: '/movieindex' },
          { text: 'Suggest something', link: '/suggest-something' }
        ]
      },
      {
        text: 'Movies',
        collapsed: false,
        items: [
          { text: 'The Adam Project', link: '/movies/The-Adam-Project' },
          { text: 'Interstellar', link: '/movies/Interstellar' },
          { text: 'IF', link: '/movies/IF' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zakdev12312/' }
    ],

    editLink: {
      pattern: 'https://github.com/zakdev12312/config-journal/edit/main/docs/:path',
      text: 'Edit this page'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright 2026 zakdev12312'
    }
  }
})

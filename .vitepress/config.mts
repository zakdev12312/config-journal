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
          { text: 'Entry Index', link: '/📓 Config Journal – Entry Index' }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'About Me', link: '/👤 About Me' },
          { text: 'About the Vault', link: '/📦 About the Vault' },
          { text: 'Defaults', link: '/⚙️ Defaults' },
          { text: 'Typography Reference', link: '/🎨 Typography Reference' }
        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Ideal Windows Install Guide', link: '/🪟 Ideal Windows Install Guide' },
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
          { text: 'Suggest a Game', link: '/🗳️ Suggest a Game' }
        ]
      },
      {
        text: 'Games',
        collapsed: false,
        items: [
          { text: 'Titanfall 2', link: '/games/🤖 Titanfall 2' },
          { text: 'Firewatch', link: '/games/🟧 Firewatch' },
          { text: 'Road 96', link: '/games/🛣️ Road 96' },
          { text: 'art of rally', link: '/games/🚗 art of rally' },
          { text: 'Marvel\'s Spider-Man 2', link: '/games/🕸️ Marvel’s Spider-Man 2' },
          { text: 'Marvel\'s Spider-Man', link: '/games/🕷️ Marvel’s Spider-Man' },
          { text: 'Call of Duty: Black Ops Cold War', link: '/games/🕶️ Call of Duty_ Black Ops Cold War' },
          { text: 'Forza Horizon 5', link: '/games/🏎️ Forza Horizon 5_ Where Physics Go to Vacation' },
          { text: 'Gran Turismo 7', link: '/games/🏁 Gran Turismo 7' },
          { text: 'Marvel\'s Spider-Man: Miles Morales', link: '/games/🎧 Marvel’s Spider-Man_ Miles Morales' },
          { text: 'Test Drive Unlimited: Solar Crown', link: '/games/tdusc' },
          { text: 'Stray', link: '/games/Stray' },
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
          { text: 'Movie Index', link: '/movieindex' }
        ]
      },
      {
        text: 'Movies',
        collapsed: false,
        items: [
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

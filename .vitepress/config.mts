import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WILLATRONIX",
  description: "Everything WILLATRONIX.",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/docs/about-willatronix' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],

      '/docs/about-willatronix/': [
        {
          text: 'About WILLATRONIX',
          items: [
            { text: 'Username', link: '/docs/about-willatronix/username.md' },
            { text: 'Avatar', link: '/docs/about-willatronix/avatar.md' }
          ]
        }
      ]},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WILLATRONIX/willatronix.com' }
    ]
  },
  markdown: {
    image: {
      lazyLoading: true
    }
  }
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WILLATRONIX",
  description: "Everything WILLATRONIX.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/docs/about-willatronix' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    search: {
      provider: 'local'
    },

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
            { text: 'Username', link: '/docs/about-willatronix/' },
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

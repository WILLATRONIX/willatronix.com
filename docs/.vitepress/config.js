// refer https://vitepress.dev/reference/site-config for details

import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  base: 'user.github.io/willatronix.com/'
  title: 'WILLATRONIX',
  description: 'Your description here',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'API Examples', link: '/api-examples' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
        ],
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Home',
          link: '/home'
        },
        {
          text: 'Guide',
          children: [
            { text: 'Getting Started', link: '/guide/getting-started' },
          ]
        }
      ]
    }
  }
})

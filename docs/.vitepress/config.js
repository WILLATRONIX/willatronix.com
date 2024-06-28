// refer https://vitepress.dev/reference/site-config for details
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'WILLATRONIX',
  description: 'Your description here',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
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

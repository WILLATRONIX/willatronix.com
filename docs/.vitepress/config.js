// refer https://vitepress.dev/reference/site-config for details
import { defineConfig } from 'vitepress'

module.exports = {
  lang: 'en-US',
  title: 'WILLATRONIX',
  description: 'I hope this works',
};

export default defineConfig({
  themeConfig: {
    nav: [
      { text: 'Example', link: '/home' },

      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
        ],
      },
    ],

    sidebar: [
      {
         text: 'Guide',
        items: [
          { text: 'Example', link: '/home' },
        ],
      },
    ],
  },
})
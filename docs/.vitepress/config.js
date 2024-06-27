// refer https://vitepress.dev/reference/site-config for details
module.exports = {
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Example', link: '/example' },

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
        // text: 'Guide',
        items: [
          { text: 'Examplee', link: '/example' },
          // ...
        ],
      },
    ],
  },
};
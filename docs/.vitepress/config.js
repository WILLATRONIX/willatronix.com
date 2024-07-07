// refer https://vitepress.dev/reference/site-config for details

import { defineConfig } from 'vitepress'
import laravel from 'laravel-vite-plugin';
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";

export default defineConfig({
  lang: 'en-US',
  base: 'user.github.io/willatronix.com/',
  title: 'WILLATRONIX',
  description: 'Your description here',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Competition', link: '/br-2024/index' },
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
  },

  
  plugins: [
      laravel({
          input: [
              'resources/sass/app.scss',
              'resources/js/app.js',
          ],
          refresh: true,
      }),
      isProduction ? pluginPurgeCss({
          content: [
              './resources/views/**/*.blade.php',
              './resources/js/**/*.js',
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }) : '',
  ],
  build: {
      sourcemap: true,
  }
})

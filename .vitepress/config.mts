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
    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env)
          if (env.frontmatter?.search === false) return ''
          if (env.relativePath.startsWith('CHANGE/ME')) return ''
          return html
        }
      }
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

      '/br-2024/': [
        {
          text: "Builder's Refuge Solitary Competition",
          items: [
            { text: 'About', link: '/br-2024/index' },
            { text: 'Inspiration', link: '/br-2024/inspiration' },
            { text: 'References', link: '/br-2024/references' },
            { text: 'Build Process', link: '/br-2024/build-process' },
            { text: 'Easter Eggs', link: '/br-2024/easter-eggs' },
          ]
        }
      ],

      '/about/': [
        {
          text: 'About WILLATRONIX',
          items: [
            { text: 'Username', link: '/about/username' },
            { text: 'Avatar', link: '/about/avatar' }
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

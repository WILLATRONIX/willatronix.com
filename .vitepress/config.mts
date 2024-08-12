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

      '/about/hobbies/games/minecraft/builds/': [
        {
          text: "My Minecraft Builds",
          items: [
            { text: 'About', link: './index' },
            { text: 'Bryce Canyon', link: './bryce-canyon' },
            { text: 'Chain Tree', link: './chain-tree' },
            { text: "Builder's Refuge Solitary Competition", link: './br-comp-2024/' },
            { text: 'Norwegian Landscape Map', link: './norwegian-landscape' },
            { text: 'Oblivion Desert', link: './oblivion-desert' },
            { text: 'The Axiom', link: './the-axiom' },
          ]
        }
      ],

      '/about/hobbies/games/minecraft/builds/br-comp-2024/': [
        {
          text: "Builder's Refuge Solitary Competition",
          items: [
            { text: '🡹 Return', link: './../' },
            { text: 'About', link: './index' },
            { text: 'Inspiration', link: './inspiration' },
            { text: 'References', link: './references' },
            { text: 'Build Process', link: './build-process' },
            { text: 'Easter Eggs', link: './easter-eggs' },
          ]
        }
      ],
      '/about/hobbies/games/minecraft/builds/norwegian-landscape/': [
        {
          text: "Norwegian Landscape Map",
          items: [
            { text: '🡹 Return', link: './../' },
            { text: 'About', link: './index' },
            { text: 'Build Process', link: './build-process' },
            { text: 'Post Review', link: './post-review' },
          ]
        }
      ],
      '/about/hobbies/games/minecraft/builds/bryce-canyon/': [
        {
          text: "Bryce Canyon",
          items: [
            { text: '🡹 Return', link: './../' },
            { text: 'About', link: './index' },
            { text: 'References', link: './references' },
            { text: 'Build Process', link: './build-process' },
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

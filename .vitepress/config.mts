import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WILLATRONIX",
  description: "Everything WILLATRONIX.",
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/about-willatronix/avatar/5.webp',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Flashback Docs', link: '/flashback/' },
      { text: 'Contact Me', link: '/markdown-examples' }
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
          text: "Bryce Canyon (Incomplete)",
          items: [
            { text: '🡹 Return', link: './../' },
            { text: 'About', link: './index' },
            { text: 'References', link: './references' },
            { text: 'Build Process', link: './build-process' },
          ]
        }
      ],

      '/flashback/docs/': [
        {
          text: 'Flashback Documentation', link: '/flashback',
          items: [
            {
              text: 'Editor', link: '/flashback/docs/editor/',
              items: [
                {
                  text: 'Timeline', link: '/flashback/docs/editor/timeline/',
                  items: [
                    { text: 'Elements', link: '/flashback/docs/editor/timeline/elements' },
                    { text: 'Keyframes', link: '/flashback/docs/editor/timeline/keyframes' },
                  ]
                },
                { text: 'Visuals', link: '/flashback/docs/editor/visuals' },
                { text: 'Exporting', link: '/flashback/docs/editor/exporting' },
              ]
            },
            {
              text: 'Recording', link: '/flashback/docs/recording/',
              items: [
                { text: 'Configuration', link: '/flashback/docs/recording/config' },
              ]
            },
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
      { icon: 'github', link: 'https://github.com/WILLATRONIX/' }
    ]
  },
  markdown: {
    image: {
      lazyLoading: true
    }
  }
})

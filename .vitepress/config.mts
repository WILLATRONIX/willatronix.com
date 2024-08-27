import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WILLATRONIX",
  description: "Everything WILLATRONIX.",
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: 'https://download1321.mediafire.com/29p680f08uggpSJw1L_jHhEua7y-ti_0WCy0LHhjNZ8aWhI6Zu9IwtOf6p_ZvsBpiAmnJ17h3MwiRPgQqrY9m6_zM66pb5rtt8kUH0SZncSEPve97kGsu_iHbzckULIemOcpF3CeIwXANs8aCHrYN4cfd7RylxCXd8lJwrJBOg/caidpkfbf5t8fj9/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://download1324.mediafire.com/gamvaafru9uga7E5RTT8YaxqnibAWJMLPlReJJIjtks5qg1CLy-ae79FsBIajsu_Su568pS40gfslkV_BzzRM_JjTEe0yxPYH9LEdwZcQ1nSObBMemw5j_IRMVSC5RKI3NoOFz4X1y8H8kDBoVJrzLX-Gvfr3vsym60Cuf29_A/hz3r95akbb2f77z/5.webp',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Flashback Docs', link: '/flashback/' },
      { text: 'Contact Me', link: '/contact' }
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
          text: 'Flashback Documentation', link: '/flashback/docs/',
          items: [
            {
              text: 'Recording', link: '/flashback/docs/recording/',
              items: [
                { text: 'Configuration', link: '/flashback/docs/recording/config' },
              ]
            },
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

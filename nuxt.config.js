import * as http from "http";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sylphe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: 'Sylphe | The next gen agency - Événementiel et Digital à Paris' },
      { hid: 'description', name: 'description', content: 'Chez Sylphe, nous croyons dans les communautés. Nous créons des expériences tactiques et sur-mesure pour connecter votre marque à ses fans.' },
      { hid: 'og:description', name: 'og:description', content: 'Chez Sylphe, nous croyons dans les communautés. Nous créons des expériences tactiques et sur-mesure pour connecter votre marque à ses fans.' },

      //{hid: 'fb:app_id', property: 'fb:app_id', content: '1092610674532574'},
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'Sylphe | The next gen agency - Événementiel et Digital à Paris' },
      { hid: 'og:url', property: 'og:url', content: 'https://sylphe.herokuapp.com'},
      { hid: 'og:site_name', property: 'og:site_name', content: 'Sylphe | The next gen agency - Événementiel et Digital à Paris' },
      //{ hid: 'og:locale', property: 'og:locale', content: 'fr' },
      { hid: 'og:image', property: 'og:image', content: '/sylphe.webp' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'Sylphe | The next gen agency - Événementiel et Digital à Paris' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://sylphe.herokuapp.com' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Sylphe | The next gen agency - Événementiel et Digital à Paris' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Chez Sylphe, nous croyons dans les communautés. Nous créons des expériences tactiques et sur-mesure pour connecter votre marque à ses fans.' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/sylphe.webp'}
    ],
    link: [
      { rel: 'alternate', hreflang: 'x' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/fonts/css/fonts.css"
  ],

  env: {
    baseUrl: process.env.BASE_URL || 'https://sylphe-corp-api.herokuapp.com',
    siteUrl: process.env.SITE_URL || 'https://sylphe-corp.herokuapp.com'
  },

  render: {
    // HTTP2: https://nuxtjs.org/api/configuration-render/#http2
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
        .filter(f => f.asType === 'script' && f.file === 'runtime.js')
        .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/vuelidate.js', mode: 'client'},
    {src: '~/plugins/vue-typer.js', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
    ['nuxt-gsap-module',
      {
        extraPlugins: {
          easel: true,
          scrollTo: true,
          scrollTrigger: true,
          toggleActions: true,
          text: true
        },
        extraEases: {
          expoScaleEase: true
        }
      }
    ],
    ['@nuxtjs/google-fonts',
      {
        families: {
          Montserrat: {
            wght: [100, 300, 400, 500, 600, 700, 800, 900],
            ital: [700]
          }
        }
      }
    ]
  ],

  optimizedImages: {
    optimizeImagesInDev: true,
    optimizeImages: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-cookie-control', {
      //default css (true)
      //if css is set to false, you will still be able to access
      //your color variables (example. background-color: var(--cookie-control-barBackground))
      css: true,

      //enable or disable css variables polyfill
      cssPolyfill: true,

      //in case you have subdomains (shop.yourdomain.com)
      domain: function () {
        return process.env.siteUrl.replace('https://', '') || 'sylphe-corp.herokuapp.com'
      },

      //if you want to tree-shake locales set locales you want to use
      locales: ['fr', 'en', 'ja'],

      //modal opener (cookie control)
      controlButton: false,

      //or if you want to set initialState to false (default value for initialState is true)
      blockIframe: {
        initialState: false
      },

      //position of cookie bar:
      //'top-left', 'top-right', 'top-full',
      //'bottom-left', 'bottom-right', 'bottom-full'
      barPosition: 'bottom-full',

      //default colors
      //if you want to disable colors set colors property to false
      colors: {
        barTextColor: '#fff',
        modalOverlay: '#000',
        barBackground: '#000',
        barButtonColor: '#000',
        modalTextColor: '#000',
        modalBackground: '#fff',
        modalOverlayOpacity: 0.8,
        modalButtonColor: '#fff',
        modalUnsavedColor: '#fff',
        barButtonHoverColor: '#fff',
        barButtonBackground: '#fff',
        modalButtonHoverColor: '#fff',
        modalButtonBackground: '#000',
        controlButtonIconColor: '#000',
        controlButtonBackground: '#fff',
        barButtonHoverBackground: '#333',
        checkboxActiveBackground: '#000',
        checkboxInactiveBackground: '#000',
        modalButtonHoverBackground: '#333',
        checkboxDisabledBackground: '#ddd',
        controlButtonIconHoverColor: '#fff',
        controlButtonHoverBackground: '#000',
        checkboxActiveCircleBackground: '#fff',
        checkboxInactiveCircleBackground: '#fff',
        checkboxDisabledCircleBackground: '#fff',
      },

      //default texts
      text: {
        locale: {
          fr: {
            barTitle: 'Paramètrage des cookies',
            barDescription: 'Nous utilisons nos propres cookies et des cookies tiers afin de pouvoir vous montrer ce site web et de mieux comprendre comment vous l\'utilisez, en vue d\'améliorer les services que nous proposons. Si vous continuez à naviguer, nous considérons que vous avez accepté les cookies.',
            acceptAll: 'Autoriser tous les cookies',
            declineAll: 'Interdire tous les cookies',
            manageCookies: 'Gérer les cookies',
            unsaved: 'Vous avez des paramètres non sauvegardés',
            close: 'Fermer',
            save: 'Sauvegarder',
            necessary: 'Cookies obligatoire',
            optional: 'Cookies facultatifs',
            functional: 'Cookies fonctionnels',
            blockedIframe: 'Pour voir cela, veuillez activer les cookies fonctionnels',
            here: 'Ici'
          },
          en: {
            barTitle: 'Cookies',
            barDescription: 'We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.',
            acceptAll: 'Accept all',
            declineAll: 'Delete all',
            manageCookies: 'Manage cookies',
            unsaved: 'You have unsaved settings',
            close: 'Close',
            save: 'Save',
            necessary: 'Necessary cookies',
            optional: 'Optional cookies',
            functional: 'Functional cookies',
            blockedIframe: 'To see this, please enable functional cookies',
            here: 'here'
          },
          ja: {
            barTitle: 'クッキー',
            barDescription: '当社は、お客様に本ウェブサイトをご案内し、お客様のご利用状況をより良く理解して、当社が提供するサービスを改善するために、当社独自のクッキーおよび第三者のクッキーを使用しています。お客様が閲覧を続けた場合、お客様がクッキーを受け入れたものとみなします。',
            acceptAll: 'すべてのクッキーを許可する',
            declineAll: 'すべてのクッキーを無効にする',
            manageCookies: 'クッキーの管理',
            unsaved: '保存されていない設定がある',
            close: '閉じる',
            save: 'セーブ',
            necessary: '必要なクッキー',
            optional: 'オプションのクッキー',
            functional: '機能性クッキー',
            blockedIframe: 'これを見るには、機能的なクッキーを有効にしてください。',
            here: 'これ'
          }
        }
      },
      cookies: {
        necessary: [
          {
            //if multilanguage
            name: {
              fr: 'Cookies par défaut',
              en: 'Default Cookies',
              ja: 'デフォルトクッキー'
            },

            //if multilanguage
            description: {
              fr: 'Utilisé pour le contrôle des cookies.',
              en: 'Used for cookie control.',
              ja: 'クッキーの制御に使用します。'
            },

            cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
          }
        ],
        optional: [
          {
            name:  'Google Analitycs',
            //if you don't set identifier, slugified name will be used
            identifier: 'ga',
            //if multilanguage
            description: {
              fr: 'Google GTM est ...',
              en: 'Google GTM is ...',
              ja: 'Google GTM is ...'
            },

            initialState: true,
            src:  'https://www.googletagmanager.com/gtag/js?id=<API-KEY>',
            async:  true,
            cookies: ['_ga', '_gat', '_gid'],
            accepted: () =>{
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
              });
            },
            declined: () =>{
            }
          }
        ]
      }
    }],
    '@nuxtjs/markdownit',
    '@nuxtjs/strapi',
    'nuxt-polyfill',
    '~/modules/viewport-observer',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    ['nuxt-mq', {
      // Default breakpoint for SSR
      defaultBreakpoint: 'sm',
      breakpoints: {
        sm: 450,
        md: 1250,
        lg: Infinity
      }
    }],
    ['@nuxtjs/i18n', {
      parsePages: false,
      pages: {
        index: {
          fr: '/',
          en: '/',
          ja: '/'
        },
        culture: {
          fr: '/culture',
          en: '/culture',
          ja: '/culture'
        },
        'projects/index': {
          fr: '/travaux',
          en: '/projects',
          ja: '/projects',
        },
        'projects/_slug': {
          fr: '/travaux/:slug',
          en: '/projects/:slug',
          ja: '/projects/:slug',
        },
        contact: {
          fr: '/contact',
          en: '/contact',
          ja: '/contact'
        },
        'legal-notice': {
          fr: '/mentions-legales',
          en: '/legal-notice',
          ja: '/legal-notice',
        }
      },
      locales: [
        {
          name: 'Français',
          code: 'fr',
          iso: 'fr-FR',
          file: 'fr-FR.js'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-EN',
          file: 'en-EN.js'
        },
        {
          name: 'にほんご',
          code: 'ja',
          iso: 'ja-JA',
          file: 'ja-JA.js'
        }
      ],
      silentTranslationWarn: true,
      fallbackLocale: ['fr', 'en'],
      strategy: 'prefix_except_default',
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'fr',
      seo: true,
      detectBrowserLanguage: {
        useCookie: false,
        cookieKey: 'i18n_redirected',
        onlyOnRoot: true,
        cookieCrossOrigin: true,
        alwaysRedirect: true
      }
    }]
  ],

  strapi: {
    entities: ['projects', 'clients', 'specialities'],
    url: process.env.baseUrl || 'https://sylphe-corp-api.herokuapp.com'
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },

  sitemap: {
    hostname: process.env.siteUrl || 'https://sylphe-corp.herokuapp.com', // L'adresse de votre site, que vous pouvez placer comme ici dans une variable d'environnement.
    path: '/sitemap.xml', // L'emplacement de votre fichier sitemap.
    cacheTime: 1000 * 60 * 15, // La durée avant que le sitemap soit regénéré. Ici 15mn.
    gzip: true,
    generate: false, // Génère une version statique du sitemap quand activé. À utiliser avec nuxt generate.
    exclude: [] // Les pages qu'on a pas trop envie de voir atterrir sur Google.
  },

  robots: {
    UserAgent: "*",
    Disallow: "/",
    Sitemap: `${process.env.siteUrl || 'https://sylphe-corp.herokuapp.com'}/sitemap.xml`
  },

  serverMiddleware: [
    '~/api/contact'
  ],

  polyfill: {
    features: [
      /*
          Feature without detect:

          Note:
            This is not recommended for most polyfills
            because the polyfill will always be loaded, parsed and executed.
      */
      {
        require: 'url-polyfill' // NPM package or require path of file
      },

      /*
          Feature with detect:

          Detection is better because the polyfill will not be
          loaded, parsed and executed if it's not necessary.
      */
      {
        require: 'intersection-observer',
        detect: () => 'IntersectionObserver' in window,
      },

      /*
          Feature with detect & install:

          Some polyfills require a installation step
          Hence you could supply a install function which accepts the require result
      */
      {
        require: 'smoothscroll-polyfill',

        // Detection found in source: https://github.com/iamdustan/smoothscroll/blob/master/src/smoothscroll.js
        detect: () => 'scrollBehavior' in document.documentElement.style && window.__forceSmoothScrollPolyfill__ !== true,

        // Optional install function called client side after the package is required:
        install: (smoothscroll) => smoothscroll.polyfill()
      }
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      sizes: [64, 120, 144, 152, 192, 384, 512],
      purpose: 'maskable'
    },
    meta: {
      title: 'Sylphe',
      author: 'Sylphe',
      short_name: "Sylphe",
      favicon: true,
      theme_color: 'black',
      description: "Chez Sylphe, nous croyons dans les communautés. Nous créons des expériences tactiques et sur-mesure pour connecter votre marque à ses fans.",
      mobileAppIOS: true,
      nativeUI: true,
      mobileApp: true,
      appleStatusBarStyle: 'default'
    },
    manifest: {
      lang: 'fr',
      name: 'Sylphe',
      short_name: 'Sylphe',
      app_name: 'Sylphe',
      scope: '/',
      start_url: '/',
      description: "Chez Sylphe, nous croyons dans les communautés. Nous créons des expériences tactiques et sur-mesure pour connecter votre marque à ses fans.",
      background_color: '#1D1F1D',
      display: 'fullscreen'
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

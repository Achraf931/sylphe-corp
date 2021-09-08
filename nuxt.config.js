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

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
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
          toggleActions: true
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
    '~/modules/viewport-observer',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    ['@nuxtjs/i18n', {
      parsePages: false,
      pages: {
        index: {
          fr: '/',
          en: '/',
          ja: '/'
        },
        'services/index': {
          fr: '/services',
          en: '/services',
          ja: '/services',
        },
        'services/digital': {
          fr: '/services/digital',
          en: '/services/digital',
          ja: '/services/digital',
        },
        'services/design': {
          fr: '/services/design',
          en: '/services/design',
          ja: '/services/design',
        },
        'services/production-of-products': {
          fr: '/services/production-de-produits',
          en: '/services/production-of-products',
          ja: '/services/production-of-products',
        },
        'services/events': {
          fr: '/services/evenements',
          en: '/services/events',
          ja: '/services/events',
        },
        culture: {
          fr: '/culture',
          en: '/culture',
          ja: '/culture'
        },
        'works/index': {
          fr: '/travaux',
          en: '/works',
          ja: '/works',
        },
        'works/_slug': {
          fr: '/travaux/:slug',
          en: '/works/:slug',
          ja: '/works/:slug',
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
      strategy: 'prefix_and_default',
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

  sitemap: {
    hostname: "https://sylphe-corp.herokuapp.com", // L'adresse de votre site, que vous pouvez placer comme ici dans une variable d'environnement.
    path: '/sitemap.xml', // L'emplacement de votre fichier sitemap.
    cacheTime: 1000 * 60 * 15, // La durée avant que le sitemap soit regénéré. Ici 15mn.
    gzip: true,
    generate: false, // Génère une version statique du sitemap quand activé. À utiliser avec nuxt generate.
    exclude: [] // Les pages qu'on a pas trop envie de voir atterrir sur Google.
  },

  robots: {
    UserAgent: "*",
    Disallow: "/",
    Sitemap: "https://sylphe-corp.herokuapp.com/sitemap.xml"
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

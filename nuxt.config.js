module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Panlaan Spa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A Thai massage lasts between 30 and 60 minutes, although longer times are available. The practitioner will use pressure to relax and heal the entire body.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#164a80'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    '@/assets/scss/main.scss'
  ],
  plugins: [
    { src: '@/plugins/components'},
    { src: '@/plugins/ga.js', ssr: false }
  ]
}

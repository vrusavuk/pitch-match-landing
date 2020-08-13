module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pith-match-landing'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    i18n: {
      locale: ' (ru)',
      fallbackLocale: ' (ru)',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}

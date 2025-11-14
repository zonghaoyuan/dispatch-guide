export default {
  logo: <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>🎮 Dispatch Guide</span>,

  project: {
    link: 'https://github.com/zonghaoyuan/dispatch-guide'
  },

  docsRepositoryBase: 'https://github.com/zonghaoyuan/dispatch-guide/tree/main',

  useNextSeoProps() {
    return {
      titleTemplate: '%s – Dispatch Guide'
    }
  },

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Complete Dispatch game guide with walkthroughs for all 8 episodes, character builds, endings guide, and expert strategies." />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#667eea" />
    </>
  ),

  navigation: {
    prev: true,
    next: true
  },

  toc: {
    title: 'On This Page',
    backToTop: true
  },

  search: {
    placeholder: 'Search Dispatch Guide...'
  },

  darkMode: true,
  primaryHue: 200
}

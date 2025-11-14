import { useRouter } from 'next/router'

const SITE_URL = 'https://dispatchguide.org'

export default {
  logo: <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>🎮 Dispatch Guide</span>,

  project: {
    link: 'https://github.com/zonghaoyuan/dispatch-guide'
  },

  docsRepositoryBase: 'https://github.com/zonghaoyuan/dispatch-guide/tree/main',

  useNextSeoProps() {
    const { asPath } = useRouter()
    return {
      titleTemplate: '%s – Dispatch Guide',
      defaultTitle: 'Dispatch Guide - Complete Walkthrough & Strategy Guide 2025',
      additionalLinkTags: [
        {
          rel: 'canonical',
          href: `${SITE_URL}${asPath}`
        }
      ]
    }
  },

  head: () => {
    const { asPath } = useRouter()
    const currentUrl = `${SITE_URL}${asPath}`

    return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Master Dispatch with complete walkthroughs for all 8 episodes, character builds, hero strategies, endings guide, and expert tips for the 2025 superhero adventure game." />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content="Dispatch Guide - Complete Walkthrough & Strategy Guide 2025" />
      <meta property="og:description" content="Master Dispatch with complete walkthroughs for all 8 episodes, character builds, hero strategies, endings guide, and expert tips for the 2025 superhero adventure game." />
      <meta property="og:image" content={`${SITE_URL}/images/header.webp`} />
      <meta property="og:site_name" content="Dispatch Guide" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content="Dispatch Guide - Complete Walkthrough & Strategy Guide 2025" />
      <meta name="twitter:description" content="Master Dispatch with complete walkthroughs for all 8 episodes, character builds, hero strategies, endings guide, and expert tips for the 2025 superhero adventure game." />
      <meta name="twitter:image" content={`${SITE_URL}/images/header.webp`} />

      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#667eea" />

      {/* Additional SEO */}
      <meta name="keywords" content="Dispatch game, Dispatch guide, Dispatch walkthrough, Dispatch episodes, superhero game guide, Dispatch endings, Dispatch characters, Dispatch strategy" />
      <meta name="author" content="Dispatch Guide" />
      <meta name="robots" content="index, follow" />
    </>
    )
  },

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

import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
  staticImage: true,
  latex: false
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // 图片优化
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shared.akamai.steamstatic.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.cloudflare.steamstatic.com'
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com'
      },
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net'
      }
    ]
  },

  // 性能优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
}

export default withNextra(nextConfig)

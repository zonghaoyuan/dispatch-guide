# Dispatch Guide

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zonghaoyuan/dispatch-guide)

A comprehensive guide website for the game **Dispatch** by AdHoc Studio. This project provides detailed walkthroughs, character guides, strategies, and ending explanations for all 8 episodes.

🌐 **Live Site**: [dispatchguide.org](https://dispatchguide.org)

---

## 📖 About This Project

This guide covers:
- ✅ **All 8 Episodes** - Complete walkthroughs with choices and consequences
- ✅ **All 6 Endings** - Detailed requirements and paths
- ✅ **Character Guides** - Every hero profiled with optimal builds
- ✅ **Strategy Guides** - Gameplay mechanics, stats system, and tips
- ✅ **SEO Optimized** - Built to help players find the information they need

---

## 🛠️ Built With

This project is built using:
- **[Next.js](https://nextjs.org/)** - React framework for production
- **[Nextra](https://nextra.site/)** - Documentation site generator
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/zonghaoyuan/dispatch-guide.git
cd dispatch-guide

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build for Production

```bash
pnpm build
```

---

## 📁 Project Structure

```
dispatch-guide/
├── pages/
│   ├── index.mdx           # Homepage
│   ├── guides/             # Strategy guides
│   │   ├── introduction.mdx
│   │   ├── gameplay-mechanics.mdx
│   │   ├── characters.mdx
│   │   └── ...
│   └── episodes/           # Episode walkthroughs
│       ├── pivot.mdx       # Episode 1
│       ├── onboard.mdx     # Episode 2
│       └── ...
├── components/
│   └── Schema.jsx          # SEO schema markup
├── public/
│   ├── favicon.ico         # Site icons
│   ├── robots.txt
│   └── sitemap.xml
├── theme.config.jsx        # Nextra theme config
└── next.config.mjs         # Next.js config
```

---

## 🤖 AI-Assisted Development

This project was developed collaboratively with **Claude Code**, an AI coding assistant. While we've made every effort to ensure accuracy and quality, there may be:

- Content that could be improved or expanded
- Potential inaccuracies in game information
- Code that could be optimized
- SEO or accessibility improvements needed

**We welcome your contributions!** 🙏

---

## 🤝 Contributing

Contributions are welcome! Whether you want to:
- 🐛 Report bugs or inaccuracies
- 📝 Improve or add content
- 🎨 Enhance design or UX
- ⚡ Optimize performance
- 🌐 Add translations

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
   - Edit `.mdx` files in `pages/guides/` or `pages/episodes/`
   - Follow the existing content structure
4. **Test locally**
   ```bash
   pnpm dev
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add: your descriptive message"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request**

### Content Guidelines

When contributing content:
- Verify game information is accurate
- Use clear, concise language
- Include relevant images when helpful
- Follow existing markdown formatting
- Add proper headings and structure

---

## 🐛 Issues

Found a problem? Please [open an issue](https://github.com/zonghaoyuan/dispatch-guide/issues) with:
- Clear description of the problem
- Steps to reproduce (if applicable)
- Screenshots (if relevant)
- Your environment (browser, OS)

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

This project is a fan-made guide and is not officially affiliated with AdHoc Studio or the game Dispatch.

---

## 🎮 About Dispatch

**Dispatch** is an episodic superhero workplace adventure game by AdHoc Studio, released in 2025 for PlayStation 5 and PC. Players coordinate a team of reformed villains through the Superhero Dispatch Network in this choice-driven narrative adventure.

- **Developer**: [AdHoc Studio](https://www.adhocla.com/)
- **Platforms**: PlayStation 5, Windows PC
- **Episodes**: 8 total
- **Genre**: Narrative Adventure, Strategy

---

## 🙏 Acknowledgments

- Game developed by [AdHoc Studio](https://www.adhocla.com/)
- Site built with [Nextra](https://nextra.site/)
- Hosted on [Vercel](https://vercel.com/)
- AI assistance from [Claude Code](https://claude.com/claude-code)
- Game icons from [Steam CDN](https://steamcdn-a.akamaihd.net/)

---

## 📬 Contact

- **Website**: [dispatchguide.org](https://dispatchguide.org)
- **Issues**: [GitHub Issues](https://github.com/zonghaoyuan/dispatch-guide/issues)
- **Pull Requests**: [GitHub PRs](https://github.com/zonghaoyuan/dispatch-guide/pulls)

---

**Built with ❤️ for the Dispatch community** 🎮

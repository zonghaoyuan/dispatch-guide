const fs = require('fs');
const path = require('path');

// 生成sitemap.xml
const generateSitemap = () => {
  const baseUrl = 'https://dispatchguide.org';
  const pages = [
    { url: '', priority: '1.0', changefreq: 'daily' }, // Homepage
    { url: '/guides/introduction', priority: '0.9', changefreq: 'weekly' },
    { url: '/guides/gameplay-mechanics', priority: '0.9', changefreq: 'weekly' },
    { url: '/guides/stats-system', priority: '0.9', changefreq: 'weekly' },
    { url: '/guides/characters', priority: '0.9', changefreq: 'weekly' },
    { url: '/guides/hero-builds', priority: '0.9', changefreq: 'weekly' },
    { url: '/guides/dispatch-strategy', priority: '0.9', changefreq: 'weekly' },
    { url: '/guides/tips-and-strategies', priority: '0.9', changefreq: 'weekly' },
    { url: '/guides/endings', priority: '0.9', changefreq: 'weekly' },
    { url: '/episodes', priority: '0.9', changefreq: 'weekly' },
    { url: '/episodes/pivot', priority: '0.8', changefreq: 'weekly' },
    { url: '/episodes/onboard', priority: '0.8', changefreq: 'weekly' },
    { url: '/episodes/escalation', priority: '0.8', changefreq: 'weekly' },
    { url: '/episodes/priority', priority: '0.8', changefreq: 'weekly' },
    { url: '/episodes/team-building', priority: '0.8', changefreq: 'weekly' },
    { url: '/episodes/moving-parts', priority: '0.8', changefreq: 'weekly' },
    { url: '/episodes/retrospective', priority: '0.8', changefreq: 'weekly' },
    { url: '/episodes/synergy', priority: '0.8', changefreq: 'weekly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully!');
};

generateSitemap();

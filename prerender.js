const path = require('path');
const Prerenderer = require('@prerenderer/prerenderer');
const PuppeteerRenderer = require('@prerenderer/renderer-puppeteer');
const fs = require('fs-extra');

const staticDir = path.join(__dirname, 'build');
const routes = [
  '/',
  '/about',
  '/services',
  '/projects',
  '/blog',
  '/contact',
  '/solar-epc-services',
  '/solar-plant-management',
  '/solar-operation-and-maintenance-services',
  '/solar-battery-storage-services',
  '/solar-panel-cleaning-robot-services',
  '/solar-pump-services',
  '/third-party-solar-power-purchase-services'
];

async function prerender() {
  console.log('🚀 Starting modern pre-rendering...');

  const renderer = new PuppeteerRenderer({
    renderAfterTime: 5000,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const prerenderer = new Prerenderer({
    staticDir,
    renderer
  });

  try {
    await prerenderer.initialize();
    console.log('✅ Prerenderer initialized. Crawling routes...');

    const renderedRoutes = await prerenderer.renderRoutes(routes);

    for (const route of renderedRoutes) {
      const outputDir = path.join(staticDir, route.route);
      const outputFile = path.join(outputDir, 'index.html');

      await fs.ensureDir(outputDir);
      await fs.writeFile(outputFile, route.html.trim());
      console.log(`✨ Rendered: ${route.route}`);
    }

    console.log('🏁 Pre-rendering complete! All HTML files generated.');
  } catch (err) {
    console.error('❌ Pre-rendering failed:', err.message || err);
    process.exit(1);
  } finally {
    await prerenderer.destroy();
  }
}

prerender();

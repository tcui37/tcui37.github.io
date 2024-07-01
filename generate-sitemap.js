const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');
const babelParser = require('@babel/parser');
const babelTraverse = require('@babel/traverse').default;
const fs = require('fs');

// Adjust the path to your App.tsx file
const appFilePath = path.resolve('./src/App.tsx');
const appFileContent = fs.readFileSync(appFilePath, 'utf8');

// Parse the App.tsx file to extract routes
const parseRoutes = (content) => {
  const ast = babelParser.parse(content, {
    sourceType: 'module',
    plugins: ['typescript', 'jsx'],
  });

  const routes = [];
  babelTraverse(ast, {
    JSXOpeningElement(path) {
      if (path.node.name.name === 'Route') {
        const attributes = path.node.attributes;
        const route = {};

        attributes.forEach((attr) => {
          if (attr.name.name === 'path') {
            route.path = attr.value.value;
          }
        });

        if (route.path) {
          routes.push(route.path);
        }
      }
    },
  });

  return routes;
};

const routes = parseRoutes(appFileContent);

async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname: 'https://tcui37.github.io' });
  const writeStream = createWriteStream(path.resolve('./public/sitemap.xml'));

  sitemapStream.pipe(writeStream);

  routes.forEach((route) => {
    sitemapStream.write({ url: route, changefreq: 'daily', priority: 0.8 });
  });

  sitemapStream.end();
  await streamToPromise(sitemapStream);
  console.log('Sitemap generated at public/sitemap.xml');
}

generateSitemap().catch(console.error);

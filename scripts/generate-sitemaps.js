import fs from 'fs';
import path from 'path';

const baseUrl = 'https://www.buildingtec-elevators.com';
const routes = [
	'/',
	'/products/passenger-elevator',
	'/products/home-elevators',
	'/products/car-elevators'
	// Add all your routes here
];

function generateSitemap(lang) {
	const today = new Date().toISOString();
	let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
	sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
	sitemap += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

	routes.forEach((route) => {
		const url = `${baseUrl}${lang === 'en' ? '' : '/ar'}${route}`;
		sitemap += '  <url>\n';
		sitemap += `    <loc>${url}</loc>\n`;
		sitemap += `    <lastmod>${today}</lastmod>\n`;
		sitemap += '    <xhtml:link\n';
		sitemap += `       rel="alternate"\n`;
		sitemap += `       hreflang="${lang === 'en' ? 'en' : 'ar'}"\n`;
		sitemap += `       href="${url}"/>\n`;
		sitemap += '  </url>\n';
	});

	sitemap += '</urlset>';
	return sitemap;
}

// Generate English sitemap
fs.writeFileSync(path.join(__dirname, '../public/sitemap_en.xml'), generateSitemap('en'));

// Generate Arabic sitemap
fs.writeFileSync(path.join(__dirname, '../public/sitemap_ar.xml'), generateSitemap('ar'));

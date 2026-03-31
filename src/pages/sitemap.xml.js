import products from "../data/products.json";

const site = "https://floor-boss.netlify.app";
const categories = [...new Set(products.map((product) => product.category))];
const pages = [
  "/",
  "/all-products",
  ...categories.map((category) => `/${category}`),
  ...products.map((product) => `/${product.id}`),
];

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (path) => `  <url>
    <loc>${site}${path}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

const set = require("set-value");

let sitemap = {};

function addToSitemap(slug, properties) {
  const obj = {};
  const dottedSlug = slug.split("/").join(".");
  set(sitemap, dottedSlug, {
    ...properties,
  });
}

module.exports.sitemap = sitemap;
module.exports.addToSitemap = addToSitemap;

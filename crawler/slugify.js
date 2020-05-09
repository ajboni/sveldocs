var Path = require("path");

function slugify(srcPath, basePath) {
  let path = "";
  path = removeBasePath(srcPath, basePath);
  path = removeExtension(path);
  path = toSlug(path);

  return path;
}

function removeBasePath(srcPath, basePath) {
  let newPath = srcPath.split(Path.sep);

  // Remove 'public/docs' path
  newPath.splice(0, 1);
  newPath = newPath.filter((e) => e !== basePath);
  newPath = newPath.join(Path.sep);
  return newPath;
}

function removeExtension(path) {
  const ext = Path.parse(path).ext;
  const regex = new RegExp(ext + "+$", "g");
  return path.replace(regex, "");
}

function toSlug(text) {
  // TODO: backlash only changing once.
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace("\\", "/") // Replace backslash with forwardslash
    .replace(/[^\w\-\/]+/g, "") // Remove all non-word chars (except fowardslash)
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

function extractLanguageFromSlug(slug) {
  return slug.split("/")[0];
}

/* From a given slug, extract the folder hierarchy (ignoring language section) */
function extractFoldersFromSlug(slug) {
  const arr = slug.split("/");
  const folders = arr.slice(1, arr.length - 1).join("/");
  return folders;
}

module.exports.slugify = slugify;
module.exports.extractLanguageFromSlug = extractLanguageFromSlug;
module.exports.extractFoldersFromSlug = extractFoldersFromSlug;

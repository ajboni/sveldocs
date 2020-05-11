const fs = require("fs-extra");
var Path = require("path");

const MarkdownIt = require("markdown-it"),
  md = new MarkdownIt();
const emoji = require("markdown-it-emoji");
const mark = require("markdown-it-mark");
const anchor = require("markdown-it-anchor");
const matter = require("gray-matter");

function htmlfy(path, slug) {
  const content = fs.readFileSync(path, "utf8");
  const result = matter(content);
  if (!result.data.title) {
    result.data.title = slug.split("/").pop();
  }

  result.content = parseContent(content, path.replace(/\.[^/.]+$/, ""));
  return result;
}

function parseContent(content, slug) {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
  });
  md.use(emoji);
  md.use(mark);

  md.use(anchor, {
    permalink: true,
    permalinkSymbol: "🔗",
    permalinkHref: (s) => `#/${slug}#${s}`,
  });
  content = md.render(content);
  return content;
}

function writeFile(content, path, ext) {
  try {
    const fullPath = Path.join("public", path) + ext;
    fs.outputFileSync(fullPath, content);
    return fullPath;
  } catch (error) {
    return false;
  }
}

module.exports.htmlfy = htmlfy;
module.exports.writeFile = writeFile;

const fs = require("fs-extra");
var Path = require("path");

const MarkdownIt = require("markdown-it"),
  md = new MarkdownIt();

function htmlfy(path) {
  const content = fs.readFileSync(path, "utf8");
  const result = md.render(content);
  return result;
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

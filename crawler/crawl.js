const chokidar = require("chokidar");
const chalk = require("chalk");
const { config } = require("../config");
const { slugify, extractLanguageFromSlug } = require("./slugify");
const fs = require("fs-extra");
const { htmlfy, writeFile, cleanFolder } = require("./htmlfy");
const columnify = require("columnify");

var Path = require("path");
const error = chalk.bold.red;
const warning = chalk.bold.yellow;
const success = chalk.bold.green;
const log = console.log;
const slugs = new Map();
const docs = [];

// Delete dst folder contents
fs.emptyDirSync(Path.join("public", config.DIST_DOCS_FOLDER));

// Initialize watcher.
const watcher = chokidar.watch(Path.join(config.SRC_DOCS_FOLDER, "/**/*.md"), {
	ignored: /(^|[\/\\])\../, // ignore dotfiles
	persistent: true,
});

function processDocuments(path, verbose = false) {
	// Generate Slug
	const slug = slugify(path, config.SRC_DOCS_FOLDER);

	// Parse file and convert to html.
	const content = htmlfy(path);

	// Get the language
	const lang = extractLanguageFromSlug(slug)

	// Create files in public folder
	const file = writeFile(
		content,
		Path.join(slug),
		".html"
	);

	// Fill slugs map with slug => htmlFile info

	if (!slug || !file) {
		log(`${error(path + " => ERROR")}`);
	} else {
		const result = {
			srcPath: path,
			dstPath: file,
			slug: slug,
			language: lang,
		};
		docs.push(result);
		if (verbose) {
			log(success("[OK] REBUILD FILE"));
			log("\r");
			log(columnify(new Array(result)));
			log("\r");
			log(warning("Watching files..."));
			log("\r");
		}
	}
}

function onDeleteFile(path) {
	const slug = slugify(path, config.SRC_DOCS_FOLDER);
	const htmlFile = Path.join('public', slug + ".html");
	try {
		fs.unlinkSync(htmlFile)
		log(success(`[OK] FILE ${htmlFile} DELETED`));
		log("\r");
	} catch (err) {
		log(error(`[ERROR] FILE ${htmlFile} NOT FOUND`));
		log("\r");
	}

}

// Something to use when events are received.
// Add event listeners.
watcher
	.on("add", (path) => processDocuments(path))
	.on("change", (path) => processDocuments(path, true))
	.on("unlink", (path) => onDeleteFile(path))
	.on("ready", onCrawlReady);

log(`Crawling folder:  ${warning(config.SRC_DOCS_FOLDER)} for .md files...`);
log("\r");

function onCrawlReady() {
	log(columnify(docs));
	log("\r");
	log(success("[OK] CRAWLING DONE..."));
	log("\r");
	log(warning("Watching files..."));
	log("\r");
}

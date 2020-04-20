const config = {
	// Folder where src docs are located.
	SRC_DOCS_FOLDER: "docs",

	// Folder where dist html docs will be located. Relative to ./Public
	DIST_DOCS_FOLDER: "docs",

	// ID for the default language. It will be accesible without any prefix in the slug.
	DEFAULT_LANGUAGE_ID: "eng",

	// Available languages
	LANGUAGES: [
		{ id: "eng", caption: "English" },
		{ id: "spa", caption: "Spanish" },
	],

	// Should we show the default language doc if the localized version cannot be found ?
	FALLBACK_TO_DEFAULT_LANGUAGE: true,

	// Prefix of filename that will be stripped out. Only used for sorting purposes. Anything before it, will be deleted from the doc title.
	// AABA__HelloWorld.md
	// AACA__Bye.md
	SORT_PREFIX: "__",

	// Suffix that separates the slug from the language modifier. It will be also be deleted fropm the title.
	// AABA_HelloWorld.md    => Default Language
	// AABA_HelloWorld-spa.md    => Spanish Language
	LANGUAGE_SUFFIX: "-",
};

module.exports.config = config;

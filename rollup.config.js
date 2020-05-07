import fs from "fs";
import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";

const IS_PRODUCTION = process.env.NODE_ENV === "production";
const extensions = [".js", ".svelte"];

export default {
  input: "src/app.svelte",
  output: {
    dir: "public/dist",
    format: "es",
  },
  watch: {
    include: "src/**",
  },
  plugins: [
    resolveRootImports({ root: "src", extensions }),
    svelte({
      dev: !IS_PRODUCTION,
      include: ["src/**/*.svelte", "node_modules/**/*.svelte"],
    }),
    resolve({ extensions }),
    IS_PRODUCTION && terser(),
    serve("public"),
    commonjs(),
    postcss({
      extract: true,
      plugins: [],
    }),
  ],
};

function resolveRootImports({ root, extensions }) {
  return {
    resolveId: (importee) => {
      if (importee[0] === "/") {
        for (const ext of extensions) {
          const rootPath = `${root}${importee}${ext}`;
          const fullPath = path.resolve(__dirname, rootPath);
          if (fs.existsSync(fullPath)) return fullPath;
        }
      }
      return null;
    },
  };
}

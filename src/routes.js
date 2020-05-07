import Home from "./home.svelte";
import Doc from "./doc.svelte";

export const routes = {
  // Exact path
  "/": Home,

  // Using named parameters, with last being optional
  //   "/author/:first/:last?": Author,

  // Wildcard parameter
  "/doc/*": Doc,

  // Catch-all
  // This is optional, but if present it must be the last
  "*": Doc,
};

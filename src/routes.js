import Home from "./home.svelte";
import Doc from "./doc.svelte";
import Error404 from "./404.svelte";

export const routes = {
  // Exact path
  "/": Home,

  // Wildcard parameter
  "/:lang/*": Doc,

  // Using named parameters, with last being optional
  //   "/author/:first/:last?": Author,

  // Catch-all
  // This is optional, but if present it must be the last
  "*": Error404,
};

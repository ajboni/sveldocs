<script>
  import { onMount } from "svelte";
  //   import UIkit from "uikit";
  //   import Icons from "uikit/dist/js/uikit-icons.min.js";
  import { config } from "../config";
  import { location, querystring } from "svelte-spa-router";
  export let params = {};
  import Error404 from "./404.svelte";
  import Loading from "./loading.svelte";

  let doc, lang, slug, fullpath, loading, error, hash;

  // Use reactive to get param changes on the url. (back button, or enter on the url bar)
  $: if (params) {
    lang = params.lang;
    slug = params.wild.split("#")[0];
    hash = params.wild.split("#")[1];
    fullpath = config.DIST_DOCS_FOLDER + "/" + lang + "/" + slug + ".html";
    fetchDocument();
  }

  async function fetchDocument() {
    loading = true;
    console.log(fullpath);
    const response = await fetch(fullpath);
    if (response.ok) {
      doc = await response.text();
    } else {
      doc = null;
      error = await response;
    }
    loading = false;
  }

  //   UIkit.use(Icons);
  //   UIkit.notification("Hello world.");
</script>

<div>
  {#if loading}
    <!-- content here -->
    <Loading />
  {:else if doc}
    <!-- content here -->
    {@html doc}
  {:else}
    <Error404 {error} {params} />
    <!-- else content here -->
  {/if}

</div>

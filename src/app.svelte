<script>
  import { onMount } from "svelte";
  import UIkit from "uikit";
  import Icons from "uikit/dist/js/uikit-icons";
  import "uikit/dist/css/uikit.min.css";
  import Router from "svelte-spa-router";
  import { routes } from "./routes";

  UIkit.use(Icons);
</script>

<Router {routes} />

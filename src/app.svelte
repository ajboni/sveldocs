<script>
  import { onMount } from "svelte";
  import UIkit from "uikit";
  import Icons from "uikit/dist/js/uikit-icons.min.js";

  let doc;

  onMount(async () => {
    const response = await fetch("docs/index.html");
    doc = await response.text();
  });

  UIkit.use(Icons);
  UIkit.notification("Hello world.");
</script>

<h1>Hello World</h1>
<div class="uk-container">
  <div class="uk-card uk-card-body uk-card-primary">
    <h3 class="uk-card-title">Example headline</h3>

    <button class="uk-button uk-button-default" uk-tooltip="title: Hello World">
      Hover
    </button>
    <span uk-icon="icon: check" />

  </div>
</div>
<div>
  {@html doc}
</div>

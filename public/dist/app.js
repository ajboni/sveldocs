/* src/app.svelte generated by Svelte v3.20.1 */
import { SvelteComponentDev, add_location, append_dev, attr_dev, detach_dev, dispatch_dev, element, init, insert_dev, noop, safe_not_equal, space, validate_slots } from "/dist/web_modules/svelte/internal.js";
import { onMount } from "/dist/web_modules/svelte.js";
import UIkit from "/dist/web_modules/uikit.js";
import Icons from "/dist/web_modules/uikit/dist/js/uikit-icons.min.js";
const file = "src/app.svelte";

function create_fragment(ctx) {
  let h1;
  let t1;
  let div1;
  let div0;
  let h3;
  let t3;
  let button;
  let t5;
  let span;
  let t6;
  let div2;
  const block = {
    c: function create() {
      h1 = element("h1");
      h1.textContent = "Hello World";
      t1 = space();
      div1 = element("div");
      div0 = element("div");
      h3 = element("h3");
      h3.textContent = "Example headline";
      t3 = space();
      button = element("button");
      button.textContent = "Hover";
      t5 = space();
      span = element("span");
      t6 = space();
      div2 = element("div");
      add_location(h1, file, 16, 0, 345);
      attr_dev(h3, "class", "uk-card-title");
      add_location(h3, file, 19, 4, 453);
      attr_dev(button, "class", "uk-button uk-button-default");
      attr_dev(button, "uk-tooltip", "title: Hello World");
      add_location(button, file, 21, 4, 508);
      attr_dev(span, "uk-icon", "icon: check");
      add_location(span, file, 24, 4, 618);
      attr_dev(div0, "class", "uk-card uk-card-body uk-card-primary");
      add_location(div0, file, 18, 2, 397);
      attr_dev(div1, "class", "uk-container");
      add_location(div1, file, 17, 0, 367);
      add_location(div2, file, 28, 0, 670);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, h1, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      append_dev(div0, h3);
      append_dev(div0, t3);
      append_dev(div0, button);
      append_dev(div0, t5);
      append_dev(div0, span);
      insert_dev(target, t6, anchor);
      insert_dev(target, div2, anchor);
      div2.innerHTML =
      /*doc*/
      ctx[0];
    },
    p: function update(ctx, [dirty]) {
      if (dirty &
      /*doc*/
      1) div2.innerHTML =
      /*doc*/
      ctx[0];
      ;
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(div1);
      if (detaching) detach_dev(t6);
      if (detaching) detach_dev(div2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let doc;
  onMount(async () => {
    const response = await fetch("docs/index.html");
    $$invalidate(0, doc = await response.text());
  });
  UIkit.use(Icons);
  UIkit.notification("Hello world.");
  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  validate_slots("App", $$slots, []);

  $$self.$capture_state = () => ({
    onMount,
    UIkit,
    Icons,
    doc
  });

  $$self.$inject_state = $$props => {
    if ("doc" in $$props) $$invalidate(0, doc = $$props.doc);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [doc];
}

class App extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "App",
      options,
      id: create_fragment.name
    });
  }

}

export default App;
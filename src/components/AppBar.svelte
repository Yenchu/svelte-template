<script>
  import { stores } from "@sapper/app";
  import AppBar from "smelte/src/components/AppBar";
  import Tabs from "smelte/src/components/Tabs";
  import Tooltip from "smelte/src/components/Tooltip";
  import { Spacer } from "smelte/src/components/Util";
  import DarkMode from "./DarkMode.svelte";
  import { mainPages } from "../ui/pages.js";

  const { page } = stores();

  $: path = $page.path;

  let isDark;

  export let name = "Demo";

  export let menu = [];
</script>

<AppBar class={i => i.replace('dark-600', 'dark-900')}>
  <a href={mainPages.home} class="px-2 md:px-8 flex items-center">
    <img src="/logo-192.png" alt="svelte logo" width="44" />
    <h6 class="pl-3 text-white tracking-widest font-thin text-lg">{name}</h6>
  </a>
  <Spacer />
  <Tabs navigation items={menu} bind:selected={path} color="secondary" />
  <Tooltip>
    <span slot="activator">
      <DarkMode bind:isDark />
    </span>
    {isDark ? 'Disable' : 'Enable'} dark mode
  </Tooltip>
  <slot />
  <Spacer />
</AppBar>

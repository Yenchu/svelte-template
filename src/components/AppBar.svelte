<script>
  import { stores } from "@sapper/app";
  import AppBar from "smelte/src/components/AppBar";
  import Tabs from "smelte/src/components/Tabs";
  import { Spacer } from "smelte/src/components/Util";
  import DarkMode from "./DarkMode.svelte";
  import { mainPages } from "../ui/pages.js";

  const { page } = stores();

  $: path = $page.path;

  export let name = "Demo";

  export let menu = [];
</script>

<AppBar class={i => {
		//i = i.replace('primary-300', 'blue-300');
		i = i.replace('dark-600', 'dark-900');
		return i;
	}}>
  <a href={mainPages.home} class="px-2 md:px-8 flex items-center">
    <img src="/logo-192.png" alt="svelte logo" width="44" />
    <h6 class="pl-3 text-white tracking-widest font-thin text-lg">{name}</h6>
  </a>
  <Spacer />
  <Tabs navigation items={menu} bind:selected={path} color="secondary" />
  <DarkMode />
  <slot />
  <Spacer />
</AppBar>

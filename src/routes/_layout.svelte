<script>
  import "smelte/src/tailwind.css";
  import { stores } from "@sapper/app";
  import ProgressLinear from "smelte/src/components/ProgressLinear";
  import Tooltip from "smelte/src/components/Tooltip";
  import AppBar from "../components/AppBar.svelte";
  import Logout from "../components/Logout.svelte";
  import { authToken } from "../store/stores.js";
  import { authMenu, mainMenu } from "../ui/menu.js";

  const { preloading, session } = stores();

  $: menu = $authToken ? mainMenu : authMenu;

  if (!$session) {
    $session = {};
  }
  if ($authToken) {
    console.log("set session authToken");
    $session.authToken = $authToken;
  }

  export let segment = "";
  $: n = (segment || "").replace(new RegExp("-", "g"), " ");
  $: name = n.length ? n.charAt(0).toUpperCase() + n.slice(1) : "";
</script>

<svelte:head>
  <title>{name ? name : ''}</title>
</svelte:head>

{#if $preloading}
  <ProgressLinear app />
{/if}

<AppBar {menu}>
  {#if $authToken}
    <Tooltip>
      <span slot="activator">
        <Logout />
      </span>
      Log out
    </Tooltip>
  {/if}
</AppBar>

<main
  class="relative p-8 lg:max-w-3xl mx-auto mb-10 mt-24 md:ml-64 md:pl-16
  md:max-w-md md:px-3">
  <slot />
</main>

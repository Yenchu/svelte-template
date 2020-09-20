<script context="module">
  import { localAuthToken } from "../store/stores.js";
  import { authPages, mainPages } from "../ui/pages.js";

  export function preload(page, session) {
    if (!process.browser) {
      return;
    }

    const authToken = localAuthToken();

    const isAuthPage = Object.values(authPages).includes(page.path);
    
    if (authToken && authToken.accessToken) {
      if (isAuthPage) {
        console.log("redirect to home page: " + page.path);
        this.redirect(302, mainPages.home);
      }
    } else {
      if (!isAuthPage) {
        console.log("redirect to login page: " + page.path);
        this.redirect(302, authPages.login);
      }
    }
  }
</script>

<script>
  import "smelte/src/tailwind.css";
  import { goto, stores } from "@sapper/app";
  import ProgressLinear from "smelte/src/components/ProgressLinear";
  import Tooltip from "smelte/src/components/Tooltip";
  import AppBar from "../components/AppBar.svelte";
  import Logout from "../components/Logout.svelte";
  import { authToken } from "../store/stores.js";
  import { authMenu, mainMenu } from "../ui/menu.js";

  const { preloading, session } = stores();

  if ($authToken) {
    console.log("set session authToken");
    if (!$session) {
      $session = {};
    }
    $session.authToken = $authToken;
  }

  $: menu = $authToken ? mainMenu : authMenu;

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
  {#if $authToken}
    <p>for test: accessToken is {$authToken.accessToken}</p>
  {/if}
  <slot />
</main>

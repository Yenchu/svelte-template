<script context="module">
  import { localAuthToken } from "../store/stores.js";
  import { authPages, mainPages } from "../ui/pages.js";

  let loading = true;
  
  export function preload(page, session) {
    if (!process.browser) {
      return;
    }

    const authToken = localAuthToken();

    const isAuthPage = Object.values(authPages).includes(page.path);
    
    if (authToken && authToken.accessToken) {
      if (isAuthPage) {
        this.redirect(302, mainPages.home);
      }
    } else {
      if (!isAuthPage) {
        this.redirect(302, authPages.login);
      }
    }
    loading = false;
  }
</script>

<script>
  import "smelte/src/tailwind.css";
  import { goto, stores } from "@sapper/app";
  import ProgressLinear from "smelte/src/components/ProgressLinear";
  import AppBar from "../components/AppBar.svelte";
  import SideBar from "../components/SideBar.svelte";
  import Logout from "../components/Logout.svelte";
  import { authToken, showSodeBar } from "../store/stores.js";
  import { authMenu, mainMenu } from "../ui/menu.js";
  import { settingsPages } from "../ui/pages.js";

  const { preloading, page } = stores();

  $: menu = $authToken ? mainMenu : authMenu;

  // $: {
  //   $showSodeBar = Object.values(settingsPages).includes($page.path);
  //   console.log($showSodeBar + ' path: ' + $page.path);
  // }

  export let segment = "";
  $: n = (segment || "").replace(new RegExp("-", "g"), " ");
  $: name = n.length ? n.charAt(0).toUpperCase() + n.slice(1) : "";
</script>

<svelte:head>
  <title>{name ? name : ''}</title>
</svelte:head>

{#if $preloading}
  <ProgressLinear />
{/if}

{#if !loading}
<AppBar {menu}>
  {#if $authToken}
    <Logout />
  {/if}
</AppBar>

<main
  class="relative p-8 lg:max-w-3xl mx-auto mb-10 mt-24 md:ml-64 md:pl-16
  md:max-w-md md:px-3">
  <!-- <SideBar /> -->
  {#if $authToken}
    <p>for test: accessToken is {$authToken.accessToken}</p>
  {/if}
  <slot />
</main>
{:else}
  <ProgressLinear />
{/if}
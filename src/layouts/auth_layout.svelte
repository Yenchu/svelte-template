<script>
  import { stores } from "@sapper/app";
  import ProgressLinear from 'smelte/src/components/ProgressLinear';
  import AppBar from "../../components/AppBar.svelte";
  import { authMenu } from "../../ui/menu.js";

  const { preloading } = stores();

	export let segment = '';
  $: n = (segment || '').replace(new RegExp('-', 'g'), ' ');
  $: name = n.length ? n.charAt(0).toUpperCase() + n.slice(1) : '';
</script>

<svelte:head>
  <title>{name ? name : ''}</title>
</svelte:head>

{#if $preloading}
  <ProgressLinear app />
{/if}

<AppBar menu={authMenu} />

<main
  class="relative p-8 lg:max-w-3xl mx-auto mb-10 mt-24 md:ml-64 md:pl-16
  md:max-w-md md:px-3">
  <slot />
</main>

<script>
	import 'smelte/src/tailwind.css';

  import { stores } from '@sapper/app';
  import AppBar from 'smelte/src/components/AppBar';
  import Button from 'smelte/src/components/Button';
  import ProgressLinear from 'smelte/src/components/ProgressLinear';
  import Tabs from 'smelte/src/components/Tabs';
  import Tooltip from 'smelte/src/components/Tooltip';
  import { Spacer } from 'smelte/src/components/Util';
  import dark from '../utils/dark.js';

  const { preloading, page } = stores();
  $: path = $page.path;

	export let segment = '';
  $: n = (segment || '').replace(new RegExp('-', 'g'), ' ');
	$: name = n.length ? n.charAt(0).toUpperCase() + n.slice(1) : '';
	
  const darkMode = dark();

  const topMenu = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/blog', text: 'Blog' }
  ];
</script>

<style>
  .github {
    transition: 0.3s ease-out;
  }
  .github:hover {
    transform: rotate(360deg);
  }
</style>

<svelte:head>
  <title>{name ? name : ''}</title>
</svelte:head>

{#if $preloading}
  <ProgressLinear app />
{/if}

<AppBar 
	class={i => i.replace('dark-600', 'dark-900')}>
  <a href="." class="px-2 md:px-8 flex items-center">
    <img src="/logo-192.png" alt="svelte logo" width="44" />
    <h6 class="pl-3 text-white tracking-widest font-thin text-lg">Svelte Demo</h6>
  </a>
  <Spacer />
  <Tabs
    navigation
    items={topMenu}
    bind:selected={path}
    color="secondary" />
  <Tooltip>
    <span slot="activator">
      <Button
        bind:value={$darkMode}
        icon="wb_sunny"
        small
        flat
        remove="p-1 h-4 w-4"
        iconClass="text-white"
        text />
    </span>
    {$darkMode ? 'Disable' : 'Enable'} dark mode
  </Tooltip>
  <a href="https://github.com/yenchu" class="px-4 github">
    <img src="/github.png" alt="Github" width="24" height="24" />
  </a>
</AppBar>

<main
  class="relative p-8 lg:max-w-3xl mx-auto mb-10 mt-24 md:ml-64 md:pl-16 md:max-w-md md:px-3">
  <slot />
</main>
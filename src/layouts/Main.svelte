<script>
  import { stores } from '@sapper/app';
  import AppBar from 'smelte/src/components/AppBar';
  import Tabs from 'smelte/src/components/Tabs';
  import Tooltip from 'smelte/src/components/Tooltip';
  import { Spacer } from 'smelte/src/components/Util';
  import DarkMode from '../components/DarkMode.svelte';
  import Logout from '../components/Logout.svelte';
  import { topMenu } from '../ui/menu.js';

  const { page } = stores();

  $: path = $page.path;

	export let segment = '';
  $: n = (segment || '').replace(new RegExp('-', 'g'), ' ');
  $: name = n.length ? n.charAt(0).toUpperCase() + n.slice(1) : '';

  let isDark;

</script>

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
      <DarkMode bind:isDark={isDark} />
    </span>
    {isDark ? 'Disable' : 'Enable'} dark mode
  </Tooltip>
  <Tooltip>
    <span slot="activator">
      <Logout />
    </span>
    Log out
  </Tooltip>
</AppBar>

<main
  class="relative p-8 lg:max-w-3xl mx-auto mb-10 mt-24 md:ml-64 md:pl-16 md:max-w-md md:px-3">
  <slot />
</main>
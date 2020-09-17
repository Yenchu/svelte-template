<script>
  import TopMenuButton from './TopMenuButton.svelte';
  import dark from '../ui/dark.js';

  const darkMode = dark();

  export let isDark;
  $: isDark = $darkMode;
</script>

<TopMenuButton bind:value={$darkMode} icon="wb_sunny" />
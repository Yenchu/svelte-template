<script>
  import Tooltip from "smelte/src/components/Tooltip";
  import TopMenuButton from "./TopMenuButton.svelte";
  import dark from "../ui/dark.js";

  const darkMode = dark();
</script>

<Tooltip>
  <span slot="activator">
    <TopMenuButton bind:value={$darkMode} icon="wb_sunny" />
  </span>
  {$darkMode ? 'Disable' : 'Enable'} dark mode
</Tooltip>

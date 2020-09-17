<script>
  import { stores } from "@sapper/app";
  import Tooltip from "smelte/src/components/Tooltip";
  import AppBar from "../components/AppBar.svelte";
  import Logout from "../components/Logout.svelte";
  import { topMenu } from "../ui/menu.js";
</script>

<AppBar menu={topMenu}>
  <Tooltip>
    <span slot="activator">
      <Logout />
    </span>
    Log out
  </Tooltip>
</AppBar>

<main
  class="relative p-8 lg:max-w-3xl mx-auto mb-10 mt-24 md:ml-64 md:pl-16
  md:max-w-md md:px-3">
  <slot />
</main>

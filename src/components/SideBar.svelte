<script>
  import { stores } from "@sapper/app";
  import { writable } from "svelte/store";
  import NavigationDrawer from "smelte/src/components/NavigationDrawer";
  import List from "smelte/src/components/List";
  import ListItem from "smelte/src/components/List/ListItem.svelte";
  import { showSodeBar } from "../store/stores.js";
  import { settingsMenu } from "../ui/menu.js";

  //export const showNav = writable(true);
  export const right = writable(false);
  export const persistent = writable(true);
  export const elevation = writable(false);

  const { page } = stores();

  $: path = $page.path;
</script>

<NavigationDrawer
  bind:show={$showSodeBar}
  right={$right}
  persistent={$persistent}
  elevation={$elevation}>
  <h6 class="p-6 ml-1 pb-2 text-xs text-gray-900">Settings</h6>
  <List items={settingsMenu}>
    <span slot="item" let:item class="cursor-pointer">
      <a href={item.to}>
        <ListItem
          {...item}
          selected={path.includes(item.to)}
          dense
          navigation />
      </a>
    </span>
  </List>
</NavigationDrawer>

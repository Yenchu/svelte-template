<script>
  import { goto } from '@sapper/app';
  import Tooltip from "smelte/src/components/Tooltip";
  import TopMenuButton from './TopMenuButton.svelte';
  import { authToken } from "../store/stores.js";
  import { authPages } from "../ui/pages.js"; 

  const logout = () => {
    $authToken = null;

    // TODO: call backend logout
    
    goto(authPages.login);
  };
</script>

<Tooltip>
  <span slot="activator">
     <TopMenuButton on:click={logout} icon="exit_to_app" />
  </span>
  Log out
</Tooltip>
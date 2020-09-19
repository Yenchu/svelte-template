<script>
  import { goto, stores } from '@sapper/app';
  import TopMenuButton from './TopMenuButton.svelte';
  import { authToken } from "../store/stores.js";
  import { authPages } from "../ui/pages.js"; 

  const { session } = stores();

  const logout = () => {
    if ($session.authToken) {
      $session.authToken = null;
    }
    $authToken = null;

    // TODO: call backend logout
    
    goto(authPages.login);
  };
</script>

<TopMenuButton on:click={logout} icon="exit_to_app" />
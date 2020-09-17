<script context="module">
  import { pages } from "../../ui/pages.js"; 

  export async function preload(page, session) {
    if (session && session.authToken) {
      this.redirect(302, pages.home);
		}
  }
</script>

<script>
  import { goto, stores } from "@sapper/app";
  import Button from 'smelte/src/components/Button'
  import TextField from 'smelte/src/components/TextField'
	import { post } from "../../api/api.js";
  import { authToken } from "../../store/stores.js";

  const { session } = stores();

  let password = "";
  let email = "";
  let error;
  let loading;

  const login = async () => {
    //loading = true;

    const token = await post('login', {email, password}).catch(err => {
      //loading = false;
      console.log(err);
      error = err;
    });

    if (token) {
			$authToken = token;
			
      $session.authToken = token;
			
      goto(pages.home);
		}
  };
</script>

{#if loading}
<div></div>
{:else}
<form on:submit|preventDefault={login} method="post">
  <TextField bind:value={email} label="Email" outlined />
  <TextField type="password" bind:value={password} label="Password" outlined />
  <Button color="secondary" light block outlined>Login</Button>
</form>

{#if error}
  <p>{error}</p>
{/if}
{/if}

<script>
	import { authToken } from "../store/stores.js";
</script>

{#if $authToken}
  <p>for test: accessToken: {$authToken.accessToken}</p>
{/if}
<h4>Great success!</h4>

<figure>
  <img alt="Success Kid" src="successkid.jpg" />
  <figcaption>Have fun with Sapper!</figcaption>
</figure>

<p>
  <strong>
    Try editing this file (src/routes/index.svelte) to test live reloading.
  </strong>
</p>
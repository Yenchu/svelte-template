<script>
  import SideBar from "../../components/SideBar.svelte";

  export let segment = "";ƒ
  $: n = (segment || "").replace(new RegExp("-", "g"), " ");
  $: name = n.length ? n.charAt(0).toUpperCase() + n.slice(1) : "";
</script>

<svelte:head>
  <title>{name ? name : ''}</title>
</svelte:head>

<SideBar />
{#if segment}
  <h4 class="capitalize pb-8">{name}</h4>
{/if}
<slot />

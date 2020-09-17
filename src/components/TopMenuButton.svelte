<script>
  import Button from 'smelte/src/components/Button';
  
  export let value = '';
  export let icon = '';
</script>

<Button on:click bind:value icon={icon}
  small flat remove="p-1 h-4 w-4" iconClass="text-white" text />
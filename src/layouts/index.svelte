<script context="module">
  import { pages } from "../ui/pages.js"; 

  export async function preload() {
    this.redirect(302, pages.home);
  }
</script>
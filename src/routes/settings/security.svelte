<script>
  import Button from "smelte/src/components/Button";
  import TextField from "smelte/src/components/TextField";
  import { post } from "../../api/api.js";

  let oldPwd = "";
  let newPwd = "";
  let error;

  const changePassword = async () => {
    const result = await post("change-password", { oldPwd, newPwd }).catch(
      err => {
        console.log(err);
        error = err;
      }
    );
    console.log('change password result: ' + result);
  };
</script>

<h4>Change Password</h4>
<form on:submit|preventDefault={changePassword} method="post">
  <TextField
    type="password"
    bind:value={oldPwd}
    label="Old Password"
    outlined />
  <TextField
    type="password"
    bind:value={newPwd}
    label="New Password"
    outlined />
  <Button color="secondary" light block outlined>Submit</Button>
</form>

{#if error}
  <p>{error}</p>
{/if}

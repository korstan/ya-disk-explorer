<template>
  <h1>Loading...</h1>
</template>

<script>
import AuthToken from '@/utils/AuthToken';

export default {
  name: 'AppAuth',
  mounted() {
    let accessToken = /access_token=([^&]+)/.exec(this.$route.hash)[1];
    AuthToken.set(accessToken);
    this.$router.push('/disk');
  },
}
</script>

<style>
  
</style>
<template>
  <v-app id="inspire">
    <v-content>
      <div id="app" class="ml-5">
        <router-view />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';
import AuthToken from '@/utils/AuthToken';

export default {
  created() {
    this.$vuetify.theme.dark = false;
    axios.interceptors.response.use(undefined, (err) => {
      if (err.response.status === 401 && err.response.config && !err.response.config.__isRetryRequest) {
        AuthToken.remove();
        this.$router.push('/login');
      }
      throw err;
    });
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
}
</style>
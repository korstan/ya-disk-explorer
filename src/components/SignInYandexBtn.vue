<template>
  <v-container 
    id="button-container" 
    class="fill-height" 
    fluid
  >
    <v-row align="center" justify="center">
      <v-col class="shrink">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn color="#FF6D00" @click="redirect">
              <span 
                class="mr-2" 
                color="white" 
                v-on="on"
              >
                sign in
              </span>
            </v-btn>
          </template>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SignInYandexBtn',
  methods: {
    redirect() {
      let uri = process.env.VUE_APP_REDIRECT_URL;
      window.location =
        `https://oauth.yandex.ru/authorize?response_type=token&client_id=${process.env.VUE_APP_CLIENT_ID}${uri ? `&redirect_uri=${uri}` : ''}`;
    },
  },
};
</script>

<style>
#button-container {
  height: 100vh;
  max-height: 100%;
}
</style>
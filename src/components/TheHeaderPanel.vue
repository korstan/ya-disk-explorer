<template>
  <v-app-bar 
    app
    clipped-left 
    color="#FF6D00" 
    dense
  >
    <v-app-bar-nav-icon @click.stop="toggleNavDrawer" />
    <v-icon class="mx-4">
      fab fa-youtube
    </v-icon>
    <v-toolbar-title class="headline text-uppercase">
      <span>YANDEX</span>
      <span class="font-weight-light">DISK</span>
    </v-toolbar-title>
    <div class="flex-grow-1" />
    <v-btn 
      text
      @click.stop="signOut"
    >
      <span class="mr-2">SIGN OUT</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';
import AuthToken from '@/utils/AuthToken';

export default {
  name: 'TheHeaderPanel',
  methods: {
    ...mapActions({toggleNavDrawer: 'application/TOGGLE_NAVDRAWER'}),
    signOut() {
      AuthToken.remove();
      this.$router.push('/login');
    }
  },
}
</script>

<style>

</style>

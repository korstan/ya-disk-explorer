<template>
  <div class="home mt-2">
    <TheHeaderPanel />
    <TheNavDrawer />
    <h1>Welcome, {{ user.name }} </h1>
    <h2>Here's your files</h2>
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TheNavDrawer from '@/components/TheNavDrawer.vue';
import TheHeaderPanel from '@/components/TheHeaderPanel.vue';


export default {
  name: 'AppHome',
  components: {
    TheNavDrawer,
    TheHeaderPanel,
  },
  props: {
    source: String,
  },
  computed: {
    ...mapState({
      user: state => state.diskMeta.user,
    }),
  },
};
</script>

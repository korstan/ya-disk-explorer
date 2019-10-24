<template>
  <v-navigation-drawer v-model="isNavDrawerVisible" app clipped>
    <v-card>
      <v-card-title>{{ user.name }}</v-card-title>
      <v-card-subtitle class="ml-4">
        {{ user.login }}
      </v-card-subtitle>
      <v-card-text>
        Место на диске: <br>
        {{ usedSpace }} / {{ totalSpace }}
      </v-card-text>
    </v-card>
    <v-list dense>
      <v-list-item v-for="item in items" :key="item.text">
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-subheader class="mt-4 grey--text text--darken-1">
        I DID NOT HIT HER
      </v-subheader>
      <v-list>
        <v-list-item v-for="item in items2" :key="item.text">
          <v-list-item-avatar>
            <img :src="item.picture" alt="" />
          </v-list-item-avatar>
          <v-list-item-title v-text="item.text" />
        </v-list-item>
      </v-list>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-list-item >
            <v-list-item-action>
              <v-switch v-model="$vuetify.theme.dark" color="#FF6D00" primary v-on="on" />
            </v-list-item-action>
            <v-list-item-title class="grey--text text--darken-1">
              Night Mode
            </v-list-item-title>
          </v-list-item>
        </template>
        <span>{{!$vuetify.theme.dark ? 'Every night fucks every day up' : 'Every day patches the night up'}}</span>
      </v-tooltip>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'TheNavDrawer',
  data: () => ({
    items: [
      { icon: 'mdi-history', text: 'Часики' },
      { icon: 'mdi-grave-stone', text: 'Могилка' },
      { icon: 'mdi-clock', text: 'Ещё часики' },
    ],
    items2: [
      {
        picture:
          'https://www.lostateminor.com/wp-content/uploads/2018/09/lost-at-e-minor-the-room-youtube.jpg',
        text: 'it\'s not true',
      },
      {
        picture:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrtPEmsBZQnu4Z-S5ifm53Syzj8s4kH1ALgxLDXzaoVeEKpa9J',
        text: 'It\'s bullsh#t',
      },
      {
        picture:
          'http://m1.wholesite.com/2013/5/21/5ed9c0a8-787b-49b4-e193-4c16fb39fa8c/WiseauLead.jpg',
        text: 'I did not hit her',
      },
      {
        picture:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Tommy-Wiseau-1.jpg/220px-Tommy-Wiseau-1.jpg',
        text: 'I did naaaht',
      },
      {
        picture:
          'https://pbs.twimg.com/profile_images/446657683379077120/MYypzul8_400x400.jpeg',
        text: 'Oh hi Mark',
      },
    ],
    isNight: false,
  }),
  computed: {
    ...mapGetters({
      usedSpace: 'diskMeta/getUsedSpaceGigabytesString',
      totalSpace: 'diskMeta/getTotalSpaceGigabytesString'
    }),
    ...mapState({
      isNavDrawerVisible: state => state.application.isNavDrawerVisible,
      user: state => state.diskMeta.user,
    }),
    makeNight: () => this.isNight = !this.isNight,
  },
  mounted() {
    this.fetchInfo();
  },
  methods: {
    ...mapActions({
      fetchInfo: 'diskMeta/FETCH_META',
    }),
  },
};
</script>

<style>
</style>
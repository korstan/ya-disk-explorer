import Vue from 'vue';
import Vuex from 'vuex';
import application from '@/store/application';
import diskMeta from '@/store/diskMeta';
import files from '@/store/files';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    application,
    diskMeta,
    files,
  },
});

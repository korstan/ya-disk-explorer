import axios from 'axios';

const FETCH_URL = 'https://cloud-api.yandex.net:443/v1/disk';

export default {
  namespaced: true,
  state: {
    metaInfo: {},
    disk: {
      totalSpace: 0,
      usedSpace: 0,
    },
    user: {
      name: '...',
      login: '...',
    },
  },
  getters: {
    getTotalSpaceGigabytesString: state => (state.disk.totalSpace / Math.pow(1024, 3)).toFixed(2) + ' Гбайт',
    getUsedSpaceGigabytesString: state => (state.disk.usedSpace / Math.pow(1024, 3)).toFixed(2) + ' Гбайт',
  },
  actions: {
    FETCH_META: ({ commit }) => {
      axios
        .get(FETCH_URL)
        .then(res => {
          commit('SET_USER', { name: res.data.user.display_name, login: res.data.user.login });
          commit('SET_DISK', { totalSpace: res.data.total_space, usedSpace: res.data.used_space });
        })
        .catch(err => {
          throw err;
        }); 
    },
  },
  mutations: {
    SET_DISK: (state, disk) => (state.disk = disk),
    SET_USER: (state, user) => (state.user = user),
  },
};
